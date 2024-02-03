import { Link, Text, Tooltip } from '@chakra-ui/react'

export type Company =
  | 'Polygon'
  | 'IQ.wiki'
  | 'Contribution Labs'
  | 'Nativebrands'
  | 'BPTech'

export type CompanyDetail = {
  name: string
  longName: string
  subDetail?: string
  url: string
  position: string
  duration: string
  logo: {
    light: string
    dark?: string
  }
  roles?: JSX.Element[]
}

export const Experiences: {
  [key in Company]: CompanyDetail
} = {
  Polygon: {
    name: 'Polygon Labs',
    longName: 'Polygon Labs',
    subDetail: 'Technology',
    url: 'https://polygon.technology/',
    position: 'Solutions Engineer (Blockchain & Identity) ',
    duration: 'July 2022 - Feb 2024',
    logo: {
      light: '/worked_at_logos/polygon/polygonlogo.svg',
      dark: '/worked_at_logos/polygon/polygonlogo-white.svg',
    },
    roles: [
      <>
        Collaborated with Business Development and Technical Sales in the
        development of the
        <Tooltip
          label="Lead Solutions Engineer responsible for making this a success (click to learn more)"
          aria-label="Clarify"
          hasArrow
        >
          <Link
            variant="primaryLink"
            href="https://marketplace.polygonid.me/ecosystem"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            PolygonID ecosystem{' '}
          </Link>
        </Tooltip>
        from ground up, providing solutions, support, and use-case demos,
        alongside pre- and post-sale consultations.
      </>,
      <>
        Offering support, solutions and technical documentation on blockchain
        related issues related to Polygon's suite of solutions
      </>,
      <>
        I collaborated with the documentation team to overhaul the
        <Link
          variant="primaryLink"
          href="https://0xpolygonid.github.io/tutorials/"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          outdated{' '}
        </Link>
        PolygonID documentation, transforming it into a comprehensively
        <Link
          variant="primaryLink"
          href="https://devs.polygonid.com/"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          revised version{' '}
        </Link>
        . This update significantly simplifies the complexity of the previous
        documentation, making integration a seamless process
      </>,
      <>
        Immersed myself in Polygon solutions
        <Text variant="emphasis" as="span">
          <b> (POS, zkEVM, CDK, PolygonID)</b>
        </Text>
        , delivering solutions and technical support to developers and partners
        <Text variant="emphasis" as="span">
          <b> (e.g., SAFE, CircleCI, Verida, Flipkart, Guild, etc.)</b>
        </Text>
        , along with pre- and post-sale consultations.
      </>,
    ],
  },
  'IQ.wiki': {
    name: 'IQ.wiki',
    longName: 'Everipedia',
    subDetail: 'prev Everipedia',
    url: 'https://iq.wiki/',
    position: 'Fullstack Blockchain developer ',
    duration: 'March 2022 - July 2022',
    logo: {
      light: '/worked_at_logos/iq/IQwiki.svg',
      dark: '/worked_at_logos/iq/iqwiki-dark.png',
    },
    roles: [
      <>
        Partnered with cross-functional teams to launch
        <Link
          variant="primaryLink"
          href="https://iq.wik/"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          IQ.wiki{' '}
        </Link>
        , the first blockchain-based Wikipedia, establishing new standards in
        decentralized knowledge sharing.
      </>,
      <>
        Solely spearheaded the Brainies NFT project, managing the lifecycle from
        Solidity smart contract development to frontend decentralized
        application (dApp) implementation, showcasing technical versatility and
        innovation
      </>,
    ],
  },
  'Contribution Labs': {
    name: 'Contribution Labs',
    longName: 'Deform',
    subDetail: 'prev Contribution Labs',
    url: 'https://www.deform.cc/',
    position: 'Frontend Engineer',
    duration: 'March 2022',
    logo: {
      light: '/worked_at_logos/contributionsLab/contributionslab.png',
      dark: '/worked_at_logos/contributionsLab/contributionslab.png',
    },
    roles: [
      <>
        Actively collaborated with the Contributions Lab team to accelerate the
        <Link
          variant="primaryLink"
          href="https://mintkudos.xyz/"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          MintKudos{' '}
        </Link>{' '}
        app's MVP development, ensuring its readiness for user engagement and
        real-world application.
      </>,
      <>
        Enhancing the MintKudos app's codebase to optimize performance,
        implement best practices, and elevate the overall user experience.
      </>,
    ],
  },
  Nativebrands: {
    name: 'Nativebrands',
    longName: 'Nativebrands Digital Agency',
    subDetail: 'Digital Agency',
    url: 'https://nativebrands.co',
    position: 'Frontend Engineer',
    duration: 'Jun 2021 - Feb 2022',
    logo: {
      light: '/worked_at_logos/nativebrands/logo-light.svg',
      dark: '/worked_at_logos/nativebrands/logo-dark.svg',
    },
    roles: [
      <>
        Implemented the user interface and integrated the Restful API to display
        all important data from the dashboard on the{' '}
        <Link
          variant="primaryLink"
          href="https://xchange-ng.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          xchange website
        </Link>{' '}
        .
      </>,
      <>
        I worked on integrating the{' '}
        <Link
          variant="primaryLink"
          href="https://xchange-ng.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          xchange
        </Link>{' '}
        project dashboard with a PHP-based Restful API.
      </>,
      <>
        My first major endeavor, which started in early June, was to refactor
        the
        <Link
          variant="primaryLink"
          href="https://xchange-ng.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          xchnage
        </Link>{' '}
        project codebase into a more modern architectural design approach.
      </>,
    ],
  },
  BPTech: {
    name: 'BP Tech',
    longName: 'Business Process Technology',
    subDetail: 'Software Development as a Service',
    url: 'https://bptechng.com/',
    position: 'Frontend Developer',
    duration: 'Oct 2020 - Jun 2021',
    logo: {
      light: '/worked_at_logos/bptech/bptech-light.svg',
      dark: '/worked_at_logos/bptech/bptech-dark.svg',
    },
    roles: [
      <>
        I was successful in getting the project into production, as well as
        assisting the marketing team with the launch.
      </>,
      <>
        I worked on integrating the{' '}
        <Link
          variant="primaryLink"
          href="https://www.jufopay.com/"
          target="_blank"
          rel="noreferrer"
        >
          Jufopay website
        </Link>{' '}
        with the NodeJS Restful API.
      </>,
      <>
        Using React js, I built and implemented the user experience for the
        <Link
          aria-label="Braze"
          href="https://www.jufopay.com/"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          Jufopay website.
        </Link>{' '}
        from the ground up.
      </>,
      <>
        My first big assignment after being hired in early October was to assist
        in the selection of a design for the
        <Link
          aria-label="Braze"
          href="https://www.jufopay.com/"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          Jufopay website.
        </Link>{' '}
      </>,
    ],
  },
}

export const ExperiencesList = [
  Experiences.Polygon,
  Experiences['IQ.wiki'],
  Experiences['Contribution Labs'],
  Experiences.Nativebrands,
  Experiences.BPTech,
]
