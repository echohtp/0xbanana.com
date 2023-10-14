// components/BuyButton.tsx
import React, { useMemo, useState } from 'react';
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";

import { Connection, PublicKey, Transaction, SystemProgram } from '@solana/web3.js';
import { useWallet } from '@solana/wallet-adapter-react'

const BuyButton = ({ currencyCombo, wallet }) => {
    const _wallet = useWallet()
    const [fundsVerified, setFundsVerified] = useState(true);
    const [loading, setLoading] = useState(true);


    const sendTokens = async (currencyCombo, wall) => {
        console.log("Sending function")
        if (!wall.publicKey) throw new WalletNotConnectedError();

        try {
            const fromWallet = _wallet.publicKey;
            const toWallet = new PublicKey(process.env.NEXT_PUBLIC_BANK);

            const connection = new Connection(process.env.NEXT_PUBLIC_RPC); // Replace with the appropriate cluster URL


            console.log(`From: ${fromWallet.toBase58()}`)
            console.log(`To: ${process.env.NEXT_PUBLIC_BANK}`)

            // const transaction = new Transaction()

            // for (const currency of currencyCombo) {
            //     if (currency.code === 'SOL') {
            //         transaction.add(
            //             SystemProgram.transfer({
            //                 fromPubkey: fromWallet,
            //                 toPubkey: toWallet,
            //                 lamports: currency.price * 1e9,
            //             })
            //         );
            //     } else {
            //         console.log("not solana")
            //         const source = await getAssociatedTokenAddress(
            //             new PublicKey(priceTags[i].splToken),
            //             wall.publicKey
            //         )
            //     }
            // }

            const transaction = new Transaction().add(
                SystemProgram.transfer({
                  fromPubkey: publicKey,
                  toPubkey: Keypair.generate().publicKey,
                  lamports: 1,
                })
              );
              
              console.log(transaction)
              const signature = await _wallet.sendTransaction(transaction, connection);
                console.log(signature)
              await connection.confirmTransaction(signature, "processed");


            console.log('Transaction sent:', signature);
        } catch (error) {
            console.error('Error sending transaction:', error);
        }
    };


    useMemo(() => {
        const checkFunds = async () => {
            const connection = new Connection(process.env.NEXT_PUBLIC_RPC); // Replace with the appropriate cluster URL

            for (const currency of currencyCombo) {
                if (!wallet.publicKey) return

                if (currency.code === 'SOL') { // Replace 'SOL' with the appropriate code for Solana in your currencyCombo array
                    const balance = await connection.getBalance(wallet.publicKey)

                    // Convert the balance to SOL (it's usually returned in lamports)
                    const balanceInSol = balance / 1e9;
                    console.log(`${currency.code}: ${balanceInSol}`)
                    if (balanceInSol < currency.price) {
                        console.log("setting false, sol")
                        setFundsVerified(false);
                    }
                } else {
                    let balance = await connection.getParsedTokenAccountsByOwner(
                        wallet.publicKey,
                        {
                            mint: new PublicKey(currency.tokenAddress)
                        }
                    )

                    balance = balance.value[0]?.account.data.parsed.info.tokenAmount.uiAmount ?? 0
                    console.log(`${currency.code}: ${balance}`)

                    if (balance < currency.price) {
                        console.log("setting false: ", currency.code)
                        setFundsVerified(false);
                    }

                }
            }
            setLoading(false);
        };

        checkFunds().catch((error) => {
            console.error('Error verifying funds:', error);
            setLoading(false);
        });
    }, [wallet]);

    if (loading) {
        return <button disabled>Loading...</button>;
    }

    return (
        <button
            disabled={!fundsVerified}
            className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition duration-300 ease-in-out hover:shadow-lg mb-2 ${!fundsVerified ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={async () => {
                if (fundsVerified) {
                    console.log("we can make it")
                    sendTokens(currencyCombo, _wallet)
                }
            }}
        >
            Buy ({currencyCombo.map((currency) => `${currency.symbol}${currency.price}`).join(' + ')})
        </button>
    );
};

export default BuyButton;
