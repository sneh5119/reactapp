import React from 'react';
import "./Dashboard.scss"

const Dashboard = () => {
  return (
    <React.Fragment>
      {/* <html lang="en"> */}
    {/* <head>
      <title>PROMISSORY | Dashboard</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
  
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
  
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Ubuntu:wght@300;400;500;700&display=swap"
        rel="stylesheet"
      />
  
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
  
      <link rel="stylesheet" href="./dashboard.css" />
    </head> */}
    {/* <body> */}
      {/* <div class="root-container d-flex"> */}
      
  
        {/* <!-- dashboard container --> */}
        <div class="container-fluid promissory-container p-0" id='dashboard'>
          <div class="row m-0 h-100">
            <div class="col-12 col-sm-7 col-md-8 col-lg-9 p-0">
              <div class="content-left h-100vh p-3 dashboard-content-left">
                {/* <!-- greeting header --> */}
                <div
                  class="header d-flex align-items-center justify-content-between pb-1 mb-4"
                >
                  <p class="black-clr text-capitalize mb-0 fw-500 fs-14">
                    good morning
                    <span class="pri-clr text-capitalize username">
                      oliver<span>!</span>
                    </span>
                  </p>
                  <p class="black-clr font-light mb-0 fs-12 fw-100">
                    Last logged in 20 Mar 2023 10:10 am
                  </p>
                </div>
                {/* <!-- ends::greeting header -->
                <!-- assets & wallets info --> */}
                <div class="row m-0">
                  <div class="col-12 col-lg-6 p-0 pe-0 pe-lg-2">
                    <h6 class="text-uppercase sec-clr mb-1">ASSETS OVERVIEW</h6>
                    {/* <!-- assets box 1 --> */}
                    <div class="px-2 dashboard-card mb-2 mb-lg-3">
                      <div class="row m-0">
                        <div
                          class="col-2 d-flex align-items-center justify-content-center p-0 py-3"
                        >
                          <img
                            src={require('../../../assets/images/balance.PNG')}
                            alt="..."
                            class=""
                          />
                        </div>
                        <div
                          class="col-5 d-flex flex-column align-items-start justify-content-between px-2 py-3 bx-shdw"
                        >
                          <div class="dets-in-labl-val d-flex flex-column mb-3">
                            <span class="black-clr fs-11"
                              >Account Value
                              <i
                                class="fa fa-info-circle sec-clr"
                                aria-hidden="true"
                              ></i
                            ></span>
                            <span class="black-clr fw-500"> $0.00 </span>
                          </div>
                          <div class="dets-in-labl-val d-flex flex-column">
                            <span class="black-clr fs-11"
                              >Available Balance
                              <i
                                class="fa fa-info-circle sec-clr"
                                aria-hidden="true"
                              ></i
                            ></span>
                            <span class="black-clr fw-500"> $0.00 </span>
                          </div>
                        </div>
                        <div class="col-5 p-0 ps-2 py-3">
                          <div class="action-btns d-flex justify-content-center">
                            <div
                              class="btn-group d-flex flex-column"
                              role="group"
                              aria-label="Basic radio toggle button group"
                            >
                              <input
                                type="radio"
                                class="btn-check"
                                name="btnradio"
                                id="deposit"
                                autocomplete="off"
                                checked
                              />
                              <label
                                class="btn btn-outline-primary mb-2 py-1"
                                for="deposit"
                                >Deposit</label
                              >
  
                              <input
                                type="radio"
                                class="btn-check"
                                name="btnradio"
                                id="withdraw"
                                autocomplete="off"
                              />
                              <label
                                class="btn btn-outline-primary py-1"
                                for="withdraw"
                                >withdraw</label
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- ends::assets box 1 -->
                    <!-- assets box 2 --> */}
                    <div class="px-2 dashboard-card">
                      <div class="row m-0">
                        <div
                          class="col-2 d-flex align-items-center justify-content-center p-0 py-3"
                        >
                          <img
                            src={require('../../../assets/images/balance.PNG')}
                            alt="..."
                            class=""
                          />
                        </div>
                        <div
                          class="col-5 d-flex flex-column align-items-start justify-content-between px-2 py-3"
                        >
                          <div class="dets-in-labl-val d-flex flex-column mb-3">
                            <span class="black-clr fs-11">
                              Total Rent Earned
                            </span>
                            <span class="black-clr fw-500"> $0.00 </span>
                          </div>
                          <div class="dets-in-labl-val d-flex flex-column">
                            <span class="black-clr fs-11"> Rent Balance </span>
                            <span class="black-clr fw-500"> $0.00 </span>
                          </div>
                        </div>
                        <div
                          class="col-5 d-flex flex-column align-items-start justify-content-between px-2 py-3"
                        >
                          <div class="dets-in-labl-val d-flex flex-column mb-3">
                            <span class="black-clr fs-11">
                              Properties Owned
                              <i
                                class="fa fa-info-circle sec-clr"
                                aria-hidden="true"
                              >
                              </i>
                            </span>
                            <span class="black-clr fw-500"> 0 </span>
                          </div>
                          <div class="dets-in-labl-val d-flex flex-column">
                            <span class="black-clr fs-11">
                              Est. Property Value
                              <i
                                class="fa fa-info-circle sec-clr"
                                aria-hidden="true"
                              >
                              </i>
                            </span>
                            <span
                              class="black-clr fw-500 d-flex align-items-center"
                            >
                              $0.00
                              <div
                                class="property-indicator increased-percent d-flex align-items-center ms-1"
                              >
                                <span class="text-danger fs-10"> 0% </span>
                                <i
                                  class="fa fa-arrow-down text-danger ms-1 fs-10"
                                ></i>
                              </div>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- ends::assets box 2 --> */}
                  </div>
                  <div class="col-12 col-lg-6 p-0 ps-0 ps-lg-2">
                    <h6 class="text-uppercase sec-clr mb-1 mt-3 mt-lg-0">
                      MY WALLET
                    </h6>
                    {/* <!-- wallet box --> */}
                    <div class="px-2 dashboard-card">
                      <div class="row m-0">
                        <div
                          class="col-2 d-flex flex-column align-items-center justify-content-center p-0 py-3"
                        >
                          <img
                            src={require('../../../assets/images/balance.PNG')}
                            alt="..."
                            class=""
                          />
                          <button
                            type="button"
                            class="btn promissory-trnsprnt-link wallet-address-link p-0 fs-11 blue-clr text-center"
                          >
                            Wallet Address
                          </button>
                        </div>
                        <div
                          class="col-5 d-flex flex-column align-items-start justify-content-between px-2 py-3"
                        >
                          <div class="dets-in-labl-val d-flex flex-column mb-3">
                            <span class="black-clr fs-11">
                              Wallet Value
                              <i
                                class="fa fa-info-circle sec-clr"
                                aria-hidden="true"
                              >
                              </i>
                            </span>
                            <span class="black-clr fw-500"> $0.00 </span>
                          </div>
                          <div class="dets-in-labl-val d-flex flex-column">
                            <span class="black-clr fs-11">
                              Crypto Value
                              <i
                                class="fa fa-info-circle sec-clr"
                                aria-hidden="true"
                              >
                              </i>
                            </span>
                            <span class="black-clr fw-500"> $0.00 </span>
                          </div>
                        </div>
                        <div
                          class="col-5 d-flex flex-column align-items-start justify-content-between px-2 py-3"
                        >
                          <div class="dets-in-labl-val d-flex flex-column mb-3">
                            <span class="black-clr fs-11">
                              Property Value
                              <i
                                class="fa fa-info-circle sec-clr"
                                aria-hidden="true"
                              >
                              </i>
                            </span>
                            <span class="black-clr fw-500"> $0.00 </span>
                          </div>
                        </div>
                        <div class="col-6 p-0 pb-3 pe-1">
                          <div class="graph p-2">
                            <div
                              class="dets-in-labl-val d-flex flex-column mb-3 w-100"
                            >
                              <span class="black-clr fs-11"> Income </span>
                              <span class="black-clr fw-500"> $0.00 </span>
                            </div>
                            <img 
                            src={require('../../../assets/images/graph.PNG')} alt="..." />
                          </div>
                        </div>
                        <div class="col-6 p-0 pb-3 ps-1">
                          <div class="graph p-2">
                            <div
                              class="dets-in-labl-val d-flex flex-column mb-3 w-100"
                            >
                              <span class="black-clr fs-11"> Income </span>
                              <span class="black-clr fw-500"> $0.00 </span>
                            </div>
                            <img src={require('../../../assets/images/graph.PNG')} alt="..." />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- ends::wallet box --> */}
                  </div>
                </div>
                {/* <!-- ends::assets & wallets info --> */}
                <div class="transactions-list-data mt-4">
                  <div
                    class="list-hdr d-flex flex-row align-items-center justify-content-between mb-1"
                  >
                    <h6 class="text-uppercase sec-clr mb-0">
                      recent transactions
                    </h6>
                    <button
                      type="button"
                      class="btn view-all-btn text-uppercase p-0 fs-13 fw-500 pri-clr"
                    >
                      view all
                    </button>
                  </div>
                  <div class="transactions-list">
                    <ul class="list-group list-group-horizontal-md mb-1">
                      <li class="list-group-item flex-fill">#ID848489</li>
                      <li class="list-group-item flex-fill">Transaction Name</li>
                      <li class="list-group-item flex-fill">Mm/dd/yyyy Hh:Mm</li>
                      <li class="list-group-item flex-fill">Reference Number</li>
                      <li class="list-group-item flex-fill text-success">
                        Transaction Status
                      </li>
                    </ul>
                    <ul class="list-group list-group-horizontal-md mb-1">
                      <li class="list-group-item flex-fill">#ID848489</li>
                      <li class="list-group-item flex-fill">Transaction Name</li>
                      <li class="list-group-item flex-fill">Mm/dd/yyyy Hh:Mm</li>
                      <li class="list-group-item flex-fill">Reference Number</li>
                      <li class="list-group-item flex-fill text-success">
                        Transaction Status
                      </li>
                    </ul>
                    <ul class="list-group list-group-horizontal-md mb-1">
                      <li class="list-group-item flex-fill">#ID848489</li>
                      <li class="list-group-item flex-fill">Transaction Name</li>
                      <li class="list-group-item flex-fill">Mm/dd/yyyy Hh:Mm</li>
                      <li class="list-group-item flex-fill">Reference Number</li>
                      <li class="list-group-item flex-fill text-danger">
                        Transaction Status
                      </li>
                    </ul>
                    <ul class="list-group list-group-horizontal-md mb-1">
                      <li class="list-group-item flex-fill">#ID848489</li>
                      <li class="list-group-item flex-fill">Transaction Name</li>
                      <li class="list-group-item flex-fill">Mm/dd/yyyy Hh:Mm</li>
                      <li class="list-group-item flex-fill">Reference Number</li>
                      <li class="list-group-item flex-fill text-danger">
                        Transaction Status
                      </li>
                    </ul>
                    <ul class="list-group list-group-horizontal-md mb-1">
                      <li class="list-group-item flex-fill">#ID848489</li>
                      <li class="list-group-item flex-fill">Transaction Name</li>
                      <li class="list-group-item flex-fill">Mm/dd/yyyy Hh:Mm</li>
                      <li class="list-group-item flex-fill">Reference Number</li>
                      <li class="list-group-item flex-fill text-success">
                        Transaction Status
                      </li>
                    </ul>
                    <ul class="list-group list-group-horizontal-md mb-1">
                      <li class="list-group-item flex-fill">#ID848489</li>
                      <li class="list-group-item flex-fill">Transaction Name</li>
                      <li class="list-group-item flex-fill">Mm/dd/yyyy Hh:Mm</li>
                      <li class="list-group-item flex-fill">Reference Number</li>
                      <li class="list-group-item flex-fill text-success">
                        Transaction Status
                      </li>
                    </ul>
                    <ul class="list-group list-group-horizontal-md mb-1">
                      <li class="list-group-item flex-fill">#ID848489</li>
                      <li class="list-group-item flex-fill">Transaction Name</li>
                      <li class="list-group-item flex-fill">Mm/dd/yyyy Hh:Mm</li>
                      <li class="list-group-item flex-fill">Reference Number</li>
                      <li class="list-group-item flex-fill text-success">
                        Transaction Status
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
  
            <div class="col-12 col-sm-5 col-md-4 col-lg-3 p-0">
              <div class="content-right h-100 p-3 ps-2">
                {/* <!-- notification-details --> */}
                <div
                  class="notification-details d-flex align-items-center justify-content-between mb-4"
                >
                  <div class="notifications-left">
                    <span class="badge bg-white black-clr p-2">
                      #<span class="count pri-clr">10</span>
                      <i
                        class="fa fa-trophy black-clr ps-2"
                        aria-hidden="true"
                      ></i>
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
                {/* <!-- ends::notification-details -->
                <!-- my properties --> */}
                <div class="my-properties-data">
                  <h6 class="text-uppercase sec-clr mb-1">
                    my properties / market place
                  </h6>
                  <ul class="list-group">
                    <li class="list-group-item border-0 p-2 mb-1">
                      <div class="row m-0">
                        <div class="col-4 p-0 pe-2">
                          <img
                          src={require('../../../assets/images/home1.jpg')}
                            alt=""
                            class="property-img"
                          />
                        </div>
                        <div
                          class="col-8 p-0 d-flex flex-column justify-content-between"
                        >
                          <div class="adress-data">
                            <h6 class="mb-0 black-clr fs-14 fw-500">
                              12507 Astro Ave
                            </h6>
                            <p class="mb-0 sec-clr fs-10 lh-10 fw-100">
                              Cleverland, Ohio 44135
                            </p>
                          </div>
                          <div class="irr-coc-data fs-10 d-flex">
                            <div class="irr me-3">
                              <span class="pri-clr fw-500">IRR: </span>
                              <span class="black-clr fw-500">19.9%</span>
                            </div>
                            <div class="coc">
                              <span class="pri-clr fw-500">CoC: </span>
                              <span class="black-clr fw-500">19.9%</span>
                            </div>
                          </div>
                        </div>
                        <hr class="hr-line" />
                        <div class="col-6 p-0 minimum-value-data">
                          <div class="content-left d-flex align-items-center">
                            <div class="d-flex flex-column pri-clr me-1">
                              <span class="fs-13 fw-500 min-val"> $52.86 </span>
                              <span class="fs-10 fw-500 lh-10 min-txt">
                                MINIMUM
                              </span>
                            </div>
                            <div
                              class="d-flex align-items-center p-1 success-percent-data"
                            >
                              <i
                                class="fa fa-arrow-up text-success me-1 fs-10"
                              ></i>
                              <span class="text-success fs-10 min-percent">
                                6.36%
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class="col-6 p-0 tokens-data">
                          <div
                            class="content-right d-flex align-items-center justify-content-end bg-white"
                          >
                            <div
                              class="d-flex flex-column align-items-end sec-clr me-1"
                            >
                              <span class="fs-13 fw-500 black-clr tokens-val">
                                5,636
                              </span>
                              <span
                                class="fs-10 fw-500 text-end sec-clr lh-10 tokens-txt"
                              >
                                TOKENS LEFT
                              </span>
                            </div>
                            <div>
                              <img
                              src={require('../../../assets/images/progress-stat.PNG')}
                                alt="..."
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item border-0 p-2 mb-1">
                      <div class="row m-0">
                        <div class="col-4 p-0 pe-2">
                          <img
                          src={require('../../../assets/images/home1.jpg')}
                            alt=""
                            class="property-img"
                          />
                        </div>
                        <div
                          class="col-8 p-0 d-flex flex-column justify-content-between"
                        >
                          <div class="adress-data">
                            <h6 class="mb-0 black-clr fs-14 fw-500">
                              12507 Astro Ave
                            </h6>
                            <p class="mb-0 sec-clr fs-10 lh-10 fw-100">
                              Cleverland, Ohio 44135
                            </p>
                          </div>
                          <div class="irr-coc-data fs-10 d-flex">
                            <div class="irr me-3">
                              <span class="pri-clr fw-500">IRR: </span>
                              <span class="black-clr fw-500">19.9%</span>
                            </div>
                            <div class="coc">
                              <span class="pri-clr fw-500">CoC: </span>
                              <span class="black-clr fw-500">19.9%</span>
                            </div>
                          </div>
                        </div>
                        <hr class="hr-line" />
                        <div class="col-6 p-0 minimum-value-data">
                          <div class="content-left d-flex align-items-center">
                            <div class="d-flex flex-column pri-clr me-1">
                              <span class="fs-13 fw-500 min-val"> $52.86 </span>
                              <span class="fs-10 fw-500 lh-10 min-txt">
                                MINIMUM
                              </span>
                            </div>
                            <div
                              class="d-flex align-items-center p-1 success-percent-data"
                            >
                              <i
                                class="fa fa-arrow-up text-success me-1 fs-10"
                              ></i>
                              <span class="text-success fs-10"> 6.36% </span>
                            </div>
                          </div>
                        </div>
                        <div class="col-6 p-0 tokens-data">
                          <div
                            class="content-right d-flex align-items-center justify-content-end bg-white"
                          >
                            <div
                              class="d-flex flex-column align-items-end sec-clr me-1"
                            >
                              <span class="fs-13 fw-500 black-clr tokens-val">
                                5,636
                              </span>
                              <span
                                class="fs-10 fw-500 text-end sec-clr lh-10 tokens-txt"
                              >
                                TOKENS LEFT
                              </span>
                            </div>
                            <div>
                              <img
                                src="../assets/images/progress-stat.PNG"
                                alt="..."
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item border-0 p-2 mb-1">
                      <div class="row m-0">
                        <div class="col-4 p-0 pe-2">
                          <img
                            src={require('../../../assets/images/home1.jpg')}
                            alt=""
                            class="property-img"
                          />
                        </div>
                        <div
                          class="col-8 p-0 d-flex flex-column justify-content-between"
                        >
                          <div class="adress-data">
                            <h6 class="mb-0 black-clr fs-14 fw-500">
                              12507 Astro Ave
                            </h6>
                            <p class="mb-0 sec-clr fs-10 lh-10 fw-100">
                              Cleverland, Ohio 44135
                            </p>
                          </div>
                          <div class="irr-coc-data fs-10 d-flex">
                            <div class="irr me-3">
                              <span class="pri-clr fw-500">IRR: </span>
                              <span class="black-clr fw-500">19.9%</span>
                            </div>
                            <div class="coc">
                              <span class="pri-clr fw-500">CoC: </span>
                              <span class="black-clr fw-500">19.9%</span>
                            </div>
                          </div>
                        </div>
                        <hr class="hr-line" />
                        <div class="col-6 p-0 minimum-value-data">
                          <div class="content-left d-flex align-items-center">
                            <div class="d-flex flex-column pri-clr me-1">
                              <span class="fs-13 fw-500 min-val"> $52.86 </span>
                              <span class="fs-10 fw-500 lh-10 min-txt">
                                MINIMUM
                              </span>
                            </div>
                            <div
                              class="d-flex align-items-center p-1 success-percent-data"
                            >
                              <i
                                class="fa fa-arrow-up text-success me-1 fs-10"
                              ></i>
                              <span class="text-success fs-10"> 6.36% </span>
                            </div>
                          </div>
                        </div>
                        <div class="col-6 p-0 tokens-data">
                          <div
                            class="content-right d-flex align-items-center justify-content-end bg-white"
                          >
                            <div
                              class="d-flex flex-column align-items-end sec-clr me-1"
                            >
                              <span class="fs-13 fw-500 black-clr tokens-val">
                                5,636
                              </span>
                              <span
                                class="fs-10 fw-500 text-end sec-clr lh-10 tokens-txt"
                              >
                                TOKENS LEFT
                              </span>
                            </div>
                            <div>
                              <img
                                src="../assets/images/progress-stat.PNG"
                                alt="..."
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item border-0 p-2 mb-1">
                      <div class="row m-0">
                        <div class="col-4 p-0 pe-2">
                          <img
                            src={require('../../../assets/images/home1.jpg')}
                            alt=""
                            class="property-img"
                          />
                        </div>
                        <div
                          class="col-8 p-0 d-flex flex-column justify-content-between"
                        >
                          <div class="adress-data">
                            <h6 class="mb-0 black-clr fs-14 fw-500">
                              12507 Astro Ave
                            </h6>
                            <p class="mb-0 sec-clr fs-10 lh-10 fw-100">
                              Cleverland, Ohio 44135
                            </p>
                          </div>
                          <div class="irr-coc-data fs-10 d-flex">
                            <div class="irr me-3">
                              <span class="pri-clr fw-500">IRR: </span>
                              <span class="black-clr fw-500">19.9%</span>
                            </div>
                            <div class="coc">
                              <span class="pri-clr fw-500">CoC: </span>
                              <span class="black-clr fw-500">19.9%</span>
                            </div>
                          </div>
                        </div>
                        <hr class="hr-line" />
                        <div class="col-6 p-0 minimum-value-data">
                          <div class="content-left d-flex align-items-center">
                            <div class="d-flex flex-column pri-clr me-1">
                              <span class="fs-13 fw-500 min-val"> $52.86 </span>
                              <span class="fs-10 fw-500 lh-10 min-txt">
                                MINIMUM
                              </span>
                            </div>
                            <div
                              class="d-flex align-items-center p-1 success-percent-data"
                            >
                              <i
                                class="fa fa-arrow-up text-success me-1 fs-10"
                              ></i>
                              <span class="text-success fs-10"> 6.36% </span>
                            </div>
                          </div>
                        </div>
                        <div class="col-6 p-0 tokens-data">
                          <div
                            class="content-right d-flex align-items-center justify-content-end bg-white"
                          >
                            <div
                              class="d-flex flex-column align-items-end sec-clr me-1"
                            >
                              <span class="fs-13 fw-500 black-clr tokens-val">
                                5,636
                              </span>
                              <span
                                class="fs-10 fw-500 text-end sec-clr lh-10 tokens-txt"
                              >
                                TOKENS LEFT
                              </span>
                            </div>
                            <div>
                              <img
                                src="../assets/images/progress-stat.PNG"
                                alt="..."
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item border-0 p-2 mb-1">
                      <div class="row m-0">
                        <div class="col-4 p-0 pe-2">
                          <img
                            src={require('../../../assets/images/home1.jpg')}
                            alt=""
                            class="property-img"
                          />
                        </div>
                        <div
                          class="col-8 p-0 d-flex flex-column justify-content-between"
                        >
                          <div class="adress-data">
                            <h6 class="mb-0 black-clr fs-14 fw-500">
                              12507 Astro Ave
                            </h6>
                            <p class="mb-0 sec-clr fs-10 lh-10 fw-100">
                              Cleverland, Ohio 44135
                            </p>
                          </div>
                          <div class="irr-coc-data fs-10 d-flex">
                            <div class="irr me-3">
                              <span class="pri-clr fw-500">IRR: </span>
                              <span class="black-clr fw-500">19.9%</span>
                            </div>
                            <div class="coc">
                              <span class="pri-clr fw-500">CoC: </span>
                              <span class="black-clr fw-500">19.9%</span>
                            </div>
                          </div>
                        </div>
                        <hr class="hr-line" />
                        <div class="col-6 p-0 minimum-value-data">
                          <div class="content-left d-flex align-items-center">
                            <div class="d-flex flex-column pri-clr me-1">
                              <span class="fs-13 fw-500 min-val"> $52.86 </span>
                              <span class="fs-10 fw-500 lh-10 min-txt">
                                MINIMUM
                              </span>
                            </div>
                            <div
                              class="d-flex align-items-center p-1 success-percent-data"
                            >
                              <i
                                class="fa fa-arrow-up text-success me-1 fs-10"
                              ></i>
                              <span class="text-success fs-10"> 6.36% </span>
                            </div>
                          </div>
                        </div>
                        <div class="col-6 p-0 tokens-data">
                          <div
                            class="content-right d-flex align-items-center justify-content-end bg-white"
                          >
                            <div
                              class="d-flex flex-column align-items-end sec-clr me-1"
                            >
                              <span class="fs-13 fw-500 black-clr tokens-val">
                                5,636
                              </span>
                              <span
                                class="fs-10 fw-500 text-end sec-clr lh-10 tokens-txt"
                              >
                                TOKENS LEFT
                              </span>
                            </div>
                            <div>
                              <img
                                src="../assets/images/progress-stat.PNG"
                                alt="..."
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item border-0 p-2 mb-1">
                      <div class="row m-0">
                        <div class="col-4 p-0 pe-2">
                          <img
                            src={require('../../../assets/images/home1.jpg')}
                            alt=""
                            class="property-img"
                          />
                        </div>
                        <div
                          class="col-8 p-0 d-flex flex-column justify-content-between"
                        >
                          <div class="adress-data">
                            <h6 class="mb-0 black-clr fs-14 fw-500">
                              12507 Astro Ave
                            </h6>
                            <p class="mb-0 sec-clr fs-10 lh-10 fw-100">
                              Cleverland, Ohio 44135
                            </p>
                          </div>
                          <div class="irr-coc-data fs-10 d-flex">
                            <div class="irr me-3">
                              <span class="pri-clr fw-500">IRR: </span>
                              <span class="black-clr fw-500">19.9%</span>
                            </div>
                            <div class="coc">
                              <span class="pri-clr fw-500">CoC: </span>
                              <span class="black-clr fw-500">19.9%</span>
                            </div>
                          </div>
                        </div>
                        <hr class="hr-line" />
                        <div class="col-6 p-0 minimum-value-data">
                          <div class="content-left d-flex align-items-center">
                            <div class="d-flex flex-column pri-clr me-1">
                              <span class="fs-13 fw-500 min-val"> $52.86 </span>
                              <span class="fs-10 fw-500 lh-10 min-txt">
                                MINIMUM
                              </span>
                            </div>
                            <div
                              class="d-flex align-items-center p-1 success-percent-data"
                            >
                              <i
                                class="fa fa-arrow-up text-success me-1 fs-10"
                              ></i>
                              <span class="text-success fs-10"> 6.36% </span>
                            </div>
                          </div>
                        </div>
                        <div class="col-6 p-0 tokens-data">
                          <div
                            class="content-right d-flex align-items-center justify-content-end bg-white"
                          >
                            <div
                              class="d-flex flex-column align-items-end sec-clr me-1"
                            >
                              <span class="fs-13 fw-500 black-clr tokens-val">
                                5,636
                              </span>
                              <span
                                class="fs-10 fw-500 text-end sec-clr lh-10 tokens-txt"
                              >
                                TOKENS LEFT
                              </span>
                            </div>
                            <div>
                              <img
                                src="../assets/images/progress-stat.PNG"
                                alt="..."
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item border-0 p-2 mb-1">
                      <div class="row m-0">
                        <div class="col-4 p-0 pe-2">
                          <img
                            src={require('../../../assets/images/home1.jpg')}
                            alt=""
                            class="property-img"
                          />
                        </div>
                        <div
                          class="col-8 p-0 d-flex flex-column justify-content-between"
                        >
                          <div class="adress-data">
                            <h6 class="mb-0 black-clr fs-14 fw-500">
                              12507 Astro Ave
                            </h6>
                            <p class="mb-0 sec-clr fs-10 lh-10 fw-100">
                              Cleverland, Ohio 44135
                            </p>
                          </div>
                          <div class="irr-coc-data fs-10 d-flex">
                            <div class="irr me-3">
                              <span class="pri-clr fw-500">IRR: </span>
                              <span class="black-clr fw-500">19.9%</span>
                            </div>
                            <div class="coc">
                              <span class="pri-clr fw-500">CoC: </span>
                              <span class="black-clr fw-500">19.9%</span>
                            </div>
                          </div>
                        </div>
                        <hr class="hr-line" />
                        <div class="col-6 p-0 minimum-value-data">
                          <div class="content-left d-flex align-items-center">
                            <div class="d-flex flex-column pri-clr me-1">
                              <span class="fs-13 fw-500 min-val"> $52.86 </span>
                              <span class="fs-10 fw-500 lh-10 min-txt">
                                MINIMUM
                              </span>
                            </div>
                            <div
                              class="d-flex align-items-center p-1 success-percent-data"
                            >
                              <i
                                class="fa fa-arrow-up text-success me-1 fs-10"
                              ></i>
                              <span class="text-success fs-10"> 6.36% </span>
                            </div>
                          </div>
                        </div>
                        <div class="col-6 p-0 tokens-data">
                          <div
                            class="content-right d-flex align-items-center justify-content-end bg-white"
                          >
                            <div
                              class="d-flex flex-column align-items-end sec-clr me-1"
                            >
                              <span class="fs-13 fw-500 black-clr tokens-val">
                                5,636
                              </span>
                              <span
                                class="fs-10 fw-500 text-end sec-clr lh-10 tokens-txt"
                              >
                                TOKENS LEFT
                              </span>
                            </div>
                            <div>
                              <img
                                src="../assets/images/progress-stat.PNG"
                                alt="..."
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div class="refer-earn-info">
                    <div class="row m-0">
                      <div
                        class="col-3 col-lg-2 d-flex align-items-center justify-content-center p-0 pe-1"
                      >
                        <img
                          src="../assets/images/bonus.PNG"
                          alt="..."
                          class=""
                        />
                      </div>
                      <div
                        class="col-9 col-lg-10 d-flex flex-column align-items-start p-0"
                      >
                        <h6 class="mb-0 pri-clr fs-13 fw-bold">Refer & Earn</h6>
                        <p class="mb-0 sec-clr fs-10 fw-500">
                          Give $25, Get $25 and bonus rewards as you refer more
                          people.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
  
                {/* <!-- ends::my properties --> */}
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
  

    {/* </body> */}
  {/* </html> */}
    </React.Fragment>
  )
}

export default Dashboard