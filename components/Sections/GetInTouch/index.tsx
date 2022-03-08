import { memo } from 'react'
import { Heading, Text, Stack, Link, Icon, Box } from '@chakra-ui/react'
import { motion, Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { RiHeartPulseFill, RiCopyleftLine, RiGithubFill } from 'react-icons/ri'
const devdaoVariant: Variants = {
  shake: {
    rotate: [0, 15, 0, -15, 0],
    transition: {
      delay: 1.2,
      duration: 0.5,
      repeat: 2,
      ease: 'easeInOut',
    },
  },
  shake2: {
    rotate: [0, 15, 0, -15, 0],
    transition: {
      // delay: 0.5,
      duration: 0.5,
      repeat: 2,
      ease: 'easeInOut',
    },
  },
  jump: {
    y: [0, -35, 0],
    transition: {
      delay: 1.8,
      duration: 0.5,
      repeat: 3,
      ease: 'easeInOut',
    },
  },
}

const GetInTouch = () => {
  const [ref, inView] = useInView()
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
        Say hi!{' '}
        <Text as="span" fontSize="2xl" variant="emphasis">
          <motion.div
            style={{ display: 'inline-block', cursor: 'pointer' }}
            variants={devdaoVariant}
            ref={ref}
            animate={inView ? ['shake', 'jump'] : false}
            whileTap={['shake2', 'jump']}
          >
            (D_D)
          </motion.div>
        </Text>
      </Heading>
      <Text variant="description">
        In my spare time, I enjoy experimenting with new JS frameworks, even
        though I may never use them, and I also enjoy customizing my linux
        desktop environment. So please feel free to send me a message on any of
        my social media accounts or send me an{' '}
        <Link
          href="mailto:yusufkehinde11@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          email
        </Link>
        .
      </Text>

      <Box
        spacing={0.5}
        textAlign="center"
        fontFamily="monospace"
        paddingTop={{ base: 10, lg: 20, xl: 20 }}
        paddingBottom={{ base: 5, lg: 18 }}
      ></Box>
    </Stack>
  )
}

export default memo(GetInTouch)
