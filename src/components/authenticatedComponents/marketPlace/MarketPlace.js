import React, { useState } from 'react';
import './MarketPlace.scss';
import { useEffect } from 'react';
import axios from 'axios';
import environment from '../../../environemnt';
import { useNavigate } from 'react-router-dom';
import api from '../../../util/api'
// import './MarketPlace.scss';

const MarketPlace = () => {
    // const rangeSlider = document.getElementById('CoC-range');
    //   const rangevalue = document.getElementById('CoC-val');
    //   rangevalue.innerHTML = rangeSlider.value + '%';

    //   rangeSlider.oninput = function () {
    //     rangevalue.innerHTML = this.value + '%';
    //   };
    
    const [responseData, setResponseData] = useState(null);
    const [currentItems, setCurrentItems] = useState(10);
    const [pageSize, setPageSize] = useState(null);

    // function fetchData() {
    //   api.get('/promissory/v1/property',)
    //     .then((response) => {
    //       // Handle the response data
    //     })
    //     .catch((error) => {
    //       // Handle the error
    //     });
    // }
    

    // const postData = async (formValue) => {
    //   try {
    //     const response = await axios.get('http://18.226.163.172:30814/promissory/v1/property', {
    //       headers: {
    //         'Accept': 'application/json',
    //         'Authorization': 'Bearer '+localStorage.getItem('user-token')
    //         // Add other headers here
    //       }
    //     });
    
    //     setResponseData(response.data);
    //     console.log("response.data", response.data);
    //   } catch (error) {
    //     console.error("There was an error!", error);
    //   }
    // };

    const postData = async () => {
      try {
        const response = await api.get(environment.baseUrl+'/v1/property/getproperties?sortDirection=ASC&page=1&take='+currentItems, {
          headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('user-token')
            // Add other headers here if needed
          }
        });
    
        setResponseData(response.data.data);
        setPageSize(response.data.meta)
        console.log("response.data", response.data.meta);
      } catch (error) {
        console.error("There was an error!", error);
      }
    };
    
    useEffect(()=>{
      loadMoreProperties();
    },[]);
    
   // Initialize state for the slider value
  const [sliderCurrentCashValue, setSliderCurrentCashValue] = useState(13);

  // Handle slider value change
  const handleSliderCurrentCashChange = (event) => {
    setSliderCurrentCashValue(event.target.value);
  };

  const navigate = useNavigate();
  const navigateRoute = (url) => {
    return navigate('/promissory/property-details');
  };

  const navigateToViewMarket = (id) => {
    return navigate('/promissory/view-market-place/'+id);
  }

  const loadMoreProperties = () => {
    setCurrentItems(currentItems+10);
    postData();
  }

  return (
    <React.Fragment>
              {/* <!-- filters row --> */}
              <div
        class="container-fluid promissory-container p-0 position-relative marketPlace-container"
      >
         {/* <!-- module header --> */}
        <div class="row m-0 module-header ms-2 ms-sm-3 me-2 me-sm-0">
          <div class="col-12 col-sm-7 col-md-7 col-lg-8 col-xl-9 p-0">
            {/* <!-- marketplace-title --> */}
            <div
              class="module-title h-100 pt-1 pt-sm-3 pe-0 pe-sm-3 d-flex flex-column justify-content-end"
            >
              <h6 class="mb-0 sec-clr text-uppercase">market place</h6>
              <p class="mb-1 sec-clr fs-11 lh-11">
                Invest in rental properties for only $50.
              </p>
            </div>
            {/* <!-- new loan-title --> */}
            <div
              class="module-title h-100 pt-1 pt-sm-3 pe-0 pe-sm-3 d-flex flex-column justify-content-end new-loan-title d-none"
            >
              <p class="mb-1 sec-clr fs-11 lh-11">Marketplace /</p>
              <h6 class="mb-0 sec-clr text-uppercase">NEW LOAN</h6>
            </div>
            {/* <!-- property title --> */}
            <div
              class="module-title h-100 pt-1 pt-sm-3 pe-0 pe-sm-3 d-flex flex-column justify-content-end property-title d-none"
            >
              <p class="mb-1 sec-clr fs-11 lh-11">Marketplace /</p>
              <div class="d-flex align-items-center justify-content-between">
                <h6
                  class="mb-0 sec-clr text-uppercase d-flex align-items-center pe-2"
                >
                  621 E LE CLAIRE RD
                  <span class="badge rounded-pill active-badge ms-1">
                    ACTIVE
                  </span>
                </h6>
                <span class="property-address sec-clr fs-11 lh-11 fw-500">
                  51440 864<sup>th</sup> Rd, Eldridge, IA 52748
                </span>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-5 col-md-5 col-lg-4 col-xl-3 p-0">
            {/* <!-- notification-details --> */}
            <div
              class="notification-details d-flex align-items-center justify-content-between p-3"
            >
              <div class="notifications-left">
                <span class="badge bg-white black-clr p-2">
                  #<span class="count pri-clr">10</span>
                  <i class="fa fa-trophy black-clr ps-2" aria-hidden="true"></i>
                </span>
                <span class="badge bg-white black-clr p-2 ms-1">
                  $<span class="count pri-clr">0.00</span>
                  <i
                    class="fa fa-certificate black-clr ps-2"
                    aria-hidden="true"
                  ></i>
                </span>
              </div>
              <div class="notifications-right">
                <span class="badge bg-white black-clr p-2">
                  <i class="fa fa-square-o black-clr" aria-hidden="true"></i>
                </span>
                <span
                  class="badge bg-white black-clr p-2 position-relative ms-1"
                >
                  <i class="fa fa-bell-o black-clr" aria-hidden="true"></i>
                  <span
                    class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  >
                    09
                  </span>
                </span>
              </div>
            </div>
            {/* <!-- ends::notification-details --> */}
          </div>
        </div>
        {/* <!-- ends::module header --> */}
        <div class="row m-2 m-sm-3 filters-row">
          <div
            class="col-12 col-sm-12 col-md-12 col-lg-1 px-0 d-flex align-items-center"
          >
            <span class="badge bg-white black-clr p-2">
              <i class="fa fa-filter black-clr" aria-hidden="true"></i>
            </span>
          </div>
          <div class="col-6 col-sm-6 col-md-3 col-lg-2 ps-0">
            <label
              for="location-select"
              class="form-label sec-clr fs-10 fw-500 mb-0"
            >
              LOCATION
            </label>
            <select
              class="form-select black-clr promissory-select fs-12 fw-500"
              id="location-select"
            >
              <option selected value="all">All Markets</option>
              <option value="market-2">Market 2</option>
              <option value="market-3">Market 3</option>
              <option value="market-4">Market 4</option>
            </select>
          </div>
          <div class="col-6 col-sm-6 col-md-3 col-lg-2 property-type-col">
            <label
              for="location-select"
              class="form-label sec-clr fs-10 fw-500 mb-0"
            >
              PROPERTY TYPE
            </label>
            <select
              class="form-select black-clr promissory-select fs-12 fw-500"
              id="location-select"
            >
              <option selected value="all">All Properties</option>
              <option value="property-2">Property 2</option>
              <option value="property-3">Property 3</option>
              <option value="property-4">Property 4</option>
            </select>
          </div>
          <div
            class="col-6 col-sm-6 col-md-3 col-lg-2 mt-2 mt-md-0 CoC-rtrns-col"
          >
            <label for="CoC-range" class="form-label sec-clr fs-10 fw-500 mb-0">
              CURRENT CASH ON CASH RETURN ( {sliderCurrentCashValue} %)
            </label>
            <div class="d-flex align-items-center">
              <input
                type="range"
                min="0"
                max="100"
                value={sliderCurrentCashValue}
                class="form-range"
                id="CoC-range"
                onChange={handleSliderCurrentCashChange}
              />
              <span
                id="CoC-val"
                class="CoC-val range-value sec-clr fs-10 fw-500 ms-1"
              ></span>
            </div>
          </div>
          <div
            class="col-6 col-sm-6 col-md-3 col-lg-2 mt-2 mt-md-0 current-project-col"
          >
            <label for="CPI-range" class="form-label sec-clr fs-10 fw-500 mb-0">
              CURRENT PROJECTED IRR (%)
            </label>
            <div class="d-flex align-items-center">
              <input
                type="range"
                min="1"
                max="100"
                value="20"
                class="form-range"
                id="CPI-range"
              />
              <span
                id="CPI-val"
                class="CPI-val range-value sec-clr fs-10 fw-500 ms-1"
              ></span>
            </div>
          </div>
          <div
            class="col-12 col-sm-12 col-md-12 col-lg-3 filter-btns-col pe-0 d-flex align-items-center mt-1 mt-sm-2 mt-lg-0"
          >
            <div
              class="btn-group filter-by-arrival bg-white"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              <input
                type="radio"
                class="btn-check"
                name="market-filter"
                id="all"
                autocomplete="off"
                checked
              />
              <label
                class="btn btn-outline-primary border-0 black-clr fs-12 fw-500"
                for="all"
              >
                All
              </label>

              <input
                type="radio"
                class="btn-check"
                name="market-filter"
                id="new"
                autocomplete="off"
              />
              <label
                class="btn btn-outline-primary border-0 black-clr fs-12 fw-500"
                for="new"
              >
                New
              </label>

              <input
                type="radio"
                class="btn-check"
                name="market-filter"
                id="upcoming"
                autocomplete="off"
              />
              <label
                class="btn btn-outline-primary border-0 black-clr fs-12 fw-500"
                for="upcoming"
              >
                Upcoming
              </label>
            </div>
          </div>
        </div>
        {/* <!-- ends::filters row -->

        <!-- properties row --> */}
        <div class="row mx-0 mx-sm-2 properties-row">
        {responseData?.map((property, index) => (
          <>
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-2"  onClick={() => {
            navigateToViewMarket(property);
        }}>
            <div class="home-analytics-card user-property">
              <img
                // src={require('../../../assets/images/home1.jpg')}
                src={require('../../../assets/images/home1.jpg')}
                alt="..."
                class="w-100 h-100 home-img"
              />
              <div class="footer">
                <div
                  class="top-content bg-white d-flex justify-content-between p-2"
                >
                  <div
                    class="content-left d-flex flex-column justify-content-center"
                  >
                    <h6 class="black-clr mb-0 fs-14 fw-semibold">
                     {property?.street}
                    </h6>
                    <p class="sec-clr mb-0 fs-11 fw-500">
                     {property?.state}, {property?.county} {property?.city} {property?.zipCode}
                    </p>
                  </div>
                  <div class="content-right fs-12 d-flex align-items-center">
                    <div class="d-flex flex-column align-items-end me-2">
                      <span class="irr-percent fw-500 pri-clr"> 19.9% </span>
                      <span class="coc-percent sec-clr"> 9.9% </span>
                    </div>
                    <div class="d-flex flex-column align-items-end">
                      <span class="fw-500 pri-clr"> IRR </span>
                      <span class="sec-clr"> CoC </span>
                    </div>
                  </div>
                </div>
                <div
                  class="bottom-content bg-black d-flex justify-content-between p-2"
                >
                  <div class="content-left d-flex align-items-center">
                    <div class="d-flex flex-column grey-clr me-1">
                      <span class="fw-500 fs-12"> $52.86 </span>
                      <span class="fw-100 fs-10"> MINIMUM </span>
                    </div>
                    <div
                      class="bg-success increased-percent d-flex align-items-center p-1"
                    >
                      <i class="fa fa-arrow-up text-white me-1"></i>
                      <span class="text-white fs-10"> 6.36% </span>
                    </div>
                  </div>
                  <div class="content-right d-flex align-items-center">
                    <div
                      class="d-flex flex-column align-items-end grey-clr me-1"
                    >
                      <span class="fw-500 fs-12"> 5,636 </span>
                      <span class="fw-100 fs-10 text-end"> TOKENS LEFT </span>
                    </div>
                    <div>
                      <img
                        src={require('../../../assets/images/progress-left-stat.PNG')}
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </>
        ))}
          
          
          {/* <div
            class="load-more py-5 d-flex flex-column justify-content-between align-items-center"
          >
            <p class="fs-11 black-clr text-center mb-1">
              12 properties out of 72
            </p>
            <button
              type="button"
              class="btn promissory-white-btn text-uppercase fs-13 fw-500 pri-clr"
            >
              load more properties
            </button>
          </div> */}
        </div>
        {/* <!-- ends::properties row --> */}
        <button class="btn promissory-btn new-loan-btn"  onClick={() => {
            navigateRoute('property-details');
        }}>
          <span class="btn-txt"> UPLOAD NEW LOAN </span>
          <img src={require('../../../assets/images/loan.PNG')} alt="loan" />
        </button>
      
        <div
            class="load-more py-5 d-flex flex-column justify-content-between align-items-center"
          >
           {responseData? <p class="fs-11 black-clr text-center mb-1">
            {responseData?.length} properties out of {pageSize?.itemCount}
            </p>:''}
            <button
              type="button"
              class="btn promissory-white-btn text-uppercase fs-13 fw-500 pri-clr"
              onClick={loadMoreProperties}
            >
              load more properties
            </button>
          </div></div>
        
    </React.Fragment>
  )
}

export default MarketPlace