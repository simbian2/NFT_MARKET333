import * as React from 'react';
import contracts from '../../constants/contracts';
import addresses from '../../constants/addresses';
import { useWeb3React } from '@web3-react/core';
import Input from '../../containers/CreateItem/CardForm/Input';
import BigNumber from 'bignumber.js';
import { useRecoilState, useSetRecoilState } from 'recoil';
import isApprovedAtom from '../../atoms/isApproved';
import isAuctionFinishAtom from '../../atoms/isAuctionFinish';
import moment from 'moment';
import { IItem } from '../../types/index';

interface IMyItemProps extends IItem {}

const MyItem: React.FunctionComponent<IMyItemProps> = (props) => {
  const { account } = useWeb3React();
  const [isApproved, setIsApproved] = useRecoilState(isApprovedAtom);
  const [isCreateOpen, setIsCreateOpen] = React.useState<boolean>(false);
  const [title, setTitle] = React.useState<string>('');
  const [startingPrice, setStartingPrice] = React.useState<number>();
  const [buyNowPrice, setBuyNowPrice] = React.useState<number>();
  const [expiryDate, setExpiryDate] = React.useState<string>('');

  const setIsAuctionFinish = useSetRecoilState(isAuctionFinishAtom);

  const onClickCreateAuction = async () => {
    if (!isCreateOpen) {
      setIsCreateOpen(true);
      return;
    }

    if (!title) {
      alert('Title is required!');
      return;
    }
    if (!startingPrice) {
      alert('Starting price is required!');
      return;
    }
    if (!buyNowPrice) {
      alert('Buy now price is required!');
      return;
    }
    if (startingPrice >= buyNowPrice) {
      alert('Buy now price have to bigger than Starting price');
      return;
    }
    if (startingPrice < 0.001) {
      alert('Starting price have to bigger than 0.001');
      return;
    }
    if (!expiryDate) {
      alert('Expiry date is required!');
      return;
    }

    const createAuction = await contracts.nftMarketContract.methods
      .createAuction(
        addresses.nft,
        props.id,
        new BigNumber(startingPrice)
          .times(new BigNumber(10).pow(18))
          .toNumber()
          .toFixed(0),
        title,
        new BigNumber(buyNowPrice)
          .times(new BigNumber(10).pow(18))
          .toNumber()
          .toFixed(0),
        new Date(expiryDate).getTime(),
        props.category,
        1,
        1
      )
      .send({ from: account });

    setIsCreateOpen(false);
    setTitle('');
    setStartingPrice(undefined);
    setBuyNowPrice(undefined);
    setExpiryDate('');
    setIsAuctionFinish(true);

    console.log(createAuction);
  };

  const getIsApproved = async () => {
    const isApproved = await contracts.nftContract.methods
      .isApprovedForAll(account, addresses.nftMarket)
      .call();

    setIsApproved(isApproved);
  };

  const setApprovalForAll = async () => {
    await contracts.nftContract.methods
      .setApprovalForAll(addresses.nftMarket, true)
      .send({ from: account });

    setIsApproved(true);
  };

  React.useEffect(() => {
    getIsApproved();
  }, [account]);

  return (
    <div className="col-xl-3 col-md-6 mb-xl-0">
      <div className="card card-blog card-plain">
        <div
          className="position-relative mb-30 img-fluid shadow border-radius-xl"
          style={{
            backgroundImage: `url('${props.img}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minWidth: '100%',
            aspectRatio: '1',
          }}
        ></div>
        {/* <NavLink to={path2} className="item-owner" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="view profile">
        <img alt="placeholder" src={img2} />
      </NavLink> */}
        <div className="item-cont card-body px-1 pb-0">
          <p className="text-gradient text-dark mb-2 text-sm">#{props.id}</p>
          <div className="text-decoration-none">
            <h5>{props.title}</h5>
          </div>
          {/* <p className="mb-4 text-sm">
            Currenct Price : <span className="gradient-text">0 ETH</span>
          </p> */}
          {isCreateOpen && (
            <div className="mb-3">
              <Input
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Input
                type="number"
                placeholder="Starting price"
                value={startingPrice}
                onChange={(e) => setStartingPrice(parseFloat(e.target.value))}
              />
              <Input
                type="number"
                placeholder="Buy now price"
                value={buyNowPrice}
                onChange={(e) => setBuyNowPrice(parseFloat(e.target.value))}
              />
              <Input
                type="datetime-local"
                placeholder="Expiry date"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                min={moment().add(1, 'days').toISOString().slice(0, -8)}
                max={moment().add(1, 'years').toISOString().slice(0, -8)}
              />
            </div>
          )}
          <div className="d-flex align-items-center justify-content-between">
            {isApproved ? (
              <button
                className="btn btn-outline-primary btn-sm mb-0"
                onClick={onClickCreateAuction}
              >
                Create auction
              </button>
            ) : (
              <button
                className="btn btn-outline-primary btn-sm mb-0"
                onClick={setApprovalForAll}
              >
                Set approval for all
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyItem;
