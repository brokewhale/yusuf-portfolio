import { useBreakpointValue } from '@chakra-ui/react'
import useColorModeValue from './useColorModeValue'

/**
 * Custom hook for commonly used color schemes across components
 */
export const useCommonColors = () => {
  const emphasis = useColorModeValue('teal.500', 'cyan.200')
  const description = useColorModeValue('gray.800', 'gray.400')
  const background = useColorModeValue('gray.100', 'black')
  const cardBackground = useColorModeValue('blackAlpha.50', 'whiteAlpha.200')
  const borderColor = useColorModeValue('teal.500', 'cyan.200')

  return {
    emphasis,
    description,
    background,
    cardBackground,
    borderColor,
  }
}

/**
 * Custom hook for common responsive breakpoint patterns
 */
export const useCommonBreakpoints = () => {
  const isMobile = useBreakpointValue({
    base: true,
    md: true,
    lg: true,
    xl: false,
  })
  const sideBarPadding = useBreakpointValue({ base: '5', md: '8', lg: '14' })
  const mainContentPadding = useBreakpointValue({
    base: '5',
    md: '14',
    lg: '14',
    xl: 0,
  })
  const paddingTop = useBreakpointValue({ base: '20', sm: 20, md: 20 })

  return {
    isMobile,
    sideBarPadding,
    mainContentPadding,
    paddingTop,
  }
}
