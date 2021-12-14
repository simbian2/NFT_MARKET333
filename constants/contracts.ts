import { AbiItem } from 'web3-utils';
import web3 from "../connection/web3";
import addresses from './addresses';
import NFTCollection from '../abis/NFT.json'
import NFTMarketCollection from '../abis/NAMarket.json'

const contracts = {
  nftContract: new web3.eth.Contract(NFTCollection.abi as unknown as AbiItem, addresses.nft),
  nftMarketContract: new web3.eth.Contract(NFTMarketCollection.abi as unknown as AbiItem, addresses.nftMarket)
};

export default contracts