import { ReactNode } from 'react'
import { Box, BoxProps } from '@chakra-ui/react'
import FadeInLayout from './FadeWhenVisible'

interface SectionProps extends Omit<BoxProps, 'id'> {
  id: string
  children: ReactNode
  className?: string
}

const Section = ({
  id,
  children,
  className = 'contentRow',
  paddingTop = { base: 0, lg: 20, xl: 0 },
  paddingBottom = { base: 12, lg: 10 },
  paddingX = 0,
  flexDirection = 'row',
  ...boxProps
}: SectionProps) => {
  return (
    <FadeInLayout>
      <Box
        id={id}
        className={className}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        paddingX={paddingX}
        flexDirection={flexDirection}
        {...boxProps}
      >
        {children}
      </Box>
    </FadeInLayout>
  )
}

export default Section
