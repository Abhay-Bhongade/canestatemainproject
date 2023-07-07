import React, { useState, useRef } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";
import Switch from "@mui/material/Switch";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { styled } from "@mui/material";

const RentDetailsInProperty = () => {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [selectedDate, setSelectedDate] = useState(null);
  const datePickerRef = useRef();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleCalendarIconClick = () => {
    datePickerRef.current.setFocus();
  };

  return (
    <>
      {" "}
      <div className="card border-0" style={{ width: "32rem" }}>
        <h3 className="mt-3 mb-5 headingcombine">Rent Details</h3>

        <div className="my-2">
          <select
            style={{ width: "499px" }}
            className="form-select select-input"
            aria-label="Default select example"
          >
            <option defaultValue>Contract Type</option>
            <option value="1">Fixed</option>
            <option value="2">Monthly</option>
          </select>
        </div>
        <div className="twoinputcnt my-2">
          <div className="my-2">
            <select
              className="form-select formselectinrentdetails mini-inputs"
              aria-label="Default select example"
            >
              <option defaultValue>Period</option>
              <option value="1">Notting</option>
              <option value="2">04 Month</option>
              <option value="3">08 Month</option>
              <option value="4">12 Month</option>
            </select>
          </div>
          <div className="mini-inputs-fordate">
            <DatePicker
              ref={datePickerRef}
              selectsStart
              placeholderText="Move in Date"
              className="date-picker-input"
              selected={selectedDate}
              onChange={handleDateChange}
            />
            <CalendarMonthTwoToneIcon
              className="calandar-icons"
              onClick={handleCalendarIconClick}
            />
          </div>
        </div>

        <div className="twoinputcnt my-2">
          <div className="mini-input-switch-container">
            <div className="mini-inputs-rent">
              <div className="text-rent-mini">
                <p>Property Availability</p>
              </div>
              <div className="switch-icon">
                <Switch className="mini-switch" {...label} defaultChecked />
              </div>
            </div>
          </div>

          <input
            type="text"
            className="form-control mini-inputs-rent"
            placeholder="Deposit"
          />
        </div>
        <div className="twoinputcnt my-2">
          <input
            type="text"
            className="form-control mini-inputs-rent"
            placeholder="Monthly Rent"
          />
          <input
            type="text"
            className="form-control mini-inputs-rent"
            placeholder="Utilities"
          />
        </div>
        <div className="textareacnt my-3">
          <textarea
            className="textareamain pt-1"
            placeholder="Property Rules and Guidelines"
          />
        </div>
      </div>
    </>
  );
};

export default RentDetailsInProperty;
