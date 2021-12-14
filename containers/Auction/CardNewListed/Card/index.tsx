import { NavLink } from 'react-router-dom';
import { IAuction } from '../../../../types/index';
import BigNumber from 'bignumber.js';

function Card(auction: IAuction) {
  return (
    <div className="col-12 mb-15">
      <div className="card">
        <div className="card-body p-3">
          <div className="row">
            <div className="col-lg-6 text-center mt-lg-0">
              <div className="border-radius-lg h-100">
                <div className="position-relative d-flex align-items-center justify-content-center h-100">
                  <img
                    className="w-100 position-relative z-index-2 border-radius-lg"
                    alt=""
                    src={auction.tokenInfo?.img}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="d-flex flex-column h-100">
                <p className="mb-1 pt-2">#{auction.tokenInfo?.id}</p>
                <NavLink
                  className="text-decoration-none"
                  to={`/itemdetails/${auction.auctionId}`}
                >
                  <h5 className="font-weight-bolder">
                    {auction.tokenInfo?.title}
                  </h5>
                </NavLink>
                <p>{auction.tokenInfo?.description}</p>
                <p>
                  Currenct Price :{' '}
                  <span className="gradient-text">
                    {new BigNumber(auction.currentPrice)
                      .div(new BigNumber(10).pow(18))
                      .toString()}{' '}
                    ETH
                  </span>
                </p>
                <div className="d-flex align-items-center justify-content-between">
                  <NavLink
                    to={`/itemdetails/${auction.auctionId}`}
                    className="btn btn-outline-primary btn-sm mb-0"
                  >
                    Buy Now
                  </NavLink>
                  {/* <div className="avatar-group d-flex align-items-center">
                    <span className="mr-10 ">Item Owner:</span>
                    <NavLink
                      to={path3}
                      className="avatar avatar-xs rounded-circle"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      title=""
                      data-bs-original-title="Nick Daniel"
                    >
                      <img
                        className="rounded-circle"
                        alt="placeholder"
                        src={img2}
                      />
                    </NavLink>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
