import { atom } from 'recoil';
import { IItem } from '../types';

const myItemsAtom = atom<IItem[]>({
  key: 'myItems',
  default: [],
});

export default myItemsAtom;
