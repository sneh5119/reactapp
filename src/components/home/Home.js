import React from 'react'
import './Home.scss';
import home1 from '../../assets/images/home1.jpg'
import home from '../../assets/images/home.jpg'
import progressLeftStat from '../../assets/images/progress-left-stat.PNG'

const Home = () => {
  return (
    <div>
  <body>
    <div class="container-fluid w-auto home-container p-0 m-0">
      <div class="row mt-5 me-0 mb-0 ms-4">
        <div class="col-12 col-md-6 col-lg-4">
          <div class="header-details">
            <h1 class="text-uppercase mb-1">future of real estate investing</h1>
            <p class="text-capitalize mb-3">
              invest in tokenized real estate for only $50 and sell anytime.
            </p>
            <button type="button" class="btn text-uppercase promissory-btn">
              view market place
            </button>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-8 pe-0 d-flex justify-content-end">
          <img src={home} alt="..." class="home-img" />
        </div>
      </div>

      <div class="home-steps-details">
        <div class="steps-container mx-4 p-4">
          <h5 class="text-white fw-lighter text-center mb-1">
            Investing in real estate has never been easier
          </h5>
          <h5 class="text-white text-center mb-3">We Are Ready To Help You</h5>
          <div class="row">
            <div class="col-12 col-md-4 position-relative">
              <div class="landing-card step1-card d-flex align-items-end">
                <div
                  class="txt-content bg-white mx-3 px-4 d-flex flex-column justify-content-between"
                >
                  <h6 class="text-center text-capitalize pri-clr mt-4">
                    browse properties
                  </h6>
                  <p class="text-center sec-clr fs-14">
                    View detailed financial data, inspection reports, and more.
                    All property documents are publicly available, E.g., 3139
                    West Blvd
                  </p>
                </div>
              </div>
              <div class="step-number">
                <div class="step-count">1</div>
                <hr class="step-hr" />
              </div>
            </div>
            <div class="col-12 col-md-4 position-relative">
              <div class="landing-card step2-card d-flex align-items-end">
                <div
                  class="txt-content bg-white mx-3 px-4 d-flex flex-column justify-content-between"
                >
                  <h6 class="text-center text-capitalize pri-clr mt-4">
                    select property
                  </h6>
                  <p class="text-center sec-clr fs-14">
                    Purchase tokens for $50 each and become a direct owner. Get
                    your first rental payment that same day.
                  </p>
                </div>
              </div>
              <div class="step-number">
                <div class="step-count">2</div>
                <hr class="step-hr" />
              </div>
            </div>
            <div class="col-12 col-md-4 position-relative">
              <div class="landing-card step3-card d-flex align-items-end">
                <div
                  class="txt-content bg-white mx-3 px-4 d-flex flex-column justify-content-between"
                >
                  <h6 class="text-center text-capitalize pri-clr mt-4">
                    earn appreciation & sell anytime
                  </h6>
                  <p class="text-center sec-clr fs-14">
                    Tokens appreciate on a monthly basis as the property
                    appreciates. Sell your tokens anytime. No lock-up periods.
                  </p>
                </div>
              </div>
              <div class="step-number w-auto">
                <div class="step-count">3</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="home-featured-properties-details pt-4 pb-5">
        <div class="featured-properties-container mx-4">
          <div class="analytics-row px-5 py-3">
            <div class="row">
              <div class="col-4">
                <h4 class="pri-clr text-center mb-1">200</h4>
                <h6 class="black-clr text-uppercase text-center fw-normal mb-0">
                  award winning
                </h6>
              </div>
              <div class="col-4">
                <h4 class="pri-clr text-center mb-1">100+</h4>
                <h6 class="black-clr text-uppercase text-center fw-normal mb-0">
                  property read
                </h6>
              </div>
              <div class="col-4">
                <h4 class="pri-clr text-center mb-1">500+</h4>
                <h6 class="black-clr text-uppercase text-center fw-normal mb-0">
                  happy customers
                </h6>
              </div>
            </div>
          </div>

          <div class="featured-properties-row p-4">
            <h4 class="text-capitalize mb-4 text-white text-center">
              featured properties
            </h4>

            <div class="action-btns text-center mb-3">
              <div
                class="btn-group"
                role="group"
                aria-label="Basic radio toggle button group"
              >
                <input
                  type="radio"
                  class="btn-check"
                  name="btnradio"
                  id="btnradio1"
                  autocomplete="off"
                />
                <label class="btn btn-outline-primary" for="btnradio1">
                  home
                </label>

                <input
                  type="radio"
                  class="btn-check"
                  name="btnradio"
                  id="btnradio2"
                  autocomplete="off"
                  checked
                />
                <label class="btn btn-outline-primary mx-3" for="btnradio2">
                  apartment
                </label>

                <input
                  type="radio"
                  class="btn-check"
                  name="btnradio"
                  id="btnradio3"
                  autocomplete="off"
                />
                <label class="btn btn-outline-primary" for="btnradio3">
                  land
                </label>
              </div>
            </div>

            <div class="row mb-4">
              <div class="col-4">
                <div class="home-analytics-card">
                  <img
                    src={home1}
                    alt="..."
                    class="w-100 h-100 home-img"
                  />
                  <div class="footer">
                    <div
                      class="top-content bg-white d-flex justify-content-between p-2 m-2 mb-0"
                    >
                      <div
                        class="content-left d-flex flex-column justify-content-center"
                      >
                        <h6 class="black-clr mb-0 fs-14 fw-semibold">
                          12507 Astor Ave
                        </h6>
                        <p class="sec-clr mb-0 fs-11 fw-500">
                          Cleveland, Ohio 44135
                        </p>
                      </div>
                      <div
                        class="content-right fs-12 d-flex align-items-center"
                      >
                        <div class="d-flex flex-column align-items-end me-2">
                          <span class="irr-percent fw-500 pri-clr">
                            19.9%
                          </span>
                          <span class="coc-percent sec-clr"> 9.9% </span>
                        </div>
                        <div class="d-flex flex-column align-items-end">
                          <span class="fw-500 pri-clr"> IRR </span>
                          <span class="sec-clr"> CoC </span>
                        </div>
                      </div>
                    </div>
                    <div
                      class="bottom-content bg-black d-flex justify-content-between p-2 m-2 mt-0"
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
                          <span class="fw-100 fs-10 text-end">
                            TOKENS LEFT
                          </span>
                        </div>
                        <div>
                          <img
                            src={progressLeftStat}
                            alt="..."
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="home-analytics-card">
                  <img
                    src={home1}
                    alt="..."
                    class="w-100 h-100 home-img"
                  />
                  <div class="footer">
                    <div
                      class="top-content bg-white d-flex justify-content-between p-2 m-2 mb-0"
                    >
                      <div
                        class="content-left d-flex flex-column justify-content-center"
                      >
                        <h6 class="black-clr mb-0 fs-14 fw-semibold">
                          12507 Astor Ave
                        </h6>
                        <p class="sec-clr mb-0 fs-11 fw-500">
                          Cleveland, Ohio 44135
                        </p>
                      </div>
                      <div
                        class="content-right fs-12 d-flex align-items-center"
                      >
                        <div class="d-flex flex-column align-items-end me-2">
                          <span class="irr-percent fw-500 pri-clr">
                            19.9%
                          </span>
                          <span class="coc-percent sec-clr"> 9.9% </span>
                        </div>
                        <div class="d-flex flex-column align-items-end">
                          <span class="fw-500 pri-clr"> IRR </span>
                          <span class="sec-clr"> CoC </span>
                        </div>
                      </div>
                    </div>
                    <div
                      class="bottom-content bg-black d-flex justify-content-between p-2 m-2 mt-0"
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
                          <span class="fw-100 fs-10 text-end">
                            TOKENS LEFT
                          </span>
                        </div>
                        <div>
                          <img
                            src={progressLeftStat}
                            alt="..."
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="home-analytics-card">
                  <img
                    src={home1}
                    alt="..."
                    class="w-100 h-100 home-img"
                  />
                  <div class="footer">
                    <div
                      class="top-content bg-white d-flex justify-content-between p-2 m-2 mb-0"
                    >
                      <div
                        class="content-left d-flex flex-column justify-content-center"
                      >
                        <h6 class="black-clr mb-0 fs-14 fw-semibold">
                          12507 Astor Ave
                        </h6>
                        <p class="sec-clr mb-0 fs-11 fw-500">
                          Cleveland, Ohio 44135
                        </p>
                      </div>
                      <div
                        class="content-right fs-12 d-flex align-items-center"
                      >
                        <div class="d-flex flex-column align-items-end me-2">
                          <span class="irr-percent fw-500 pri-clr">
                            19.9%
                          </span>
                          <span class="coc-percent sec-clr"> 9.9% </span>
                        </div>
                        <div class="d-flex flex-column align-items-end">
                          <span class="fw-500 pri-clr"> IRR </span>
                          <span class="sec-clr"> CoC </span>
                        </div>
                      </div>
                    </div>
                    <div
                      class="bottom-content bg-black d-flex justify-content-between p-2 m-2 mt-0"
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
                          <span class="fw-100 fs-10 text-end">
                            TOKENS LEFT
                          </span>
                        </div>
                        <div>
                          <img
                            src={progressLeftStat}
                            alt="..."
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div
                class="col-4 d-flex align-items-center justify-content-center"
              >
                <div class="view-actions">
                  <div class="view-btn disabled-btn">
                    <i class="fa fa-arrow-left text-white"></i>
                  </div>
                </div>
              </div>
              <div
                class="col-4 d-flex align-items-center justify-content-center position-relative"
              >
                <hr class="view-hr" />
                <button
                  type="button"
                  class="btn text-uppercase promissory-btn fs-13 view-all-btn"
                >
                  view all properties
                </button>
              </div>
              <div
                class="col-4 d-flex align-items-center justify-content-center"
              >
                <div class="view-actions flex-row-reverse">
                  <div class="view-btn">
                    <i class="fa fa-arrow-right text-white"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="customer-reviews-row p-5 pb-2">
            <div class="row">
              <div class="col-5 d-flex align-items-center">
                <h4 class="mb-5 pri-clr">Happy Customers</h4>
              </div>

              <div class="col-5">
                <div class="user-feedback-details">
                  <h4 class="pri-clr fw-400 mb-2">
                    THE BEST WAY TO INVEST IN REAL ESTATE
                  </h4>
                  <p class="black-clr mb-4 fs-14">
                    I’ve invested in a handful of properties through Lofty and
                    love the simplicity of distributing payments via the
                    blockchain. It feels like the future of real estate.
                  </p>
                  <div class="user-details d-flex flex-column mb-5">
                    <span class="black-clr fw-500 fs-14"> Alex Farrill, </span>
                    <span class="sec-clr fs-12">
                      Alex Farrill, Head Of Engineering For Buyer At Opendoor
                    </span>
                  </div>
                </div>
              </div>

              <div class="col-2 d-flex align-items-end">
                <div class="position-relative me-2">
                  <div class="view-next">
                    <div class="view-btn disabled-btn">
                      <i class="fa fa-arrow-left grey-clr"></i>
                    </div>
                  </div>
                </div>
                <div class="position-relative">
                  <div class="view-next">
                    <div class="view-btn">
                      <i class="fa fa-arrow-right grey-clr"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
    </div>
  )
}

export default Home


