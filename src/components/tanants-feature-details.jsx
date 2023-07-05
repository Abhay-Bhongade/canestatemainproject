import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import FilterAltTwoToneIcon from "@mui/icons-material/FilterAltTwoTone";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import PropertyGalary from "./property-galary-area";
import LoopOutlinedIcon from "@mui/icons-material/LoopOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import LandloardStepperFrom from "./stepper-landload";
import UploadGalary from "./upload-galary";
import TenatsStepperFrom from "./stepper-tenants";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import DatePicker from "react-datepicker";
import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";
import GpsFixedTwoToneIcon from "@mui/icons-material/GpsFixedTwoTone";


const style = {
  width: "500px",
  // height: "450px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 400,
  bgcolor: "#FFF",
  borderRadius: "30px",
  boxShadow: '0px 5px 21px 0px rgba(0, 0, 0, 0.11)',
  p: 4,
};


const TanantsFeatureDetails = () => {

   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

  return (
    <>
      <div className="container-fluid">
        {/* navbar-area-start */}
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <a className="navbar-brand fs-0.5 fw-bold" href="#">
              Add Tenants
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="seach-box navbar-nav mx-auto mb-2 mb-lg-0 input-group mb-3  overflow-hidden ">
                <span
                  className="icon-search input-group-text bg-white border-0 pe-1"
                  id="basic-addon1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </span>
                <input
                  type="search"
                  className="form-control hide-focus border-0 search-input"
                  placeholder="Search"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>

              {/* <div className="btn-group">
                <button
                  className="btn  btn-sm dropdown-toggle sort-by-btn nav-button-side"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sort by
                </button>
                <ul className="dropdown-menu">...</ul>
              </div> */}
              <button
                onClick={handleOpen}
                className="btn add-btn nav-button-side"
                type="submit"
              >
                <PeopleOutlinedIcon sx={{ color: "#FFF" }} />
              </button>
              <button
                className="btn filter-btn nav-button-side-refresh"
                type="submit"
              >
                <LoopOutlinedIcon className="refresh" />
              </button>
            </div>
          </div>
        </nav>
        {/* navbar-area-end  */}
      </div>
      {/* Add Properties area start */}

      <div className="cantainer-fluid rooms-main-cantainer">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mt-4 mb-1">
              {/* Step-from-start  */}
              <TenatsStepperFrom />
              {/* Step-from-end  */}
            </div>
            <div className="col-md-4 galary-area-top">
              {/* gelary area start */}
              <UploadGalary />
              {/* gelary area end*/}
            </div>
          </div>
        </div>
      </div>

      {/* Add Properties area end*/}
      {/* modal-area */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Co-Tenant Details
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          <div className="container bg-white  ">
            <div className="row">
              <h3 className="address-heading mt-2 mb-3 " id="modal-modal-title">
                Co-Tenant Details
              </h3>
              {/* <div id="modal-modal-description"> */}
              {/* tabs-area-start */}
              <div className="mt-3">
                <nav className="mb-3">
                  <div class="nav nav-tabs mb-5" id="nav-tab" role="tablist">
                    <button
                      class="nav-link active "
                      id="nav-home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-home"
                      type="button"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                    >
                      Personal Details
                    </button>
                    <button
                      class="nav-link "
                      style={{ marginLeft: "-1rem" }}
                      id="nav-profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-profile"
                      type="button"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                    >
                      Address Details
                    </button>
                  </div>
                </nav>
                <div class="tab-content  bg-white mt-4" id="nav-tabContent">
                  <div
                    class="tab-pane fade active show"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                  >
                    {/* <div className=" mt-4"> */}
                    <div className="row">
                      <div className="mt-3">
                        <input
                          type="text"
                          className="form-control address-input modal-tenants"
                          placeholder="Enter Full Name"
                        />
                      </div>
                      <div className="col-md-6 mt-3  ">
                        <input
                          type="text"
                          className="form-control mini-inputs-rent modal-mini-tanants"
                          placeholder="Mobile Number"
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <div className="mini-inputs-fordate modal-mini-tanants">
                          <DatePicker
                            selectsStart
                            placeholderText="DOB"
                            // onKeyDown={(e) => {
                            //   e.preventDefault();
                            // }}
                            className="date-picker-input modal-date-picker"
                          />
                          <CalendarMonthTwoToneIcon
                            className="calandar-icons"
                            style={{ marginLeft: "6px" }}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mt-3">
                        <div className="mini-inputs-fordate modal-mini-tanants">
                          <DatePicker
                            selectsStart
                            placeholderText="Joining Date"
                            // onKeyDown={(e) => {
                            //   e.preventDefault();
                            // }}
                            className="date-picker-input modal-date-picker"
                          />
                          <CalendarMonthTwoToneIcon
                            className="calandar-icons"
                            style={{ marginLeft: "6px" }}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mt-3  ">
                        <input
                          type="text"
                          className="form-control mini-inputs-rent modal-mini-tanants"
                          placeholder="Qualification"
                        />
                      </div>
                      <div className="col-md-6 mt-3 mb-5 ">
                        <input
                          type="text"
                          className="form-control mini-inputs-rent modal-mini-tanants"
                          placeholder="Current Employer"
                        />
                      </div>
                      <div className="col-md-6 mt-3  ">
                        <input
                          type="text"
                          className="form-control mini-inputs-rent modal-mini-tanants"
                          placeholder="Designation"
                        />
                      </div>
                      <div className="mt-3 save-modal-top">
                        <Button
                          className="next-save-btn modal-save-btn"
                          variant="contained"
                        >
                          Save
                        </Button>
                      </div>
                    </div>
                    {/* </div> */}
                  </div>
                  <div
                    class="tab-pane fade mt-4"
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                  >
                    {/* <div className=" mt-4"> */}
                    <div className="row">
                      <div className="col-md-12 mt-3">
                        <div className="search-container">
                          <input
                            type="text"
                            className="address-input form-control  modal-search"
                            placeholder="Enter Address"
                          />
                          <div className="address-btn">
                            <GpsFixedTwoToneIcon
                              sx={{ fontSize: "18px", fontWeight: 100 }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 mt-3  ">
                        <input
                          type="text"
                          className="form-control mini-inputs modal-search-mini"
                          placeholder="No."
                        />
                      </div>
                      <div className="col-md-6 mt-3 ">
                        <input
                          type="text"
                          className="form-control mini-inputs modal-search-mini"
                          placeholder="Street Name"
                        />
                      </div>
                      <div className="col-md-6 mt-3 ">
                        <input
                          type="text"
                          className="form-control mini-inputs modal-search-mini"
                          placeholder="City"
                        />
                      </div>
                      <div className="col-md-6 mt-3 ">
                        <input
                          type="text"
                          className="form-control mini-inputs modal-search-mini"
                          placeholder="Province"
                        />
                      </div>
                      <div className="col-md-6 mt-3 ">
                        <input
                          type="text"
                          className="form-control mini-inputs modal-search-mini"
                          placeholder="Country"
                        />
                      </div>
                      <div className="col-md-6 mt-3 mb-5">
                        <input
                          type="text"
                          className="form-control mini-inputs modal-search-mini"
                          placeholder="Postal code"
                        />
                      </div>
                      <div className="mt-3 save-modal-top">
                        <Button
                          className="next-save-btn modal-save-btn"
                          variant="contained"
                        >
                          Save
                        </Button>
                      </div>
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* tab-area-end */}

              {/* </div> */}
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default TanantsFeatureDetails;
