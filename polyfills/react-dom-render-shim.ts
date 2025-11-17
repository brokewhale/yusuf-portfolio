/**
 * Chakra UI v2 relies on `ReactDOM.render`, which logs warnings in React 19.
 * Shim the legacy API so dependent packages continue to work without noisy warnings.
 */
if (typeof window !== 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const ReactDOM = require('react-dom')

  if (ReactDOM?.render) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { createRoot, hydrateRoot } = require('react-dom/client')
    const roots = new Map<Element, ReturnType<typeof createRoot>>()

    ReactDOM.render = (element: React.ReactNode, container: Element, callback?: () => void) => {
      let root = roots.get(container)
      if (!root) {
        root = createRoot(container)
        roots.set(container, root)
      }
      root.render(element)
      callback?.()
      return root
    }

    ReactDOM.hydrate = (element: React.ReactNode, container: Element, callback?: () => void) => {
      let root = roots.get(container)
      if (!root) {
        root = hydrateRoot(container, element)
        roots.set(container, root)
      } else {
        root.render(element)
      }
      callback?.()
      return root
    }

    ReactDOM.unmountComponentAtNode = (container: Element) => {
      const root = roots.get(container)
      if (root) {
        root.unmount()
        roots.delete(container)
        return true
      }
      return false
    }
  }
}

