import { useEffect } from 'react';
import { getMainWidth, getTokenInfo, handleTitle } from '../../utils';

import Navbar from '../../layouts/Head/Navbar';
import Breadcrumb from '../../components/Breadcrumb';

import {
  ItemDetailsitemDetails,
  ItemDetailsTeam2,
  ItemDetailsVisuals,
} from '../../utils/allImgs';

import CardImg from './CardImg';
import SectionCardUp from './SectionCardUp';
import SectionCardDown from './SectionCardDown';
import './ItemDetails.css';
import { useParams } from 'react-router';
import { useRecoilValue, useRecoilState } from 'recoil';
import React from 'react';
import { IAuction } from '../../types';
import contracts from '../../constants/contracts';
import { useInterval } from 'usehooks-ts';
import isAuctionFinishAtom from '../../atoms/isAuctionFinish';

const ItemDetailsContainer = () => {
  const { id }: { id?: string } = useParams();
  const [auction, setAuction] = React.useState<IAuction>();

  const [isAuctionFinish, setIsAuctionFinish] =
    useRecoilState(isAuctionFinishAtom);

  const getAuction = async () => {
    try {
      const result = await contracts.nftMarketContract.methods
        .auctions(id)
        .call();

      const tokenInfo = await getTokenInfo(result.tokenId);

      setAuction({ ...result, tokenInfo });
    } catch (e) {
      console.log(e);
    }
  };

  useInterval(
    () => {
      getAuction();
      setIsAuctionFinish(false);
    },
    isAuctionFinish ? 1000 : null
  );

  React.useEffect(() => {
    getAuction();
  }, []);

  useEffect(() => {
    // document.title = 'ItemDetails'
    handleTitle('ItemDetails');
    getMainWidth();
  }, []);

  return (
    <>
      <main className="main-content mt-1 border-radius-lg">
        <Navbar />

        <div className="container-fluid">
          <div className="page-header breadcrumb-header min-height-300 border-radius-xl mt-4 mb-30 ItemDetailsIMG">
            <Breadcrumb
              text1="Item Details"
              text2={`Upload your own artwork the world has been\nwaiting for.`}
            />
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            {auction && <CardImg img={auction.tokenInfo?.img} />}
            <div className="col-lg-7">
              {auction && <SectionCardUp {...auction} />}

              <div className="row">
                {auction && <SectionCardDown {...auction} />}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ItemDetailsContainer;
