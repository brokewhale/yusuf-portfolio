import { Link, Text, Tooltip } from '@chakra-ui/react'
import { ReactNode } from 'react'

export type Company =
  | 'Optimism'
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
  roles?: ReactNode[]
}

export const Experiences: {
  [key in Company]: CompanyDetail
} = {
  Optimism: {
    name: 'Optimism',
    longName: 'OP Labs (Optimism)',
    subDetail: 'Layer 2 Infrastructure · Remote',
    url: 'https://optimism.io/',
    position: 'Developer Support Engineer',
    duration: 'Apr 2024 - Present',
    logo: {
      light: '/worked_at_logos/optimism/op_dark.svg',
      dark: '/worked_at_logos/optimism/op_light.svg',
    },
    roles: [
      <>
        Served as the
        <Text variant="emphasis" as="span">
          {' '}
          technical point of contact{' '}
        </Text>
        for OP Stack partner integrations, steering teams from discovery to
        launch readiness while keeping deployments predictable.
      </>,
      <>
        Partnered closely with
        <Text variant="emphasis" as="span">
          {' '}
          Engineering, Product, and DevRel{' '}
        </Text>
        counterparts to resolve blockers, elevate developer tooling, and close
        documentation gaps.
      </>,
      <>
        Turned developer feedback into prioritized fixes that shaped
        <Text variant="emphasis" as="span">
          {' '}
          product improvements and Superchain roadmap decisions
        </Text>
        .
      </>,
      <>
        Produced
        <Text variant="emphasis" as="span">
          {' '}
          tailored demos, runbooks, and enablement assets{' '}
        </Text>
        that dramatically reduced onboarding time for new chain operators and
        app developers.
      </>,
    ],
  },
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
        Teamed with Business Development and Technical Sales to launch the
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
        from the ground up, designing solutions, delivering live demos, and
        leading pre- and post-sale consultations.
      </>,
      <>
        Delivered Tier 2/3 support, architecture guidance, and technical content
        across Polygon's portfolio, unblocking partner builds end to end.
      </>,
      <>
        Co-led the documentation refresh of the
        <Link
          variant="primaryLink"
          href="https://0xpolygonid.github.io/tutorials/"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          outdated{' '}
        </Link>
        PolygonID documentation, transforming it into a comprehensive
        <Link
          variant="primaryLink"
          href="https://devs.polygonid.com/"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          revised version{' '}
        </Link>
        that simplified complex workflows and made integration routine.
      </>,
      <>
        Immersed myself in Polygon solutions
        <Text variant="emphasis" as="span">
          <b> (POS, zkEVM, CDK, PolygonID)</b>
        </Text>
        , delivering solutions and technical guidance to developers and partners
        <Text variant="emphasis" as="span">
          <b> (e.g., SAFE, CircleCI, Verida, Flipkart, Guild, etc.)</b>
        </Text>
        alongside go-to-market support.
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
        Partnered with product, design, and protocol teams to launch
        <Link
          variant="primaryLink"
          href="https://iq.wik/"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          IQ.wiki{' '}
        </Link>
        , the first blockchain-native encyclopedia, establishing new standards
        for decentralized knowledge sharing.
      </>,
      <>
        Owned the Brainies NFT initiative end to end—Solidity contracts,
        metadata pipelines, and the user-facing dApp—showcasing full-stack web3
        execution.
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
        Collaborated with the Contributions Lab team to accelerate the
        <Link
          variant="primaryLink"
          href="https://mintkudos.xyz/"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          MintKudos{' '}
        </Link>{' '}
        app's MVP delivery, ensuring it was stable for the initial launch
        cohort.
      </>,
      <>
        Modernized the MintKudos frontend to boost performance, embed best
        practices, and polish the overall UX.
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
        Built the user interface and wired the REST API to surface critical
        dashboard data on the{' '}
        <Link
          variant="primaryLink"
          href="https://xchange-ng.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          xchange website
        </Link>{' '}
        , keeping parity with the internal trading console.
      </>,
      <>
        Developed the{' '}
        <Link
          variant="primaryLink"
          href="https://xchange-ng.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          xchange
        </Link>{' '}
        dashboard and PHP-based REST API integration, ensuring reliable payouts
        for customers.
      </>,
      <>
        Led a sweeping refactor of the
        <Link
          variant="primaryLink"
          href="https://xchange-ng.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          xchnage
        </Link>{' '}
        codebase into a modern component-driven architecture.
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
        Guided the flagship project into production while equipping the
        marketing team with launch assets and timelines.
      </>,
      <>
        Integrated the{' '}
        <Link
          variant="primaryLink"
          href="https://www.jufopay.com/"
          target="_blank"
          rel="noreferrer"
        >
          Jufopay website
        </Link>{' '}
        with the Node.js REST API to keep payment flows consistent across
        channels.
      </>,
      <>
        Designed and shipped the entire user experience for the
        <Link
          aria-label="Braze"
          href="https://www.jufopay.com/"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          Jufopay website
        </Link>{' '}
        from the ground up using React.
      </>,
      <>
        Led the design-selection process for the refreshed
        <Link
          aria-label="Braze"
          href="https://www.jufopay.com/"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          Jufopay website
        </Link>{' '}
        to ensure brand alignment before implementation.
      </>,
    ],
  },
}

export const ExperiencesList = [
  Experiences.Optimism,
  Experiences.Polygon,
  Experiences['IQ.wiki'],
  Experiences['Contribution Labs'],
  Experiences.Nativebrands,
  Experiences.BPTech,
]
