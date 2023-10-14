import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'
import ArtGrid from '@/components/ArtGrid'
import { Card } from '@/components/Card'
import { CollectionCard } from '@/components/CollectionCard'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'

const projects = [
  {
    name: 'Tropical Imagination',
    description:
      '',
    link: { href: 'https://exchange.art/series/Tropical%20Imagination/nfts', label: 'exchange.art' },
    logo: logoPlanetaria,
    backgroundImage: "https://images-cdn.exchange.art/non_live_data/creator_data/BqfUXbHDegaNQhJepjxYxTqD9mC2/brands/0xBanana/series/Tropical%20Imagination/avatar-40e72a6f-3aee-4b0d-99e0-3d084e6b4e8e.png?optimize=low&auto=avifwebp"
  },
  {
    name: 'Bodies',
    description:
      '',
    link: { href: 'https://exchange.art/series/Bodies/nfts', label: 'exchange.art' },
    logo: logoPlanetaria,
    backgroundImage: "https://images-cdn.exchange.art/non_live_data/creator_data/BqfUXbHDegaNQhJepjxYxTqD9mC2/brands/0xBanana/series/Bodies/avatar-08aaf9be-9aef-488e-aa22-adb317360041.png?optimize=low&auto=avifwebp"
  },
  {
    name: 'Mural Neural Dreams',
    description:
      '',
    link: { href: 'https://exchange.art/series/Mural%20Neural%20Dreams', label: 'exchange.art' },
    logo: logoPlanetaria,
    backgroundImage: "https://images-cdn.exchange.art/non_live_data/creator_data/BqfUXbHDegaNQhJepjxYxTqD9mC2/brands/0xBanana/series/Mural%20Neural%20Dreams/avatar-12b2cec4-c2fc-42f1-a6ed-ad0b2b5e7929.jpeg?optimize=low&auto=avifwebp"
  },
  {
    name: 'Electric Sheep',
    description:
      '',
    link: { href: 'https://exchange.art/series/Electric%20Sheep', label: 'exchange.art' },
    logo: logoAnimaginary,
    backgroundImage: "https://images-cdn.exchange.art/non_live_data/creator_data/BqfUXbHDegaNQhJepjxYxTqD9mC2/brands/0xBanana/series/Electric%20Sheep/avatar-80f90cb4-509d-4a40-8a50-8b4271501161.png?optimize=low&auto=avifwebp"
  },
  {
    name: 'System Engineers',
    description:
      '',
    link: { href: 'https://exchange.art/series/System%20Engineers/nfts', label: 'exchange.art' },
    logo: logoAnimaginary,
    backgroundImage: "https://images-cdn.exchange.art/non_live_data/creator_data/BqfUXbHDegaNQhJepjxYxTqD9mC2/brands/0xBanana/series/System%20Engineers/avatar-9543cf97-fd0b-4fd4-815d-07ba6fb7da8b.png?optimize=low&auto=avifwebp"
  },
  {
    name: 'Vended',
    description:
      '',
    link: { href: 'https://exchange.art/series/Vended/nfts', label: 'exchange.art' },
    logo: logoAnimaginary,
    backgroundImage: "https://images-cdn.exchange.art/non_live_data/creator_data/BqfUXbHDegaNQhJepjxYxTqD9mC2/brands/0xBanana/series/Vended/avatar-7067f12c-5d7d-41ff-9f46-e20986979fb0.jpeg?optimize=low&auto=avifwebp"
  },
   {
    name: 'Bold Lines',
    description:
      '',
    link: { href: 'https://exchange.art/series/Bold%20Lines/nfts', label: 'exchange.art' },
    logo: logoAnimaginary,
    backgroundImage: "https://images-cdn.exchange.art/non_live_data/creator_data/BqfUXbHDegaNQhJepjxYxTqD9mC2/brands/0xBanana/collections/Bold%20Lines/avatar-1c671dab-05c9-4079-bacb-3da532dd85de.jpeg?optimize=low&auto=avifwebp"
  },
  {
    name: 'Imperfect Illusions',
    description:
      '',
    link: { href: 'https://exchange.art/series/Imperfect%20Illusions', label: 'exchange.art' },
    logo: logoAnimaginary,
    backgroundImage: "https://images-cdn.exchange.art/non_live_data/creator_data/BqfUXbHDegaNQhJepjxYxTqD9mC2/brands/0xBanana/collections/Imperfect%20Illusions/avatar-2145c7bf-fefc-43f8-8ad8-9ebe3cf807be.png?optimize=low&auto=avifwebp"
  },
  {
    name: 'Fructose Fractals',
    description:
      '',
    link: { href: '#', label: 'github.com' },
    logo: logoAnimaginary,
    backgroundImage: "https://images-cdn.exchange.art/non_live_data/creator_data/BqfUXbHDegaNQhJepjxYxTqD9mC2/brands/0xBanana/collections/Fructose%20Fractals/avatar-cd463ac3-848a-405f-a3b3-bf8c4615accf.png?optimize=low&auto=avifwebp"
  }
]

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-4">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3">
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      {/* <Card.Cta>{cta}</Card.Cta> */}
    </Card>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>Art - Jason Schorr</title>
        <meta
          name="description"
          content=""
        />
      </Head>

      {/* <SimpleLayout
        title="Art currently for sale"
        intro=""
      >
        <ArtGrid />
      </SimpleLayout> */}
      <SimpleLayout
        title="Collections"
        intro=""
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <CollectionCard as="li" className="pb-20 pt-20 pl-4" key={project.name} backgroundImage={project.backgroundImage}>
              {/* <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div> */}
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <CollectionCard.Link href={project.link.href}>{project.name}</CollectionCard.Link>
              </h2>
              <CollectionCard.Description>{project.description}</CollectionCard.Description>
              
            </CollectionCard>
          ))}
        </ul>
      </SimpleLayout>
      <SimpleLayout
        title="Exhibitions I've been part of "
        intro="My art goes places." >
        <div className="space-y-20">
          <SpeakingSection title="Exhibitions">

          <Appearance
              title="Solana Breakpoint Conference"
              event="October 2023"
            />

          <Appearance
              title="imnotArt Community Gallery #21"
              event="September 2023"
            />

            <Appearance
              title="3rd Land X URS"
              event="June 2023"
            />

            <Appearance
              title="The Mangrove Project"
              event="May 2023"
            />

            <Appearance
              title="CODA 6"
              event="April 2023"
            />

            <Appearance
              title="Curations of Digital Art (CODA)"
              event="December 2022"
            />

            <Appearance
              title="NFT ART CON Chiang Mai, Thailand"
              event="November 2022"
            />

            <Appearance
              title="imnotArt Community Gallery #20"
              event="November 2022"
            />

            <Appearance
              title="Curations of Digital Art (CODA)"
              event="October 2022"
            />

            <Appearance
              title="Fractal Monsters - Classic Calculations"
              event="October 2022"
            />

            <Appearance
              title="Skeleton Crew Skullana"
              event="October 2022"
            />

            <Appearance
              title="Sol Army Gala"
              event="May 2022"
            />

            <Appearance
              title="Solana Hacker House Bahamas"
              event="April 2022"
            />

            <Appearance
              title="Solana Hacker House NYC"
              event="March 2022"
            />

            <Appearance
              title="Solana Hacker House Prague"
              event="March 2022"
            />

            <Appearance
              title="The NFT DAO Winter Solstice Gala"
              event="Dec 2021"
            />

          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  )
}

