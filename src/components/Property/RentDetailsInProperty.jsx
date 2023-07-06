import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";
import Switch from "@mui/material/Switch";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { styled } from "@mui/material";

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 31,
  height: 16,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    color: "#616161",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#DB1516",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#fff",
        opacity: 1,
        border: "0.6px solid #DB1516",
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 12,
    height: 12,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#39393D",
    opacity: 1,
    border: "0.6px solid #616161",
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));
const RentDetailsInProperty = () => {
  const label = { inputProps: { "aria-label": "Switch demo" } };

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
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="twoinputcnt my-2">
          <div className="my-2">
            <select
              className="form-select formselectinrentdetails mini-inputs"
              aria-label="Default select example"
            >
              <option defaultValue>Period</option>
              <option value="1">4 Month</option>
              <option value="2">8 Month</option>
              <option value="3">12 Month</option>
              <option value="4">24 Month</option>
            </select>
          </div>
          <div className="mini-inputs-fordate">
            <DatePicker
              selectsStart
              placeholderText="Move in Date"
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

        <div className="twoinputcnt my-2">
          {/* <div className="search-container">
                <input
                  type="text"
                  className="address-input form-control "
                  placeholder="Enter Address"
                />
                <div className="address-btn">
                  <GpsFixedTwoToneIcon
                    sx={{ fontSize: "18px", fontWeight: 100 }}
                  />
                </div>
              </div> */}
          <div className="mini-input-switch-container">
            {/* <input
                  type="text"
                  className="form-control mini-inputs-rent"
                  placeholder="Property Availability"
                />
                <div className="switch-icon">
                  <Switch className="mini-switch" {...label} defaultChecked />
                </div> */}
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
