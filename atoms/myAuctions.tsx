import { atom } from 'recoil';
import { IAuction } from '../types';

const myAuctionsAtom = atom<IAuction[]>({
  key: 'myAuctions',
  default: [],
});

export default myAuctionsAtom;
