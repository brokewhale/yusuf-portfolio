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
      Since 2020, I`ve had the opportunity to work with a number of firms,
      allowing me to polish my abilities and talents. These businesses will
      forever hold a special place in my heart. I`m currently on the lookout for
      my next{' '}
      <Tooltip label="Hit me up" aria-label="hit me up" hasArrow>
        <Text as="span" variant="emphasis">
          <b>frontend development</b>
        </Text>
      </Tooltip>{' '}
      position.
    </Text>

    <ExperienceTab />
  </Stack>
)

export default memo(DetailSection)
