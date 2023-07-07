import React, { useState } from "react";
import { DashboardOutlined, LogoutOutlined } from "@ant-design/icons";
import { Menu, Tooltip } from "antd";
import { Route, Router, Routes, useNavigate } from "react-router-dom";
import TopNavbar from "./components/top-navbar";
import SideNavbar from "./components/side-navbar";
import FeatureDetails from "./components/feature-details";
import mainlogo from "../src/assets/main-logo.png";
import PropertyDisplayrArea from "./components/Property-display-area";
import RoomsDisplayArea from "./components/RoomsDisplayArea";
import StepperFromRooms from "./components/StepperFromRooms";
import RoomsFeatureDetails from "./components/RoomsFeatureDetails";
import LandlordDisplayArea from "./components/LandlordDisplayArea";
import LandloadFeatureDetails from "./components/LandloadFeatureDetails";
import TenantsDisplayArea from "./components/tenants-display-area";
import TanantsFeatureDetails from "./components/tanants-feature-details";
const Appp = () => {
  return (
    <div className="cantainer-fluid">
      <div className="row w-100">
        <div className="bg-white col-auto col-md-1 col-lg-1 min-vh-100 d-flex flex-column justify-content-between">
          <SideNavbar />
        </div>
        <div className="bg-white col-auto col-md-11 col-lg-11 ">
          <TopNavbar />
          <Content />
        </div>
      </div>
    </div>

    // <div>
    //   <TopNavbar />
    //   <div style={{ display: "flex", flexDirection: "row" }}>
    //     {" "}
    //     <SideNavbar />
    //     <Content />
    //   </div>
    // </div>
  );
};

function SideMenu() {
  const Navigate = useNavigate();
  const [hoveredKey, setHoveredKey] = useState(null);

  const handleMenuItemMouseEnter = (key) => {
    setHoveredKey(key);
  };

  const handleMenuItemMouseLeave = () => {
    setHoveredKey(null);
  };

  const menuItems = [
    {
      key: "/",
      icon: (
        <div>
          <DashboardOutlined />
        </div>
      ),
      label: "Dashboard",
    },
    { key: "/property", icon: <DashboardOutlined />, label: "Property" },
    { key: "/landlord", icon: <DashboardOutlined />, label: "Landlord" },
    { key: "/tenant", icon: <DashboardOutlined />, label: "Tenant" },
    { key: "/room", icon: <DashboardOutlined />, label: "Room" },
    { key: "/finance", icon: <DashboardOutlined />, label: "Finance" },
    { key: "/account", icon: <DashboardOutlined />, label: "Account" },
    { key: "/maintenance", icon: <DashboardOutlined />, label: "Maintenance" },
    { key: "/logout", icon: <LogoutOutlined />, label: "Logout" },
  ];

  return (
    <div className="sidemenu">
      <div className="logo-container mb-5">
        <img
          className="fs-4 d-none d-sm-inline brand-logo"
          src={mainlogo}
          alt="logo"
        />
      </div>
      <Menu
        onClick={({ key }) => {
          if (key === "/logout") {
            // do some functionality here
          } else {
            Navigate(key);
          }
        }}
        defaultSelectedKeys={[window.location.pathname]}
        items={menuItems}
      >
        {(item) => (
          <Menu.Item key={item.key} icon={item.icon}>
            <div className="label">{item.label}</div>
          </Menu.Item>
        )}
      </Menu>
    </div>
  );
}

function Content() {
  return (
    <div className=" content ">
      <Routes>
        <Route path="/" element={<div>Home</div>}></Route>
        {/* <Route path="/landlord" element={<div>Landlord</div>}></Route> */}

        <Route path="/property" element={<PropertyDisplayrArea />} />
        <Route path="/addproperty" element={<FeatureDetails />} />
        <Route path="/tenant" element={<TenantsDisplayArea />} />
        <Route path="/addtenant" element={<TanantsFeatureDetails />} />
        <Route path="/rooms" element={<RoomsDisplayArea />} />
        <Route path="/addroom" element={<RoomsFeatureDetails />} />
        <Route path="/landlord" element={<LandlordDisplayArea />} />
        <Route path="/addlandlord" element={<LandloadFeatureDetails />} />
        <Route path="/Finances" element={<div>Finance</div>}></Route>
        <Route path="/account" element={<div>Account</div>}></Route>
        <Route path="/maintenance" element={<div>Maintance</div>}></Route>
        <Route path="/inquiries" element={<div>Inquiries</div>}></Route>
        <Route path="/openhouse" element={<div>OpenHouse</div>}></Route>
        <Route path="/agreements" element={<div>Agreements</div>}></Route>
        <Route path="/Contractors" element={<div>Contractors</div>}></Route>
        <Route path="/logout" element={<div>YOu are logout</div>}></Route>
      </Routes>
    </div>
  );
}

export default Appp;
