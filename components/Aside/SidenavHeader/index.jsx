import { NavLink } from 'react-router-dom';
import { closeSidebar } from '../../../utils';
import ITag from '../../ITag';

function SidenavHeader({ AsidelogoCt, hideShowSidebar }) {
  return (
    <div className="sidenav-header">
      <ITag
        ClassName="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute right-0 top-0 d-none d-xl-none"
        aria-hidden="true"
        id="iconSidenav"
      />
      <NavLink
        className="d-flex navbar-brand m-0 align-items-center justify-content-between"
        to="/"
      >
        <img src={AsidelogoCt} className="navbar-brand-img" alt="..." />
        {/* <span className="ms-1 font-weight-bold">NFT Marketplace</span> */}
        <ITag
          ClassName="fas fa-times fa-lg ms-4 d-xl-none"
          onClick={closeSidebar}
        />
      </NavLink>
    </div>
  );
}

export default SidenavHeader;
