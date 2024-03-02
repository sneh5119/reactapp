import React, { useState } from 'react'

const BuyMarketPlace = () => {


    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

  return (
    <React.Fragment>
        {/* <!-- place order container --> */}
      <div
        class="container-fluid promissory-container p-2 p-sm-3 p-md-5 position-relative placeOrder-container"
      >
        <div class="row gx-0">
          <div class="col-md-7 col-lg-6">
            <div class="details h-100 me-0 me-md-4 mb-2 mb-sm-3 mb-md-0">
              <div class="header mb-2 mb-sm-3">
                <h1 class="mb-0">Place your order</h1>
                <h6 class="mb-0">51440 864th Rd, Eldridge, IA 52748</h6>
              </div>
              <div class="token-selection mb-4 mb-md-5">
                <label for="token-options" class="form-label">
                  Property token quantity
                </label>
                <div
                  class="btn-group token-options"
                  id="token-options"
                  role="group"
                >
                  <input
                    type="radio"
                    class="btn-check"
                    name="tokensRadio"
                    id="tokensRadio1"
                    autocomplete="off"
                    checked
                  />
                  <label
                    class="btn btn-outline-primary radio-btn d-flex justify-content-center"
                    for="tokensRadio1"
                  >
                    <span class="tokens-quantity">10 tokens</span>
                    <span class="tokens-price">$500</span>
                  </label>

                  <input
                    type="radio"
                    class="btn-check"
                    name="tokensRadio"
                    id="tokensRadio2"
                    autocomplete="off"
                  />
                  <label
                    class="btn btn-outline-primary radio-btn d-flex justify-content-center isPopular"
                    for="tokensRadio2"
                  >
                    <span class="tokens-quantity">25 tokens</span>
                    <span class="tokens-price">$1,200</span>
                  </label>

                  <input
                    type="radio"
                    class="btn-check"
                    name="tokensRadio"
                    id="tokensRadio3"
                    autocomplete="off"
                  />
                  <label
                    class="btn btn-outline-primary radio-btn d-flex justify-content-center"
                    for="tokensRadio3"
                  >
                    <span class="tokens-quantity">50 tokens</span>
                    <span class="tokens-price">$2,500</span>
                  </label>

                  <input
                    type="radio"
                    class="btn-check"
                    name="tokensRadio"
                    id="tokensRadio4"
                    autocomplete="off"
                  />
                  <label
                    class="btn btn-outline-primary radio-btn d-flex justify-content-center"
                    for="tokensRadio4"
                  >
                    <span class="tokens-quantity">100 tokens</span>
                    <span class="tokens-price">$5000</span>
                  </label>
                </div>
              </div>
              <div class="property-img-container">
                <img
                  src={require('../../../assets/images/property.png')}
                  alt="property-img"
                  class="property-img"
                />
              </div>
            </div>
          </div>
          <div class="col-md-5 col-lg-6">
            <div class="order-dets ms-0 ms-md-4 p-2 p-sm-3">
              <div
                class="quantity mb-2 mb-sm-3 px-2 px-sm-3 py-2 d-flex justify-content-between"
              >
                <label class="mb-0"> Custom quantity </label>
                <span class="value"> 10 </span>
              </div>
              <div class="order-select-ele payment-select mb-2 mb-sm-3">
                <label class="form-label mb-1">Payment method</label>
                <select
                  class="form-select px-2 px-sm-3 py-2"
                  aria-label="Default select example"
                >
                  <option selected value="pWallet">Promissory Wallet</option>
                  <option value="meth2">Method Two</option>
                  <option value="meth3">Method Three</option>
                  <option value="meth4">Method Four</option>
                </select>
              </div>
              <div
                class="order-select-ele payment-currency-select mb-2 mb-sm-3"
              >
                <label class="form-label mb-1">Payment currency</label>
                <select
                  class="form-select px-2 px-sm-3 py-2"
                  aria-label="Default select example"
                >
                  <option selected value="usdc">USDC</option>
                  <option value="curr2">Currency 2</option>
                  <option value="curr3">Currency 3</option>
                  <option value="curr4">Currency 4</option>
                </select>
              </div>
              <ul class="fees-list m-0 p-0 pb-3 mb-2 mb-sm-3">
                <li class="d-flex justify-content-between">
                  <label> Platform fee </label>
                  <span class="value"> $0.00 </span>
                </li>
                <li class="d-flex justify-content-between">
                  <label> Processing fee </label>
                  <span class="value"> 0.001 ALGO </span>
                </li>
              </ul>
              <div
                class="total-price d-flex align-items-center justify-content-between mb-3"
              >
                <label> Total </label>
                <span class="value d-flex flex-column text-end">
                  $500.00
                  <span class="tot-curr-val">
                    500.00<span class="currency-val">USDC</span>
                  </span>
                </span>
              </div>
              <button class="btn promissory-btn preview-order-btn" onClick={toggleModal}>
                Preview Order
              </button>
            </div>
          </div>
        </div>
      </div>

      
      {/* <!-- price history and order book modal --> */}
    {/* <div
    id='opennn'
      class="modal fade promissory-modal price-history__orderModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      
    </div> */}
    {/* <!-- ends::price history and order book modal --> */}
    <div className="App">
            {showModal && (
                <div className="modal fade show d-block promissory-modal price-history__orderModal" tabIndex="-1" aria-hidden="true" >
                    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title sec-clr pe-2">Price history & order book</h5>
            <div class="close-btns d-flex">
              <button
                class="btn promissory-btn share-btn d-flex align-items-center me-2"
              >
                <img
                  src={require('../../../assets/images/share.svg')}
                  alt="share img"
                  class="me-1"
                />
                <span> Share </span>
              </button>
              <button
                class="btn promissory-white-btn close-btn pri-clr d-flex align-items-center"
                data-bs-dismiss="modal"
                onClick={toggleModal}
              >
                <img
                  src={require('../../../assets/images/close.svg')}
                  alt="close img"
                  class="me-1"
                />
                Close
              </button>
            </div>
          </div>
          <div class="modal-body">
            <div class="banner-with-graph">
              <div class="row">
                <div class="col-4">
                  <div class="banner-img h-100 d-flex align-items-center">
                    <img
                      src={require('../../../assets/images/tuy.svg')}
                      alt="banner image"
                      class="banner-img"
                    />
                  </div>
                </div>
                <div class="col-8">
                  <div class="price-graph h-100 d-flex align-items-center">
                    {/* <!-- add graph here --> */}
                    <img
                      src={require('../../../assets/images/order-graph-img.PNG')}
                      alt="order graph img"
                    />
                    {/* <!-- ends::add graph here --> */}
                  </div>
                </div>
              </div>
            </div>

            <div class="price-history-stats">
              <div class="row gx-2 gy-2 gy-sm-0">
                <div class="col-6 col-sm-3">
                  <div
                    class="price-info p-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-custom-class="promissory-tooltip"
                    data-bs-title="This is the price per token of the most recently filled order"
                  >
                    <span class="title">Last trade</span>
                    <h6 class="currency-price">
                      $<span class="price">36.00</span>
                    </h6>
                    <span class="title">Last traded value</span>
                  </div>
                </div>
                <div class="col-6 col-sm-3">
                  <div
                    class="price-info p-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-custom-class="promissory-tooltip"
                    data-bs-title="This is the price per token of the most recently filled order"
                  >
                    <span class="title">Estimated value</span>
                    <h6 class="currency-price">
                      $<span class="price">49.69</span>
                    </h6>
                    <span class="title">Housecanary</span>
                  </div>
                </div>
                <div class="col-6 col-sm-3">
                  <div
                    class="price-info p-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-custom-class="promissory-tooltip"
                    data-bs-title="This is the price per token of the most recently filled order"
                  >
                    <span class="title">Trade volume</span>
                    <h6 class="currency-price">
                      $<span class="price">2,406</span>
                    </h6>
                    <span class="title">Last 4 weeks</span>
                  </div>
                </div>
                <div class="col-6 col-sm-3">
                  <div
                    class="price-info p-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-custom-class="promissory-tooltip"
                    data-bs-title="This is the price per token of the most recently filled order"
                  >
                    <span class="title">Market cap</span>
                    <h6 class="currency-price">
                      $<span class="price">336,202</span>
                    </h6>
                    <span class="title">6,762 tokens</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="open-orders-info">
              <h6 class="title mb-1">Open orders</h6>
              <div class="order-tables">
                <div class="row g-0">
                  <div class="col-6">
                    <div class="table-container order-table-container h-100">
                      <table class="table table-borderless mb-0">
                        <thead>
                          <tr>
                            <th scope="col">Price (USD)</th>
                            <th scope="col">Buy order</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>38.00</td>
                            <td>1 Token</td>
                          </tr>
                          <tr>
                            <td>35.13</td>
                            <td>3 Tokens</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="table-container h-100">
                      <table class="table table-borderless mb-0">
                        <thead>
                          <tr>
                            <th scope="col">Price (USD)</th>
                            <th scope="col">Sell order</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>40.00</td>
                            <td>27 Tokens</td>
                          </tr>
                          <tr>
                            <td>48.13</td>
                            <td>8 Tokens</td>
                          </tr>
                          <tr>
                            <td>49.10</td>
                            <td>5 Tokens</td>
                          </tr>
                          <tr>
                            <td>40.00</td>
                            <td>27 Tokens</td>
                          </tr>
                          <tr>
                            <td>48.13</td>
                            <td>8 Tokens</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="recent-filled-orders-info">
              <h6 class="title mb-1">Recently filled orders</h6>
              <div class="filled-orders-table">
                <div class="table-container order-table-container h-100">
                  <table class="table table-borderless table-striped mb-0">
                    <thead>
                      <tr>
                        <th scope="col">Filled</th>
                        <th scope="col" class="text-center">Size</th>
                        <th scope="col">Transacted Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>July 30</td>
                        <td class="text-center">1 Token</td>
                        <td>40.00</td>
                      </tr>
                      <tr>
                        <td>July 29</td>
                        <td class="text-center">2 Token</td>
                        <td>38.00</td>
                      </tr>
                      <tr>
                        <td>July 27</td>
                        <td class="text-center">3 Token</td>
                        <td>40.00</td>
                      </tr>
                      <tr>
                        <td>July 18</td>
                        <td class="text-center">1 Token</td>
                        <td>30.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <p class="orders-count-note text-center pb-0">
              Only showing 11 most recent orders
            </p>
          </div>
        </div>
      </div>
                </div>
            )}
        </div>

    </React.Fragment>
  )
}

export default BuyMarketPlace