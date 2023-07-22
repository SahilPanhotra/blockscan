import { Alchemy, Network } from "alchemy-sdk";
import { BlockNumber } from "./components/BlockNumber";
const settings = {
  apiKey: process.env.ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};
import "./globals.css";

const alchemy = new Alchemy(settings);

export default async function Home() {
  const blocknumber = await alchemy.core.getBlockNumber();
  console.log(process.env.ALCHEMY_API_KEY);
  return (
    <div>
      <BlockNumber blocknumber={blocknumber} />
    </div>
  );
}
