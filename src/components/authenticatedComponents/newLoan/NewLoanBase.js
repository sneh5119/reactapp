import React from 'react'
import StepperHeader from './StepperHeader';
import { Outlet } from 'react-router-dom';

const NewLoanBase = () => {
  return (
    <React.Fragment>
   <div className='container-fluid promissory-container p-0 position-relative marketPlace-container'>
      <div className='row m-0 module-header ms-2 ms-sm-3 me-2 me-sm-0'>
        <div className='col-12 col-sm-7 col-md-7 col-lg-8 col-xl-9 p-0'>
        {/* <!-- new loan-title --> */}
            <div
              class="module-title h-100 pt-1 pt-sm-3 pe-0 pe-sm-3 d-flex flex-column justify-content-end new-loan-title"
            >
              <p class="mb-1 sec-clr fs-11 lh-11">Marketplace /</p>
              <h6 class="mb-0 sec-clr text-uppercase">NEW LOAN</h6>
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
      <div class="new-loan-container mx-2 mx-sm-3 mb-2 py-3 ">
      <StepperHeader />
      <Outlet />
      </div>
      </div>
    
</React.Fragment>
  )
}

export default NewLoanBase;