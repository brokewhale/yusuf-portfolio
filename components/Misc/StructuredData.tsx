import Head from 'next/head'

const StructuredData = () => {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Yusuf Kehinde Hussein',
    alternateName: ['Kenny', 'KH Yusuf'],
    url: 'https://yusufkehinde.dev',
    image: 'https://yusufkehinde.dev/avatar-light.png',
    sameAs: [
      'https://github.com/brokewhale',
      'https://www.linkedin.com/in/kehindeyusuf',
      'https://dev.to/codingmage',
      'https://x.com/0xKenny__',
    ],
    jobTitle: [
      'Solutions Engineer',
      'Frontend Developer',
      'Technical Support Engineer',
      'Developer Relations',
      'Blockchain Developer',
      'DevRel Specialist',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Tech Solutions',
    },
    alumniOf: {
      '@type': 'Organization',
      name: 'University',
    },
    knowsAbout: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'AWS',
      'Blockchain',
      'Solidity',
      'Developer Relations',
      'Technical Support',
      'Customer Support',
      'Community Building',
      'API Support',
      'Technical Documentation',
      'DevRel',
      'Digital Identity',
      'Web3',
      'Frontend Development',
      'Solutions Engineering',
      'Technical Writing',
    ],
    email: 'yusufkehinde11@gmail.com',
    description:
      'Experienced Solutions Engineer, Frontend Developer, Technical Support Engineer, and Developer Relations expert specializing in React, Next.js, TypeScript, and Blockchain technology. 8+ years in tech solutions, customer support, community building, and crypto development.',
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Yusuf Kehinde Hussein Portfolio',
    alternateName: 'KH Yusuf Portfolio',
    url: 'https://yusufkehinde.dev',
    description:
      'Professional portfolio of Yusuf Kehinde Hussein - Solutions Engineer, Frontend Developer, Technical Support Engineer, Developer Relations Expert, and Blockchain Specialist',
    author: {
      '@type': 'Person',
      name: 'Yusuf Kehinde Hussein',
    },
    inLanguage: 'en-US',
    copyrightYear: new Date().getFullYear(),
    copyrightHolder: {
      '@type': 'Person',
      name: 'Yusuf Kehinde Hussein',
    },
  }

  const professionalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Yusuf Kehinde Hussein - Tech Solutions',
    description:
      'Professional solutions engineering, frontend development, technical support, developer relations, and blockchain consulting services',
    provider: {
      '@type': 'Person',
      name: 'Yusuf Kehinde Hussein',
    },
    areaServed: 'Worldwide',
    serviceType: [
      'Solutions Engineering',
      'Frontend Development',
      'Technical Support Engineering',
      'Developer Relations',
      'React Development',
      'Blockchain Development',
      'DevRel Services',
      'Customer Support',
      'Community Building',
      'Tech Consulting',
      'API Support',
      'Technical Documentation',
    ],
    url: 'https://yusufkehinde.dev',
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://yusufkehinde.dev',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'About',
        item: 'https://yusufkehinde.dev#aboutMe',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Experience',
        item: 'https://yusufkehinde.dev#jobs',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Portfolio',
        item: 'https://yusufkehinde.dev#works',
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Contact',
        item: 'https://yusufkehinde.dev#contact',
      },
    ],
  }

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </Head>
  )
}

export default StructuredData
