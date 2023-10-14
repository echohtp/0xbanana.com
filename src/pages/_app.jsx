import { useEffect, useRef } from 'react'
import React, { useMemo } from 'react'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { ToastContainer } from 'react-toastify'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'

require('@solana/wallet-adapter-react-ui/styles.css')
import 'react-toastify/dist/ReactToastify.css'


import '@/styles/tailwind.css'
import 'focus-visible'

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export default function App({ Component, pageProps, router }) {
  let previousPathname = usePrevious(router.pathname)

  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
  // update this to https://ssc-dao.genesysgo.net
  const network = WalletAdapterNetwork.Mainnet

  // You can also provide a custom RPC endpoint.
  const endpoint = useMemo(() => process.env.NEXT_PUBLIC_RPC, [network])

  // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
  // Only the wallets you configure here will be compiled into your application, and only the dependencies
  // of wallets that your users connect to will be loaded.
  // const wallets = useMemo(
  //   () => [

  //     new PhantomWalletAdapter(),
  //     new SolflareWalletAdapter({ network }),
  //   ],
  //   [network]
  // )



  return (
    <>
    <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <ToastContainer />

            <div className="fixed inset-0 flex justify-center sm:px-8">
              <div className="flex w-full max-w-7xl lg:px-8">
                <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
              </div>
            </div>
            <div className="relative">
              <Header />
              <main>
                <Component previousPathname={previousPathname} {...pageProps} />
              </main>
              <Footer />
            </div>
            </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  )
}
