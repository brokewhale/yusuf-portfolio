import { useColorMode } from '@chakra-ui/react'

export function useColorModeValue<TLight, TDark = TLight>(
  light: TLight,
  dark?: TDark,
): TLight | TDark {
  const { colorMode } = useColorMode()
  const fallback = (dark as TLight | undefined) ?? light
  return (colorMode === 'dark' ? fallback : light) as TLight | TDark
}

export default useColorModeValue

