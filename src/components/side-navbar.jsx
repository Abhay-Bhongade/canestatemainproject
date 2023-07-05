import { Link } from "react-router-dom";
import mainLogo from "../assets/main-logo.png";
import DashbordLogo from "../assets/icon-1.png";
import DashHoverLogo from "../assets/dashboard-hover.png";
import LandloadLogo from "../assets/landlord.png";
import LandHoverLogo from "../assets//landlord-hover.png";
import PropertyLogo from "../assets/icon-3.png";
import ProHoverLogo from "../assets/property-hover.png";
import RoomsLogo from "../assets/icon-4.png";
import RoomsHoverLogo from "../assets/room-hover.png";
import TenantsLogo from "../assets/icon-5.png";
import TenHoverLogo from "../assets/tenant-hover.png";
import OpanHouseLogo from "../assets/icon-6.png";
import OpanHoverLogo from "../assets/openhouse-hover.png";
import MantainensLogo from "../assets/icon-7.png";
import MantHoverLogo from "../assets/maintenance-hover.png";
import FinansLogo from "../assets/icon-8.png";
import FinansHoverLogo from "../assets/finance-hover.png";
import AgreemantsLogo from "../assets/icon-9.png";
import AgrHoverLogo from "../assets/agreements-hover.png";
import ContratoreLogo from "../assets/icon-10.png";
import ContratoreHoverLogo from "../assets/contractor-hover.png";
import InquiresLogo from "../assets/icon-11.png";
import InquiresHoverLogo from "../assets/Inquires-hover.png";

const SideNavbar = () => {
  return (
    <div className="bg-white p-2 sidemenu">
      <Link
        to="/"
        className="d-flex text-decoration-none align-item-center mt-2 justify-content-center"
      >
        <img
          className="fs-4 d-none d-sm-inline brand-logo"
          src={mainLogo}
          alt="logo"
        />
      </Link>
      <ul className="nav nav-pills flex-column mt-4">
        <li className="nav-item side-nav-item ">
          <Link to="/" className="nav-link icon-container">
            <img src={DashbordLogo} alt="" />
            <img src={DashHoverLogo} alt="" />
          </Link>
        </li>
        <li className="nav-item side-nav-item ">
          <Link to="/landlord" className="nav-link icon-container">
            <img src={LandloadLogo} alt="" />
            <img src={LandHoverLogo} alt="" />
          </Link>
        </li>

        <li className="nav-item side-nav-item ">
          <Link to="/property" className="nav-link icon-container">
            <img src={PropertyLogo} alt="" />
            <img src={ProHoverLogo} alt="" />
          </Link>
        </li>

        <li className="nav-item side-nav-item ">
          <Link to="/rooms" className="nav-link icon-container">
            <img src={RoomsLogo} alt="" />
            <img src={RoomsHoverLogo} alt="" />
          </Link>
        </li>

        <li className="nav-item side-nav-item ">
          <Link to="/tenant" className="nav-link icon-container">
            <img src={TenantsLogo} alt="" />
            <img src={TenHoverLogo} alt="" />
          </Link>
        </li>

        <li className="nav-item side-nav-item ">
          <Link to="/openhouse" className="nav-link icon-container">
            <img src={OpanHouseLogo} alt="" />
            <img src={OpanHoverLogo} alt="" />
          </Link>
        </li>

        <li className="nav-item side-nav-item ">
          <Link to="/openhouse" className="nav-link icon-container">
            <img src={MantainensLogo} alt="" />
            <img src={MantHoverLogo} alt="" />
          </Link>
        </li>

        <li className="nav-item side-nav-item ">
          <Link to="/openhouse" className="nav-link icon-container">
            <img src={FinansLogo} alt="" />
            <img src={FinansHoverLogo} alt="" />
          </Link>
        </li>

        <li className="nav-item side-nav-item ">
          <Link to="/openhouse" className="nav-link icon-container">
            <img src={AgreemantsLogo} alt="" />
            <img src={AgrHoverLogo} alt="" />
          </Link>
        </li>

        <li className="nav-item side-nav-item ">
          <Link to="/openhouse" className="nav-link icon-container">
            <img src={ContratoreLogo} alt="" />
            <img src={ContratoreHoverLogo} alt="" />
          </Link>
        </li>

        <li className="nav-item side-nav-item ">
          <Link to="/openhouse" className="nav-link icon-container">
            <img src={InquiresLogo} alt="" />
            <img src={InquiresHoverLogo} alt="" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNavbar;
