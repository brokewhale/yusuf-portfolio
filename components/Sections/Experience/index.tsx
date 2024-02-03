import { memo } from 'react'
import { Heading, Text, Stack, Tooltip } from '@chakra-ui/react'
import ExperienceTab from './ExperienceTab'
const DetailSection = () => (
  <Stack
    width={{ base: '99%', lg: '60%', xl: '75%' }}
    height="100%"
    spacing={{ base: 6, xl: 8 }}
  >
    <Heading
      size="2xl"
      style={{
        fontVariantCaps: 'small-caps',
      }}
    >
      Places i’ve worked.
    </Heading>
    <Text variant="description">
      Over the past years, I&apos;ve had the privilege of collaborating with
      various exceptional firms, where I honed my skills and talents. These
      experiences have left an indelible mark on me. I&apos;m now eagerly
      seeking my next{' '}
      <Tooltip
        label="Sol Eng, SWE, DevRel, Tech Support"
        aria-label="hit me up"
        hasArrow
      >
        <Text as="span" variant="emphasis">
          <b>venture</b>
        </Text>
      </Tooltip>{' '}
      in the industry.
    </Text>

    <ExperienceTab />
  </Stack>
)

export default memo(DetailSection)
