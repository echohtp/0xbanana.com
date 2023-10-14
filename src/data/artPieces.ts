// data/artPieces.ts
import { NATIVE_MINT } from '@solana/spl-token'

const USDC_MINT = "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"
const BONK_MINT = "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263"

const artPieces = [
  {
    id: 1,
    title: "Art Piece 1",
    description: "This is a beautiful piece of art.",
    image: "https://images-cdn.exchange.art/ipfs/bafybeicg7zygttfrmderqy2k3ofe5e5xdmelse5flgquotjdkha5i7gq4a/7wzGGmsS2VXV9CxmH8TwTAwutvrbLyt9q9GeTrSoDJvj.jpg?quality=20&width=300&blur=80&format=pjpg&auto=webp",
    projectId: "P1",
    currencies: [
      [
        // { code: "USD", price: 0.001, symbol: "$", tokenAddress:  USDC_MINT },
        { code: "SOL", price: 0.001, symbol: "◎", tokenAddress: NATIVE_MINT.toBase58() }
      ],
      [
        { code: "USD", price: 0.1, symbol: "$", tokenAddress: USDC_MINT },
      ]
    ]
  }
];

export default artPieces;
