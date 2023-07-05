import React from "react";

const BankDetailsInTenant = () => {
  return (
    <div className="container bg-white mb-3 ">
      <div className="row">
        <h3 className="address-heading mt-2 mb-3">Bank Details</h3>
        {/* <div className="mt-3">
        <input
          type="text"
          className="form-control address-input"
          placeholder="Enter Full Name"
        />
      </div> */}
        <div className="col-md-6 mt-3  ">
          <input
            type="text"
            className="form-control mini-inputs-rent"
            placeholder="Account Holder Name"
          />
        </div>
        <div className="col-md-6 mt-3  ">
          <input
            type="text"
            className="form-control mini-inputs-rent"
            placeholder="Account Type"
          />
        </div>
        <div className="col-md-6 mt-3  ">
          <input
            type="text"
            className="form-control mini-inputs-rent"
            placeholder="Bank Name"
          />
        </div>
        <div className="col-md-6 mt-3  ">
          <input
            type="text"
            className="form-control mini-inputs-rent"
            placeholder="Bank Number"
          />
        </div>
        <div className="col-md-6 mt-3  ">
          <input
            type="text"
            className="form-control mini-inputs-rent"
            placeholder="Transit Number"
          />
        </div>
        <div className="col-md-6 mt-3 ">
          <input
            type="text"
            className="form-control mini-inputs-rent"
            placeholder="Account Number"
          />
        </div>
        <div className="mt-4">
          <div class="wrapper-inner land-swich">
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
                  Cash
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
            <div class="form-group">
              <div class="radio">
                <label>
                  <input type="radio" name="radio-input" className="m-0" /> Card
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
            <div class="form-group">
              <div class="radio">
                <label>
                  <input type="radio" name="radio-input" className="m-0" />{" "}
                  Online
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 address-form-check-top">
          <div className="form-check address-form-check ">
            <input
              className="form-check-input check-input"
              type="checkbox"
              value=""
              id="invalidCheck"
              required
            />
            <label className="form-check-label" htmlFor="invalidCheck">
              Check Credit Score
            </label>
          </div>
        </div>
        <div className="mt-3 score-tenants-bottom">
          <img src="./src/assets/score.png" alt="" />
        </div>
        <div className="score-text-area">
          <p>880</p>
        </div>
      </div>
    </div>
  );
};

export default BankDetailsInTenant;
