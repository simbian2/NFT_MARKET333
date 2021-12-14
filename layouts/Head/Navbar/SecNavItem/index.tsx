import { useWeb3React } from '@web3-react/core';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import walletAccountAtom from '../../../../atoms/walletAccount';
import ITag from '../../../../components/ITag';
import { injectedConnector } from '../../../../connector';

function SecNavItem({ hideShowSidebar }: { hideShowSidebar: any }) {
  const { chainId, account, activate, deactivate, active } = useWeb3React();

  const setWalletAccount = useSetRecoilState(walletAccountAtom);

  React.useEffect(() => {
    setWalletAccount(account || '');
  }, [account]);

  return (
    <>
      <li className="nav-item d-flex align-items-center">
        {account ? (
          <button
            className="btn btn-white bg-light mb-0 w-100"
            onClick={() => {
              deactivate();
              window.localStorage.removeItem('wallet');
            }}
          >
            {account.substr(0, 7)}...
            {account.substr(account.length - 7)}
          </button>
        ) : (
          <button
            className="btn btn-white bg-light mb-0 w-100"
            onClick={() => {
              activate(injectedConnector);
              window.localStorage.setItem('wallet', 'metamask');
            }}
          >
            Connect Wallet
          </button>
        )}
        {/* <NavLink
          to="/signin"
          className="nav-link text-body font-weight-bold px-0"
        >
          <span className="d-sm-inline text-body d-none mr-10">Sign In</span>
        </NavLink> */}
      </li>

      <li className="nav-item d-xl-none px-3 d-flex align-items-center">
        <div className="sidenav-toggler-inner" onClick={hideShowSidebar}>
          {Array(3)
            .fill(0)
            .map((item, i) => (
              <ITag ClassName="sidenav-toggler-line" key={i} />
            ))}
        </div>
      </li>
    </>
  );
}

export default SecNavItem;
