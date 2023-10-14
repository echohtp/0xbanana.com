import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'
import { useRouter } from 'next/router'


import { Container } from '@/components/Container'
import BuyButton from '@/components/BuyButton'
import artPiecesData from '@/data/artPieces';
import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';


export default function About() {


    const router = useRouter()
    const { index } = router.query

    let art = artPiecesData[index] ?? artPiecesData[0]

    const wallet = useWallet()

    return (
        <>
            <Head>
                <title>Art - {art.title}</title>
                <meta
                    name="description"
                    content=""
                />
            </Head>
            <Container className="mt-16 sm:mt-32">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                    {art.title}
                </h1>
                <Image
                    src={art.image}
                    width={600}
                    height={600}
                    alt=""
                    sizes="(min-width: 1024px) 32rem, 20rem"
                    className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                />
                <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                    <p>
                        {art.description}
                    </p>

                    {!wallet.connected && <WalletMultiButton/>}

                    {wallet.connected && 
                    art.currencies.map((currencyCombo, index) => (
                        <><BuyButton key={index} currencyCombo={currencyCombo} wallet={wallet} /><br/></>
                    ))}

                </div>

            </Container>
        </>
    )
}
