import { memo } from 'react'
import {
  Heading,
  Text,
  Stack,
  Grid,
  GridItem,
  useBreakpointValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import FeaturedCard from './FeaturedCard'
import { fadeInUpSlower, galleryStagger } from 'config/animations'
import { mobileBreakpointsMap } from 'config/theme'
const MotionGrid = motion(Grid)
const MotionGridItem = motion(GridItem)

const FeaturedWorksSection = () => {
  const isMobile = useBreakpointValue(mobileBreakpointsMap)
  return (
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
        Some of my works.
      </Heading>
      <Text variant="description">
        Take a look at some of the work I`ve done in the areas of freelancing,
        open source, corporate projects, and even case studies.
      </Text>

      <MotionGrid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={{ base: 5, md: 6 }}
        variants={galleryStagger}
      >
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={1}
            title="CDEnv"
            src="/works/cdenv-logo.png"
            description="cdEnv is a safe, self-hosting system for storing keys and variables for various environments and projects. It has an HTTP API and a command-line interface that makes it simple to use."
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://cdenv-seven.vercel.app/"
            objectPosition="center"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={2}
            title="MerkleMe"
            description="The idea behind this project is to abstract away the Merkle tree process and simply provide a front end solution that allows anyone to copy + paste their whitelist into a form and click a button to automagically generate their Merkle Tree."
            src="/works/merkleme.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://www.merkleme.io/"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={3}
            title="Jufopay"
            description="People may use the JufoPay website and mobile app to pay bills and transfer money to any bank account in the country. From the ground up, I planned and implemented the platform's front-end development."
            src="/works/jufopay.jpg"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://jufopay.com"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={4}
            title="Angry Arabs NFT"
            description="As a freelancer, I created an NFT minting website. Next JS is used to create the frontend, which interacts with an ERC721 smart contract."
            src="/works/angryarabs.jpeg"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="http://angry-arab.vercel.app/"
            isMobile={isMobile}
          />
        </MotionGridItem>
      </MotionGrid>
    </Stack>
  )
}

export default memo(FeaturedWorksSection)
