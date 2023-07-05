import React from "react";
import pinkdiamond from "../../assets/pink-dimond.png";
import bluediamond from "../../assets/blue-dimond.png";
import purplediamond from "../../assets/parple-dimond.png";

const PackageTypeDetailsInLandlord = () => {
  return (
    <div className="card border-0" style={{ width: "38rem" }}>
      <h3 className="mt-1 mb-4 headingcombine">Package Type</h3>
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
              Long Term Plan
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
              Monthly Plan
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
              <div className="col-sm-4 package-card-bule">
                <div className="package-gold mb-3">
                  <div className="img-area-gold">
                    <img src={bluediamond} alt="loading...." />
                  </div>
                  <div className="heading-gold">
                    <p>silver</p>
                  </div>
                </div>
                <div className="package-price-area mt-3 mb-4">
                  <div className="price-land-card">
                    <p>$99</p>
                  </div>
                  <div className="price-year">
                    <p>( 3 years )</p>
                  </div>
                </div>
                <div className="single-property mt-3 mb-3">
                  <p>Single Property</p>
                </div>
                <div className="monthly-price mt-3">
                  <p>2.5 $ (Prop/Monthly)</p>
                </div>
              </div>
              <div className="col-sm-4 package-card-pink mx-5">
                <div className="package-gold mb-3">
                  <div className="img-area-gold">
                    <img src={pinkdiamond} alt="loading...." />
                  </div>
                  <div className="heading-gold">
                    <p>gold</p>
                  </div>
                </div>
                <div className="package-price-area mt-3 mb-4">
                  <div className="price-land-card">
                    <p>$499</p>
                  </div>
                  <div className="price-year">
                    <p>( 3 years )</p>
                  </div>
                </div>
                <div className="single-property-pink mt-3 mb-3">
                  <p>Single Property</p>
                </div>
                <div className="monthly-price-gold mt-3">
                  <p>2.5 $ (Prop/Monthly)</p>
                </div>
              </div>
              <div className="col-sm-4 package-card-purple">
                <div className="package-gold mb-3">
                  <div className="img-area-gold">
                    <img src={purplediamond} alt="loading...." />
                  </div>
                  <div className="heading-gold">
                    <p>Platinum</p>
                  </div>
                </div>
                <div className="package-price-area mt-3 mb-4">
                  <div className="price-land-card">
                    <p>$999</p>
                  </div>
                  <div className="price-year">
                    <p>( 3 years )</p>
                  </div>
                </div>
                <div className="single-property-purple mt-3 mb-3">
                  <p>Single Property</p>
                </div>
                <div className="monthly-price-parple mt-3">
                  <p>2.5 $ (Prop/Monthly)</p>
                </div>
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
              <div className="col-sm-4 package-card-bule">
                <div className="package-gold mb-3">
                  <div className="img-area-gold">
                    <img src={bluediamond} alt="loading...." />
                  </div>
                  <div className="heading-gold">
                    <p>silver</p>
                  </div>
                </div>
                <div className="package-price-area mt-3 mb-4">
                  <div className="price-land-card">
                    <p>$99</p>
                  </div>
                  <div className="price-year">
                    <p>( 3 years )</p>
                  </div>
                </div>
                <div className="single-property mt-3 mb-3">
                  <p>Single Property</p>
                </div>
                <div className="monthly-price mt-3">
                  <p>2.5 $ (Prop/Monthly)</p>
                </div>
              </div>
              {/* <div className="col-sm-4 package-card-pink mx-5">
                <div className="package-gold mb-3">
                  <div className="img-area-gold">
                    <img src={pinkdiamond} alt="loading...." />

                  </div>
                  <div className="heading-gold">
                    <p>gold</p>
                  </div>
                </div>
                <div className="package-price-area mt-3 mb-4">
                  <div className="price-land-card">
                    <p>$499</p>
                  </div>
                  <div className="price-year">
                    <p>( 3 years )</p>
                  </div>
                </div>
                <div className="single-property-pink mt-3 mb-3">
                  <p>Single Property</p>
                </div>
                <div className="monthly-price-gold mt-3">
                  <p>2.5 $ (Prop/Monthly)</p>
                </div>
              </div> */}
              <div className="col-sm-4 package-card-purple mx-5">
                <div className="package-gold mb-3">
                  <div className="img-area-gold">
                    <img src={purplediamond} alt="loading...." />
                  </div>
                  <div className="heading-gold">
                    <p>Platinum</p>
                  </div>
                </div>
                <div className="package-price-area mt-3 mb-4">
                  <div className="price-land-card">
                    <p>$999</p>
                  </div>
                  <div className="price-year">
                    <p>( 3 years )</p>
                  </div>
                </div>
                <div className="single-property-purple mt-3 mb-3">
                  <p>Single Property</p>
                </div>
                <div className="monthly-price-parple mt-3">
                  <p>2.5 $ (Prop/Monthly)</p>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* <div className=" mt-4">
      <div className="row">
        <div className="col-sm-4 package-card-bule">
          <div className="package-gold mb-3">
            <div className="img-area-gold">
              <img src={bluediamond} alt="loading...." />
            </div>
            <div className="heading-gold">
              <p>silver</p>
            </div>
          </div>
          <div className="package-price-area mt-3 mb-4">
            <div className="price-land-card">
              <p>$99</p>
            </div>
            <div className="price-year">
              <p>( 3 years )</p>
            </div>
          </div>
          <div className="single-property mt-3 mb-3">
            <p>Single Property</p>
          </div>
          <div className="monthly-price mt-3">
            <p>2.5 $ (Prop/Monthly)</p>
          </div>
        </div>
        <div className="col-sm-4 package-card-pink mx-5">
          <div className="package-gold mb-3">
            <div className="img-area-gold">
              <img src={pinkdiamond} alt="loading...." />

            </div>
            <div className="heading-gold">
              <p>gold</p>
            </div>
          </div>
          <div className="package-price-area mt-3 mb-4">
            <div className="price-land-card">
              <p>$499</p>
            </div>
            <div className="price-year">
              <p>( 3 years )</p>
            </div>
          </div>
          <div className="single-property-pink mt-3 mb-3">
            <p>Single Property</p>
          </div>
          <div className="monthly-price-gold mt-3">
            <p>2.5 $ (Prop/Monthly)</p>
          </div>
        </div>
        <div className="col-sm-4 package-card-purple">
          <div className="package-gold mb-3">
            <div className="img-area-gold">
              <img src={purplediamond} alt="loading...." />
            </div>
            <div className="heading-gold">
              <p>Platinum</p>
            </div>
          </div>
          <div className="package-price-area mt-3 mb-4">
            <div className="price-land-card">
              <p>$999</p>
            </div>
            <div className="price-year">
              <p>( 3 years )</p>
            </div>
          </div>
          <div className="single-property-purple mt-3 mb-3">
            <p>Single Property</p>
          </div>
          <div className="monthly-price-parple mt-3">
            <p>2.5 $ (Prop/Monthly)</p>
          </div>
        </div>
      </div>
    </div> */}

      <div className="my-4">
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
                <input type="radio" name="radio-input" className="m-0" /> Online
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageTypeDetailsInLandlord;
