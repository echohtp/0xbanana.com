import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      {href != null && <Card.Cta>{cta}</Card.Cta>}
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Speaking - Jason Schorr</title>
        <meta
          name="description"
          content="I’ve spoken at events all around the world and been interviewed for many podcasts."
        />
      </Head>
      <SimpleLayout
        title="I’ve spoken at events all around the world and been interviewed for many podcasts."
        intro="One of my favorite ways to share my ideas is live on stage, where there’s so much more communication bandwidth than there is in writing, and I love podcast interviews because they give me the opportunity to answer questions instead of just present my opinions."
      >
        <div className="space-y-20">
          <SpeakingSection title="Conferences">
          <Appearance
              href="https://solana.com/events"
              title="Solana is for everyone"
              description="Practical advice for builders, creators, and anyone looking to find their way in the solana ecosystem."
              event="Mumbai Hacker House 2023"
              cta="Solana Hacker Houses"
            />

            <Appearance
              href="https://solana.com/events"
              title="Solana is for everyone"
              description="Practical advice for builders, creators, and anyone looking to find their way in the solana ecosystem."
              event="Berlin Hacker House 2023"
              cta="Solana Hacker Houses"
            />

            <Appearance
              href="https://solana.com/events"
              title="Solana Marketplace Panel"
              description=""
              event="New York Hacker House 2022"
              cta="Solana Hacker Houses"
            />

          </SpeakingSection>
          <SpeakingSection title="Podcasts">
            <Appearance
              href="https://twitter.com/animalconcerts/status/1569386538722807809"
              title="Let’s Talk Metaverse"
              description=""
              event="Animal Concerts AMA, September 2022"
              cta="Listen to spaces"
            />

            <Appearance
              href="https://twitter.com/aliquotchris/status/1548003707245039618"
              title="Dial Up #1 ft. @0xBanana"
              description="Podcast for Dialect, Web3’s most ambitious messaging platform."
              event="Dial Up, July 2022"
              cta="Listen to spaces"
            />

            <Appearance
              href="https://podcasts.apple.com/us/podcast/enter-the-metaverse-with-nfts-and-digital-art/id1589533958?i=1000538020576"
              title="Enter the Metaverse with NFTs and Digital Art"
              description="In episode one, Ron and Chris explore NFTs and digital art with Jason also known as 0xBanana. NOTICE: We are not financial advisors and are not endorsing any investments whatsoever."
              event="Metaversable, October 2021"
              cta="Listen to podcast"
            />
          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  )
}
