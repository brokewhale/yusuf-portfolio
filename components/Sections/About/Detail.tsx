import { memo } from 'react'
import {
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  Icon,
  SimpleGrid,
  Box,
  Stack,
} from '@chakra-ui/react'
import {
  SiJavascript,
  SiTypescript,
  SiAmazonwebservices,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiSolidity,
  SiLinux,
} from 'react-icons/si'
import { GiCoffeePot } from 'react-icons/gi'
import { IoMdOpen } from 'react-icons/io'
import { useCommonColors } from 'hooks/useCommonStyles'

interface SkillSetModalProps {
  onOpen: () => void
}

const Detail = ({ onOpen }: SkillSetModalProps) => {
  const { emphasis } = useCommonColors()
  const currentYear = new Date().getFullYear()
  const professionalYears = currentYear - 2016

  return (
    <Stack width={{ base: '100%', lg: '70%' }} spacing={{ base: 6, xl: 8 }}>
      <Heading
        as="h4"
        size="2xl"
        letterSpacing={1.8}
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        What i do.
      </Heading>
      <Text
        variant="description"
        fontSize={{ base: 'md', lg: 'lg' }}
        lineHeight="1.6"
      >
        As a{' '}
        <Text as="strong" variant="emphasis" fontWeight="600">
          Solutions Engineer and Frontend Developer
        </Text>
        , I excel in simplifying complex tech into intuitive solutions.
        Specializing in{' '}
        <Text as="strong" variant="emphasis" fontWeight="600">
          DevRel and Tech Support
        </Text>
        , I leverage strong communication skills with technical expertise,
        driving impactful projects globally. Committed to advancing blockchain
        and{' '}
        <Text as="strong" variant="emphasis" fontWeight="600">
          digital identity
        </Text>
        , I&apos;m ready to transform your tech visions into reality.
      </Text>
      <Text variant="description" fontSize="sm" mt={4}>
        Here are a couple of the technologies I{' '}
        <Text as="span" variant="emphasis" fontWeight="600">
          utilize
        </Text>{' '}
        in my development:
      </Text>

      <SimpleGrid columns={2} spacing={4}>
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiJavascript} color={emphasis} fontSize="1.8em" />
            Javascript
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiTypescript} color={emphasis} fontSize="1.8em" />
            Typescript
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiNodedotjs} color={emphasis} fontSize="1.8em" />
            Node
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiReact} color={emphasis} fontSize="1.8em" />
            React
          </ListItem>
        </List>
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon
              as={SiAmazonwebservices}
              color={emphasis}
              fontSize="1.8em"
            />
            AWS
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiNextdotjs} color={emphasis} fontSize="1.8em" />
            NextJS
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiSolidity} color={emphasis} fontSize="1.8em" />
            Solidity
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiLinux} color={emphasis} fontSize="1.8em" />
            Linux
          </ListItem>
        </List>
        <Box>
          <Text
            as="button"
            variant="emphasis"
            fontSize="smaller"
            textAlign="left"
            onClick={onOpen}
          >
            See my full arsenal <Icon as={IoMdOpen} />
          </Text>
        </Box>
      </SimpleGrid>
    </Stack>
  )
}

export default memo(Detail)
