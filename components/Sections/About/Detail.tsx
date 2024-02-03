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
  Tooltip,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import {
  SiJavascript,
  SiTypescript,
  SiGraphql,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiSolidity,
  SiLinux,
} from 'react-icons/si'
import { GiCoffeePot } from 'react-icons/gi'
import { IoMdOpen } from 'react-icons/io'

type ISkillSetModal = {
  onOpen(): void
}

const Detail = ({ onOpen }: ISkillSetModal) => {
  const emphasis = useColorModeValue('teal.500', 'cyan.200')
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
      <Text variant="description">
        As a
        <Tooltip
          label="I'm a coffee pot, I brew solutions! ☕️🤖"
          aria-label="solution engineer and frontend developer joke"
          hasArrow
        >
          <Text as="span" variant="emphasis">
            <b> Solutions Engineer and Frontend Developer </b>
          </Text>
        </Tooltip>
        , I excel in simplifying complex tech into intuitive solutions.
        Specializing in
        <Tooltip label="Hit me up!!" aria-label="Hit me up!!" hasArrow>
          <Text as="span" variant="emphasis">
            <b> DevRel and Tech Support </b>
          </Text>
        </Tooltip>
        , I leverage strong communication skills with technical expertise,
        driving impactful projects globally. Committed to advancing blockchain
        and
        <Tooltip label="Privacy!!🔒🌐🆔" aria-label="identity" hasArrow>
          <Text as="span" variant="emphasis">
            <b> digital identity </b>
          </Text>
        </Tooltip>
        , I'm ready to transform your tech visions into reality.
        <br /> <br />
        Here are a couple of the technologies I
        <Tooltip label="console.log((🧱, 🚀))" aria-label="log" hasArrow>
          <Text as="span" variant="emphasis">
            <b> utilize </b>
          </Text>
        </Tooltip>
        in my development.
      </Text>

      <SimpleGrid columns={2} spacing={4}>
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiJavascript} color={emphasis} fontSize="2em" />
            Javascript (ES6+)
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiTypescript} color={emphasis} fontSize="2em" />
            Typescript
          </ListItem>

          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiNodedotjs} color={emphasis} fontSize="2em" />
            Node
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiReact} color={emphasis} fontSize="2em" />
            React
          </ListItem>
        </List>
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiGraphql} color={emphasis} fontSize="2em" />
            Graphql
          </ListItem>

          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiNextdotjs} color={emphasis} fontSize="2em" />
            NextJS
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiSolidity} color={emphasis} fontSize="2em" />
            Solidity
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiLinux} color={emphasis} fontSize="2em" />
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
