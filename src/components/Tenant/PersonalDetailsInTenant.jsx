import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";
const PersonalDetailsInTenant = () => {
  return (
    <div className="container bg-white  ">
      <div className="row">
        <h3 className="address-heading mt-2 mb-3">Personal Details</h3>
        <div className="mt-3">
          <input
            type="text"
            className="form-control address-input"
            placeholder="Enter Full Name"
          />
        </div>
        <div className="mt-3">
          <input
            type="text"
            className="form-control address-input"
            placeholder="Email Id"
          />
        </div>
        <div className="col-md-6 mt-3  ">
          <input
            type="text"
            className="form-control mini-inputs-rent"
            placeholder="Mobile Number"
          />
        </div>
        <div className="col-md-6 mt-3">
          <div className="mini-inputs-fordate">
            <DatePicker
              selectsStart
              placeholderText="DOB"
              // onKeyDown={(e) => {
              //   e.preventDefault();
              // }}
              className="date-picker-input"
            />
            <CalendarMonthTwoToneIcon
              className="calandar-icons"
              style={{ marginLeft: "6px" }}
            />
          </div>
        </div>
        <div className="col-md-6 mt-3">
          <div className="mini-inputs-fordate">
            <DatePicker
              selectsStart
              placeholderText="Joining Date"
              // onKeyDown={(e) => {
              //   e.preventDefault();
              // }}
              className="date-picker-input"
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
            className="form-control mini-inputs-rent"
            placeholder="Qualification"
          />
        </div>
        <div className="col-md-6 mt-3 mb-5 ">
          <input
            type="text"
            className="form-control mini-inputs-rent"
            placeholder="Current Employer"
          />
        </div>
        <div className="col-md-6 mt-3  ">
          <input
            type="text"
            className="form-control mini-inputs-rent"
            placeholder="Designation"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalDetailsInTenant;
