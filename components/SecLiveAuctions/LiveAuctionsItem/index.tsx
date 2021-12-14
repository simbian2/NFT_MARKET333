import { NavLink, useHistory } from 'react-router-dom';
import { IAuction } from '../../../types/index';
import { SecLiveAuctionsIconfire } from '../../../utils/allImgs';
import TimeAgo from 'react-timeago';
import { useSetRecoilState } from 'recoil';
import selectedAuctionAtom from '../../../atoms/selectedAuction';
import BigNumber from 'bignumber.js';

function LiveAuctionsItem(props: IAuction) {
  const setSelectedAuction = useSetRecoilState(selectedAuctionAtom);
  const history = useHistory();

  return (
    <div className="col-xl-3 col-md-6 mb-xl-0">
      <div
        className="card card-blog card-plain"
        style={{ textDecoration: 'none', cursor: 'pointer' }}
        onClick={async () => history.push(`/itemdetails/${props.auctionId}`)}
      >
        <div
          className="position-relative mb-30 img-fluid shadow border-radius-xl"
          style={{
            backgroundImage: `url('${props.tokenInfo?.img}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minWidth: '100%',
            aspectRatio: '1',
          }}
        ></div>
        <div className="auction-timer">
          <img src={SecLiveAuctionsIconfire} width="30" alt="" />
          <p>
            <TimeAgo date={new Date(parseInt(props.expiryDate))} />
          </p>
        </div>
        {/* <NavLink
          to={path2}
          className="item-owner"
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title=""
          data-bs-original-title="view profile"
        >
          <img alt="placeholder" src={img3} />
        </NavLink> */}
        <div className="item-cont card-body px-1 pb-0">
          <p className="text-gradient text-dark mb-2 text-sm">
            #{props.tokenId}
          </p>
          <div className="text-decoration-none">
            <h5>{props.tokenInfo?.title}</h5>
          </div>
          <p className="mb-0 text-sm" style={{ color: 'black' }}>
            Currenct Price :{' '}
            <span className="gradient-text">
              {new BigNumber(parseInt(props.currentPrice))
                .div(new BigNumber(10).pow(18))
                .toString()}{' '}
              ETH
            </span>
          </p>
          <p className="text-sm" style={{ color: 'black' }}>
            Buy now Price :{' '}
            <span className="gradient-text">
              {new BigNumber(parseInt(props.buyNowPrice))
                .div(new BigNumber(10).pow(18))
                .toString()}{' '}
              ETH
            </span>
          </p>
          {/* <div className="d-flex align-items-center justify-content-between">
            <NavLink to="" className="btn btn-outline-primary btn-sm mb-0">
              Buy Now
            </NavLink>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default LiveAuctionsItem;
