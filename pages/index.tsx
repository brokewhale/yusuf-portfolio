import { Grid, GridItem, Stack, Box } from '@chakra-ui/react'
import type { ReactElement } from 'react'
import dynamic from 'next/dynamic'
import OpenGraphHead from 'components/Misc/OpenGraphHead'
import Section from 'components/Layout/Section'
import { useCommonBreakpoints } from 'hooks/useCommonStyles'
import Menu from 'components/Menu'
import Sidebar from 'components/Sidebar'
import Avatar from 'components/Avatar'
import About from 'components/Sections/About'
import Experience from 'components/Sections/Experience'
import FeaturedWorks from 'components/Sections/FeaturedWorks'
import ScrollMore from 'components/Misc/ScrollMore'

import { Article } from 'types/article'
// These are on bottom sections so no need to render it instantly
const DevToArticles = dynamic(() => import('components/Sections/DevToArticles'))
const GetInTouch = dynamic(() => import('components/Sections/GetInTouch'))

interface PortfolioProps {
  articles: Article[]
}

const Portfolio = ({ articles }: PortfolioProps): ReactElement => {
  const { sideBarPadding, mainContentPadding, paddingTop } =
    useCommonBreakpoints()

  return (
    <>
      <OpenGraphHead />
      <Menu />
      {/* @ts-ignore */}
      <Grid
        id="mainGrid"
        templateColumns={{
          base: 'repeat(1, 1fr)',
          lg: 'repeat(3, 1fr)',
          xl: 'repeat(5, 1fr)',
        }}
        templateRows={{
          sm: 'repeat(1, 0)',
          lg: 'repeat(2, 1fr)',
        }}
        gap={4}
      >
        <GridItem
          padding={sideBarPadding}
          marginTop={paddingTop}
          rowSpan={2}
          colSpan={{ base: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
          display="flex"
          alignContent="center"
          as="div"
          flexDirection={'row'}
        >
          <Sidebar />
        </GridItem>
        <GridItem
          as="main"
          padding={mainContentPadding}
          rowSpan={2}
          colSpan={{ base: 1, sm: 2, md: 2, lg: 3, xl: 3 }}
          overflow="hidden"
        >
          <Stack w="100" spacing={24}>
            <Section
              id="aboutMe"
              minH={{ lg: '100vh' }}
              display="flex"
              alignItems="center"
              paddingBottom={{ base: 12, lg: 0 }}
              flexDirection={{
                base: 'column-reverse',
                lg: 'row',
              }}
            >
              <About />
              <Avatar />
            </Section>

            <Section id="jobs">
              <Experience />
            </Section>

            <Section id="works" paddingTop={{ base: 0, lg: 20, xl: 20 }}>
              <FeaturedWorks />
            </Section>

            <Section id="blog" paddingTop={{ base: 0, lg: 20, xl: 20 }}>
              <DevToArticles articles={articles} />
            </Section>

            <Section
              id="contact"
              paddingTop={{ base: 0, lg: 20, xl: 20 }}
              paddingBottom={0}
            >
              <GetInTouch />
            </Section>
          </Stack>
        </GridItem>
      </Grid>
      <ScrollMore />
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://dev.to/api/articles?username=codingmage')
  const articles = await res.json()
  return {
    props: {
      articles,
    },
  }
}

export default Portfolio
