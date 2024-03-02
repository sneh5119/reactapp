import React from 'react'
import '../marketPlace/MarketPlace.scss';

const StepperHeader = () => {

 
  return (
    <React.Fragment>
        <div class="stepper-container">
            <div class="loan-stepper px-2 px-sm-5">
            {/* active */}
              <div class="step property-dets-step">
                <img src={require('../../../assets/images/loan-sample-icon.PNG')} alt="icon" />
                <h6 class="mb-0 sec-clr text-uppercase">property details</h6>
              </div>
              <div class="step note-terms-step">
                <img src={require('../../../assets/images/loan-sample-icon.PNG')} alt="icon" />
                <h6 class="mb-0 sec-clr text-uppercase">note terms</h6>
              </div>
              <div class="step valuations-step">
                <img src={require('../../../assets/images/loan-sample-icon.PNG')} alt="icon" />
                <h6 class="mb-0 sec-clr text-uppercase">valuations</h6>
              </div>
              <div class="step files-step">
                <img src={require('../../../assets/images//loan-sample-icon.PNG')} alt="icon" />
                <h6 class="mb-0 sec-clr text-uppercase">note files</h6>
              </div>
            </div>
          </div>
    </React.Fragment> 
    )
}

export default StepperHeader