import React from 'react';
import '../marketPlace/MarketPlace.scss';
import { useNavigate, useParams } from 'react-router-dom';

const ViewLoan = () => {
    const { id } = useParams();
    const navigate = useNavigate();
  const navigateRoute = () => {
    return navigate('/promissory/buy-market-place/'+id);
  };
  return (
    <React.Fragment>
        <div
        class="container-fluid promissory-container p-0 position-relative marketPlace-container">
            {/* <!-- property title --> */}
        <div class="row m-0 module-header ms-2 ms-sm-3 me-2 me-sm-0">
          <div class="col-12 col-sm-7 col-md-7 col-lg-8 col-xl-9 p-0">
          <div
              class="module-title h-100 pt-1 pt-sm-3 pe-0 pe-sm-3 d-flex flex-column justify-content-end property-title"
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
          </div>
        {/* <!-- property-detials --> */}
        <div class="property-details mt-2 mt-sm-3">
          <div class="row mx-2 mx-sm-0 my-0">
            <div class="col-sm-12 col-md-9 col-xl-8 info-col">
              {/* <!-- highlights --> */}
              <div class="property-highlights">
                <div class="row gx-2">
                  <div class="col-2">
                    <div class="highlighter">
                      <img src={require('../../../assets/images/acres.PNG')} alt="acres" />
                      <span class="value"> 10.66 Acres </span>
                    </div>
                  </div>
                  <div class="col-2">
                    <div class="highlighter">
                      <img src={require('../../../assets/images/sq_ft.PNG')} alt="home" />
                      <span class="value"> 1,234 Sq Ft </span>
                    </div>
                  </div>
                  <div class="col-2">
                    <div class="highlighter">
                      <img src={require('../../../assets/images/beds.PNG')} alt="bed" />
                      <span class="value"> 3 Beds </span>
                    </div>
                  </div>
                  <div class="col-2">
                    <div class="highlighter">
                      <img src={require('../../../assets/images/baths.PNG')} alt="bath" />
                      <span class="value"> 3 Baths </span>
                    </div>
                  </div>
                  <div class="col-2">
                    <div class="highlighter">
                      <img src={require('../../../assets/images/family.PNG')} alt="family" />
                      <span class="value"> Single Family </span>
                    </div>
                  </div>
                  <div class="col-2 border-end-0">
                    <div class="highlighter flex-row justify-content-evenly">
                      <img
                        src={require('../../../assets/images/favourite.PNG')}
                        alt="fav"
                        class="favourite"
                      />
                      <img
                        src={require('../../../assets/images/share.PNG')}
                        alt="share"
                        class="share"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- ends::highlights -->
              <!-- token rates --> */}
              <div class="token-graph mt-4">
                <h5 class="title">
                  Price Per Token <span class="info">(30D)</span>
                </h5>
                <div class="graph-container py-4">
                  {/* <!-- add graph code --> */}
                  <img
                    src={require('../../../assets/images/token-graph.PNG')}
                    alt="token graph"
                  />
                  {/* <!-- ends::graph code --> */}
                </div>
              </div>
              {/* <!-- ends::token rates -->
              <!-- more info tabs --> */}
              <div class="property-info my-2 my-md-4 display-tab-desktop">
                <ul
                  class="nav nav-tabs propertyInfoTabs"
                  id="propertyInfoTab"
                  role="tablist"
                >
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link active"
                      id="details-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#details-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="details-tab-pane"
                      aria-selected="true"
                    >
                      details
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="finance-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#finance-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="finance-tab-pane"
                      aria-selected="false"
                    >
                      financials
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="documents-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#documents-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="documents-tab-pane"
                      aria-selected="false"
                    >
                      documents
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="buying-process-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#buying-process-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="buying-process-tab-pane"
                      aria-selected="false"
                    >
                      buying process
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="market-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#market-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="market-tab-pane"
                      aria-selected="false"
                    >
                      market
                    </button>
                  </li>
                </ul>
                <div class="tab-content" id="propertyInfoTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="details-tab-pane"
                    role="tabpanel"
                    aria-labelledby="details-tab"
                    tabindex="0"
                  >
                    <div class="tab-info">
                      <h6 class="title pb-1 mb-4">About the Property</h6>
                      <p class="highlighted-para">
                        Property originally listed for sale on the marketplace
                        by HH Eldridge LLC.
                      </p>
                      <p>
                        <span
                          ><a
                            href="https://www.lipsum.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            >Click here
                          </a></span
                        >
                        to learn more about how third parties sell their
                        properties on the Lofty Marketplace.
                      </p>
                      <h6 class="sub-title mt-5 mb-3">
                        Strip Mall with McDonalds & Dominos Pizza in Quad
                        Cities, lowa
                      </h6>
                      <p>
                        <span>
                          <a
                            href="https://www.lipsum.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Click here to view drone footage of the property
                          </a>
                        </span>
                      </p>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                      </p>
                      <ul>
                        <li>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </li>
                        <li>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout.
                        </li>
                        <li>
                          Lorem Ipsum has been the industry's standard dummy
                          text ever since the 1500s.
                        </li>
                        <li>
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </li>
                      </ul>
                      <h6 class="sub-title mt-5 mb-3">
                        Near new Amazon project
                      </h6>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                      <h6 class="sub-title mt-5 mb-3">Big Anchor Tenants</h6>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                      <h6 class="sub-title mt-5 mb-3">
                        1 min from major highway
                      </h6>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                      <h6 class="sub-title mt-5 mb-3">
                        Refer to the 'Documents' tab above to view the following
                        information:
                      </h6>
                      <ul>
                        <li>Rent Roll & Lease Terms</li>
                        <li>Inspection Report</li>
                        <li>Purchase Contract</li>
                        <li>Operating Expenses</li>
                        <li>Comparable Properties</li>
                        <li>Building Improvements</li>
                        <li>Pest Report</li>
                      </ul>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="finance-tab-pane"
                    role="tabpanel"
                    aria-labelledby="finance-tab"
                    tabindex="0"
                  >
                    <div class="tab-info">
                      <h6 class="title pb-1 mb-4">
                        FINANCIALS --- Refer to the 'Documents' tab above to
                        view the following information:
                      </h6>
                      <ul>
                        <li>Rent Roll & Lease Terms</li>
                        <li>Inspection Report</li>
                        <li>Purchase Contract</li>
                        <li>Operating Expenses</li>
                        <li>Comparable Properties</li>
                        <li>Building Improvements</li>
                        <li>Pest Report</li>
                      </ul>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="documents-tab-pane"
                    role="tabpanel"
                    aria-labelledby="documents-tab"
                    tabindex="0"
                  >
                    <div class="tab-info">
                      <h6 class="title pb-1 mb-4">
                        DOCUMENTS --- Refer to the 'Documents' tab above to view
                        the following information:
                      </h6>
                      <ul>
                        <li>Rent Roll & Lease Terms</li>
                        <li>Inspection Report</li>
                        <li>Purchase Contract</li>
                        <li>Operating Expenses</li>
                        <li>Comparable Properties</li>
                        <li>Building Improvements</li>
                        <li>Pest Report</li>
                      </ul>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="buying-process-tab-pane"
                    role="tabpanel"
                    aria-labelledby="buying-process-tab"
                    tabindex="0"
                  >
                    <div class="tab-info">
                      <h6 class="title pb-1 mb-4">
                        BUYING PROCESS --- Refer to the 'Documents' tab above to
                        view the following information:
                      </h6>
                      <ul>
                        <li>Rent Roll & Lease Terms</li>
                        <li>Inspection Report</li>
                        <li>Purchase Contract</li>
                        <li>Operating Expenses</li>
                        <li>Comparable Properties</li>
                        <li>Building Improvements</li>
                        <li>Pest Report</li>
                      </ul>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="market-tab-pane"
                    role="tabpanel"
                    aria-labelledby="market-tab"
                    tabindex="0"
                  >
                    <div class="tab-info">
                      <h6 class="title pb-1 mb-4">
                        MARKET --- Refer to the 'Documents' tab above to view
                        the following information:
                      </h6>
                      <ul>
                        <li>Rent Roll & Lease Terms</li>
                        <li>Inspection Report</li>
                        <li>Purchase Contract</li>
                        <li>Operating Expenses</li>
                        <li>Comparable Properties</li>
                        <li>Building Improvements</li>
                        <li>Pest Report</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="property-info my-2 my-md-4 display-mobile d-none">
                <div
                  class="accordion promissory-accordion"
                  id="property-info-accordion"
                >
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="detailsHeader">
                      <button
                        class="accordion-button text-uppercase"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#detailsCollapse"
                        aria-expanded="true"
                        aria-controls="detailsCollapse"
                      >
                        details
                      </button>
                    </h2>
                    <div
                      id="detailsCollapse"
                      class="accordion-collapse collapse show"
                      aria-labelledby="detailsHeader"
                      data-bs-parent="#property-info-accordion"
                    >
                      <div class="accordion-body p-0">
                        <div class="tab-info">
                          <h6 class="title pb-1 mb-2">About the Property</h6>
                          <p class="highlighted-para">
                            Property originally listed for sale on the
                            marketplace by HH Eldridge LLC.
                          </p>
                          <p>
                            <span
                              ><a
                                href="https://www.lipsum.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                >Click here
                              </a></span
                            >
                            to learn more about how third parties sell their
                            properties on the Lofty Marketplace.
                          </p>
                          <h6 class="sub-title mt-2 mb-1">
                            Strip Mall with McDonalds & Dominos Pizza in Quad
                            Cities, lowa
                          </h6>
                          <p>
                            <span>
                              <a
                                href="https://www.lipsum.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Click here to view drone footage of the property
                              </a>
                            </span>
                          </p>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged.
                          </p>
                          <ul>
                            <li>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry.
                            </li>
                            <li>
                              It is a long established fact that a reader will
                              be distracted by the readable content of a page
                              when looking at its layout.
                            </li>
                            <li>
                              Lorem Ipsum has been the industry's standard dummy
                              text ever since the 1500s.
                            </li>
                            <li>
                              when an unknown printer took a galley of type and
                              scrambled it to make a type specimen book.
                            </li>
                          </ul>
                          <h6 class="sub-title mt-2 mb-1">
                            Near new Amazon project
                          </h6>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </p>
                          <h6 class="sub-title mt-2 mb-1">
                            Big Anchor Tenants
                          </h6>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </p>
                          <h6 class="sub-title mt-2 mb-1">
                            1 min from major highway
                          </h6>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </p>
                          <h6 class="sub-title mt-2 mb-1">
                            Refer to the 'Documents' tab above to view the
                            following information:
                          </h6>
                          <ul>
                            <li>Rent Roll & Lease Terms</li>
                            <li>Inspection Report</li>
                            <li>Purchase Contract</li>
                            <li>Operating Expenses</li>
                            <li>Comparable Properties</li>
                            <li>Building Improvements</li>
                            <li>Pest Report</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="financialsHeader">
                      <button
                        class="accordion-button collapsed text-uppercase"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#financialsCollapse"
                        aria-expanded="false"
                        aria-controls="financialsCollapse"
                      >
                        financials
                      </button>
                    </h2>
                    <div
                      id="financialsCollapse"
                      class="accordion-collapse collapse"
                      aria-labelledby="financialsHeader"
                      data-bs-parent="#property-info-accordion"
                    >
                      <div class="accordion-body p-0">
                        <div class="tab-info">
                          <h6 class="sub-title mt-2 mb-1">
                            This is the FINANCIALS item's accordion body.
                          </h6>
                          <p>
                            It is hidden by default, until the collapse plugin
                            adds the appropriate classes that we use to style
                            each element. These classes control the overall
                            appearance, as well as the showing and hiding via
                            CSS transitions. You can modify any of this with
                            custom CSS or overriding our default variables. It's
                            also worth noting that just about any HTML can go
                            within the
                            <code>.accordion-body</code>, though the transition
                            does limit overflow.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="documentsHeader">
                      <button
                        class="accordion-button collapsed text-uppercase"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#documentsCollapse"
                        aria-expanded="false"
                        aria-controls="documentsCollapse"
                      >
                        documents
                      </button>
                    </h2>
                    <div
                      id="documentsCollapse"
                      class="accordion-collapse collapse"
                      aria-labelledby="documentsHeader"
                      data-bs-parent="#property-info-accordion"
                    >
                      <div class="accordion-body p-0">
                        <div class="tab-info">
                          <h6 class="sub-title mt-2 mb-1">
                            This is the DOCUMENTS item's accordion body.
                          </h6>
                          <p>
                            It is hidden by default, until the collapse plugin
                            adds the appropriate classes that we use to style
                            each element. These classes control the overall
                            appearance, as well as the showing and hiding via
                            CSS transitions. You can modify any of this with
                            custom CSS or overriding our default variables. It's
                            also worth noting that just about any HTML can go
                            within the
                            <code>.accordion-body</code>, though the transition
                            does limit overflow.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="buyingProcessHeader">
                      <button
                        class="accordion-button collapsed text-uppercase"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#buyingProcessCollapse"
                        aria-expanded="false"
                        aria-controls="buyingProcessCollapse"
                      >
                        buying Process
                      </button>
                    </h2>
                    <div
                      id="buyingProcessCollapse"
                      class="accordion-collapse collapse"
                      aria-labelledby="buyingProcessHeader"
                      data-bs-parent="#property-info-accordion"
                    >
                      <div class="accordion-body p-0">
                        <div class="tab-info">
                          <h6 class="sub-title mt-2 mb-1">
                            This is the BUYING PROCESS item's accordion body.
                          </h6>
                          <p>
                            It is hidden by default, until the collapse plugin
                            adds the appropriate classes that we use to style
                            each element. These classes control the overall
                            appearance, as well as the showing and hiding via
                            CSS transitions. You can modify any of this with
                            custom CSS or overriding our default variables. It's
                            also worth noting that just about any HTML can go
                            within the
                            <code>.accordion-body</code>, though the transition
                            does limit overflow.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="marketHeader">
                      <button
                        class="accordion-button collapsed text-uppercase"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#marketCollapse"
                        aria-expanded="false"
                        aria-controls="marketCollapse"
                      >
                        market
                      </button>
                    </h2>
                    <div
                      id="marketCollapse"
                      class="accordion-collapse collapse"
                      aria-labelledby="marketHeader"
                      data-bs-parent="#property-info-accordion"
                    >
                      <div class="accordion-body p-0">
                        <div class="tab-info">
                          <h6 class="sub-title mt-2 mb-1">
                            This is the MARKET item's accordion body.
                          </h6>
                          <p>
                            It is hidden by default, until the collapse plugin
                            adds the appropriate classes that we use to style
                            each element. These classes control the overall
                            appearance, as well as the showing and hiding via
                            CSS transitions. You can modify any of this with
                            custom CSS or overriding our default variables. It's
                            also worth noting that just about any HTML can go
                            within the
                            <code>.accordion-body</code>, though the transition
                            does limit overflow.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- ends::more info tabs --> */}
            </div>
            <div class="col-sm-12 col-md-3 col-xl-4 carousel-col">
              <div class="property-carousel-card">
                <div
                  id="propertyCarouselControls"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src={require('../../../assets/images/carousel-1.PNG')}
                        class="d-block w-100"
                        alt="property"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src={require('../../../assets/images/carousel-2.PNG')}
                        class="d-block w-100"
                        alt="property"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src={require('../../../assets/images/carousel-1.PNG')}
                        class="d-block w-100"
                        alt="property"
                      />
                    </div>
                    <a
                      href="https://www.lipsum.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="view-all-anchor text-center w-100 px-1"
                    >
                      View All Pictures
                    </a>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#propertyCarouselControls"
                    data-bs-slide="prev"
                  >
                    <span class="carousel-control-prev-icon" aria-hidden="true">
                      <span>
                        <i
                          class="fa fa-arrow-circle-left left-arrow"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#propertyCarouselControls"
                    data-bs-slide="next"
                  >
                    <span class="carousel-control-next-icon" aria-hidden="true">
                      <span>
                        <i
                          class="fa fa-arrow-circle-right right-arrow"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
                <div class="rate-and-tokens">
                  <div class="content-left d-flex flex-column">
                    <h6 class="title mb-0">Starting at</h6>
                    <span class="value pri-clr"
                      >$ <span class="rate">50.00</span></span
                    >
                  </div>
                  <div class="content-right d-flex align-items-center">
                    <div class="tokens-info text-end d-flex flex-column me-1">
                      <span class="value fs-14">5,636</span>
                      <h6 class="title text-uppercase mb-0">tokens left</h6>
                    </div>
                    {/* <!-- add graph below --> */}
                    <img
                      src={require('../../../assets/images/progress-graph.PNG')}
                      alt="progress"
                      class="progress-graph"
                    />
                  </div>
                </div>
                <div class="property-stats">
                  <ul class="p-0 m-0">
                    <li>
                      <span class="title pe-1">Projected Annual Return</span>
                      <span class="value">5.7%</span>
                    </li>
                    <li>
                      <span class="title pe-1">Projected Rental Yield</span>
                      <span class="value">6.3%</span>
                    </li>
                    <li>
                      <span class="title pe-1">rental Yield</span>
                      <span class="value">1.5%</span>
                    </li>
                  </ul>
                </div>
                <div class="sell-buy-btns">
                  <button
                    class="btn text-uppercase pri-clr promissory-white-btn sell-btn"
                  >
                    sell
                  </button>
                  <button class="btn text-uppercase promissory-btn buy-btn" onClick={navigateRoute}>
                    buy
                  </button>
                </div>
                <div class="view-order-book">
                  <button
                    class="btn text-uppercase promissory-trnsprnt-btn view-order-book-btn"
                  >
                    View Order Book
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </React.Fragment>
  )
}

export default ViewLoan