import { NavLink } from "react-router-dom";
import ITag from '../../ITag'
import './SidenavFooter.css'

function SidenavFooter() {
  return (
        <div className="sidenav-footer mx-3 mt-3 pt-3">
          <div className="card card-background shadow-none card-background-mask-secondary" id="sidenavCard">
            <div className="full-background sidenavasidebg"></div>
            <div className="card-body text-left p-3 w-100">
              <div className="icon icon-shape icon-sm bg-white shadow text-center mb-3 d-flex align-items-center justify-content-center border-radius-md">
                <ITag ClassName="ni ni-diamond text-dark  text-gradient text-lg top-0" aria-hidden="true" />
              </div>
              <h6 className="text-white up mb-0">Need help?</h6>
              <p className="text-xs font-weight-bold">Please check our docs</p>
              <NavLink to="/contact" className="btn btn-light btn-sm fw-bold w-100 mb-0">Contact Us</NavLink>
            </div>
          </div>
        </div>
        )
}

export default SidenavFooter
