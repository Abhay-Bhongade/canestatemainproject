import React from "react";
import Switch from "@mui/material/Switch";

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
const FeatureDetailsInRooms = () => {
  const label = { inputProps: { "aria-label": "Switch demo" } };

  return (
    <div className="card border-0" style={{ width: "32rem" }}>
      <h3 className="mt-3 headingcombine">Feature Details</h3>
      <div className="mt-3">
        <input
          type="text"
          className="form-control address-input"
          placeholder="Add Property Name"
        />
      </div>
      <div className="mt-3">
        <input
          type="text"
          className="form-control address-input"
          placeholder="Add Room Name"
        />
      </div>
      <div className="mt-3">
        <input
          type="text"
          className="form-control address-input"
          placeholder="Add Room Number"
        />
      </div>
      <div className="mt-3">
        <div class="wrapper-inner">
          <div class="form-group">
            <div class="radio">
              <label>
                <input
                  type="radio"
                  name="radio-input"
                  checked="checked"
                  className="custom-control-input"
                  id="checkbox"
                />{" "}
                Small
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
          <div class="form-group">
            <div class="radio">
              <label>
                <input type="radio" name="radio-input" className="m-0" /> Medium
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
          <div class="form-group">
            <div class="radio">
              <label>
                <input type="radio" name="radio-input" className="m-0" /> Large
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <div className="furnished-swich">
            <div className="text-swich-area">
              <h6 className="m-0">Furnished</h6>
            </div>
            <div className="swich-area">
              <Switch className="mini-switch" {...label} defaultChecked />
            </div>
          </div>
          <div className="mt-2">
            <p className="dynamic-width-text">single bed</p>
            <p className="dynamic-width-text mx-2">Double Bed</p>
            <p className="dynamic-width-text">Fan</p>
            <p className="dynamic-width-text mx-2">Light</p>
            <p className="dynamic-width-text ">AC</p>
            <p className="dynamic-width-text mx-2">Chair</p>
            <p className="dynamic-width-text ">Table</p>
          </div>
        </div>
        <div className="mt-3">
          <div className="furnished-swich">
            <div className="text-swich-area">
              <h6 className="m-0">Add-ons</h6>
            </div>
            <div className="swich-area">
              <Switch
                className="mini-switch"
                {...label}
                defaultChecked
                disabled
              />
            </div>
          </div>
          <div className="mt-2">
            <p className="dynamic-width-text-o">Private Washroom</p>
            <p className="dynamic-width-text-o mx-2">Extra Closet</p>
            <p className="dynamic-width-text-o">Private Parking</p>
          </div>
        </div>
        <div className="mt-3">
          {/* <div className="col-md-12 address-form-check-top">
          <div className="form-check address-form-check ">
            <input
              className="form-check-input check-input"
              type="checkbox"
              value=""
              id="invalidCheck"
              required
            />
            <label className="form-check-label" htmlFor="invalidCheck">
              you can split the house into rooms where you can earn
            </label>
          </div>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default FeatureDetailsInRooms;
