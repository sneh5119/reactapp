import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Valuation = () => {
    const { propertyId } = useParams();
    const navigate = useNavigate();
    const navigateUrl = () => {
        return navigate(`/promissory/note-file/`+propertyId);
    }
  return (
    <React.Fragment>
        <div class="valuations-form form-container">
            <div class="loan-form px-2 px-sm-5 pt-3">
              <h6
                class="title text-uppercase px-2 py-1 mt-2 mt-sm-4 mb-1 mb-sm-2"
              >
                form title
              </h6>
              <form action="">
                <div class="row">
                  <div class="col-12 col-sm-3">
                    <div class="mb-2 mb-sm-3">
                      <label
                        for="form-input-ele"
                        class="form-label sec-clr fs-10 fw-500 mb-0 text-uppercase"
                      >
                        input ele
                      </label>
                      <input
                        type="text"
                        class="form-control black-clr promissory-input fs-12 fw-500"
                        value=""
                        placeholder="placeholder"
                        id="form-input-ele"
                      />
                    </div>
                  </div>
                  <div class="col-12 col-sm-3">
                    <div class="mb-2 mb-sm-3">
                      <label
                        for="form-select-ele"
                        class="form-label sec-clr fs-10 fw-500 mb-0 text-uppercase"
                      >
                        select ele
                      </label>
                      <select
                        class="form-select black-clr promissory-select fs-12 fw-500"
                        id="form-select-ele"
                      >
                        <option selected value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-12 col-sm-3">
                    <div class="mb-2 mb-sm-3">
                      <label
                        for="form-switch-ele"
                        class="form-label sec-clr fs-10 fw-500 mb-0 text-uppercase"
                      >
                        checkbox switch ele
                      </label>
                      <span class="switch" id="form-switch-ele">
                        <input type="checkbox" id="form-switch-ele-switcher" />
                        <label for="form-switch-ele-switcher"></label>
                      </span>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div class="loan-form px-2 px-sm-5 pt-3">
              <h6
                class="title text-uppercase px-2 py-1 mt-2 mt-sm-4 mb-1 mb-sm-2"
              >
                form title
              </h6>
              <form action="">
                <div class="row">
                  <div class="col-12 col-sm-3">
                    <div class="mb-2 mb-sm-3">
                      <label
                        for="form-input-ele"
                        class="form-label sec-clr fs-10 fw-500 mb-0 text-uppercase"
                      >
                        input ele
                      </label>
                      <input
                        type="text"
                        class="form-control black-clr promissory-input fs-12 fw-500"
                        value=""
                        placeholder="placeholder"
                        id="form-input-ele"
                      />
                    </div>
                  </div>
                  <div class="col-12 col-sm-3">
                    <div class="mb-2 mb-sm-3">
                      <label
                        for="form-select-ele"
                        class="form-label sec-clr fs-10 fw-500 mb-0 text-uppercase"
                      >
                        select ele
                      </label>
                      <select
                        class="form-select black-clr promissory-select fs-12 fw-500"
                        id="form-select-ele"
                      >
                        <option selected value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-12 col-sm-3">
                    <div class="mb-2 mb-sm-3">
                      <label
                        for="form-switch-ele"
                        class="form-label sec-clr fs-10 fw-500 mb-0 text-uppercase"
                      >
                        checkbox switch ele
                      </label>
                      <span class="switch" id="form-switch-ele">
                        <input type="checkbox" id="form-switch-ele-switcher" />
                        <label for="form-switch-ele-switcher"></label>
                      </span>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div class="loan-footer mt-1 mt-sm-4 px-2 px-sm-3 pt-3 pb-0">
              <button
                class="btn text-uppercase pri-clr promissory-white-btn cancel-loan"
              >
                cancel
              </button>
              <div class="to-fro-btns">
                {/* <button
                  class="btn text-uppercase pri-clr promissory-white-btn valuations-back"
                >
                  back
                </button> */}
                <button
                  class="btn text-uppercase promissory-btn valuations-next next-step"
                  onClick={navigateUrl}
                >
                  next
                </button>
              </div>
            </div>
          </div>
    </React.Fragment>
  )
}

export default Valuation