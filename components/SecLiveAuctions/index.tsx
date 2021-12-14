import { NavLink } from 'react-router-dom';
import LiveAuctionsItem from './LiveAuctionsItem';
import ITag from '../ITag';
import data from '../../data/data-components/data-SecLiveAuctions.js';
import React from 'react';
import contracts from '../../constants/contracts';
import { IAuction } from '../../types/index';
import { getTokenInfo } from '../../utils';

function SecLiveAuctions() {
  const [auctions, setAuctions] = React.useState<IAuction[]>([]);

  const getAuctions = async () => {
    const auctions = await contracts.nftMarketContract.methods
      .getOpenAuctions(0, 1, '', 0, 10)
      .call();

    console.log('userAuctions', auctions);
    const openAuctions = auctions.resultAuctions;
    setAuctions(openAuctions);

    const promises = openAuctions.map(async (auction: IAuction) => {
      const tokenInfo = await getTokenInfo(parseInt(auction.tokenId));

      return {
        ...auction,
        tokenInfo,
      };
    });

    const data = await Promise.all(promises);
    console.log(data);
    setAuctions(data);
  };

  React.useEffect(() => {
    getAuctions();
  }, []);

  return (
    <div className="container-fluid">
      <div className="col-12 py-4">
        <div className="card">
          <div className="card-body">
            <div className="row">
              {auctions.map((item, i) => (
                <LiveAuctionsItem key={i} {...item} />
              ))}

              <div className="col-md-12 text-center">
                <NavLink className="btn bg-gradient-dark mb-0" to="/">
                  <ITag ClassName="fas fa-plus mr-10" />
                  Load More
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecLiveAuctions;
