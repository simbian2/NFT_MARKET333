import React from 'react';
import { useWeb3React } from '@web3-react/core';
import { useInterval } from 'usehooks-ts';
import ITag from '../../../components/ITag';
import contracts from '../../../constants/contracts';
import BigNumber from 'bignumber.js';

function SecNavWrapper() {
  const { account } = useWeb3React();
  const [userPrice, setUserPrice] = React.useState<number>(0);

  const getUserPriceList = React.useCallback(async () => {
    if (account) {
      try {
        const result = await contracts.nftMarketContract.methods
          .userPriceList('0x1E599F01f872dC8756D26067C497D97019e662fb')
          .call();

        setUserPrice(result);
      } catch (e) {
        console.log(e);
      }
    }
  }, [account]);

  const withdraw = React.useCallback(async () => {
    if (account) {
      try {
        await contracts.nftMarketContract.methods
          .withdrawCredit()
          .send({ from: account });

        alert('Withdraw credit success!');
      } catch (e) {
        console.log(e);
      }
    }
  }, [account]);

  useInterval(
    () => {
      getUserPriceList();
    },
    account ? 2000 : null
  );
  return (
    <div className="col-sm-4 col-8 my-sm-auto ms-auto me-sm-0 mx-auto mt-3">
      <div className="nav-wrapper position-relative end-0">
        <div className="border-0 ps-0 pb-0">
          {/* <strong className="text-dark text-sm">Social:</strong> &nbsp;
          <a
            className="btn btn-facebook btn-simple mb-0 ps-1 pe-2 py-0"
            href="/"
          >
            <ITag ClassName="fab fa-facebook fa-lg" aria-hidden="true" />
          </a>
          <a
            className="btn btn-twitter btn-simple mb-0 ps-1 pe-2 py-0"
            href="/"
          >
            <ITag ClassName="fab fa-twitter fa-lg" aria-hidden="true" />
          </a>
          <a
            className="btn btn-instagram btn-simple mb-0 ps-1 pe-2 py-0"
            href="/"
          >
            <ITag ClassName="fab fa-instagram fa-lg" aria-hidden="true" />
          </a> */}
          {account && userPrice > 0 ? (
            <button
              className="btn btn-white bg-light mb-0 w-100"
              onClick={withdraw}
            >
              Withdraw (
              {new BigNumber(userPrice)
                .div(new BigNumber(10).pow(18))
                .toString()}{' '}
              ETH)
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default SecNavWrapper;
