import React, { useEffect } from 'react'
import environment from '../../../environemnt';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const NoteTerms = () => {
  const { propertyId } = useParams();
  console.log("propertyId", propertyId);
  const navigate = useNavigate();
  const [propertyDetailResponseData, propertyDetailSetResponseData] = useState(null);
  const getPropertyDetails = async (formValue) => {
    try {
      const response = await axios.get(`${environment.baseUrlAuthenticated}/loan`, {
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('user-token')
          // Add other headers here
        }
      });

      propertyDetailSetResponseData(propertyDetailResponseData.data);
      console.log("response.data", propertyDetailResponseData.data);
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  const [performanceResponseData, setPerformanceResponseData] = useState(null);
  const getPerformanceValues = async () => {
    try {
      const response = await axios.get(environment.baseUrl + '/v1/lookup/performances', {
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('user-token')
          // Add other headers here
        }
      });
      console.log("response of getPerformanceValues", response.data);
      setPerformanceResponseData(response.data);
    } catch (error) {

    }
  }

  const [noteTypeResponseData, setNoteTypeResponseData] = useState(null);
  const getNoteType = async () => {
    try {
      const response = await axios.get(environment.baseUrl + '/v1/lookup/notetypes', {
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('user-token')
          // Add other headers here
        }
      });
      console.log("response of getNoteType", response.data);
      setNoteTypeResponseData(response.data);
    } catch (error) {

    }
  }

  const [legalStatusResponseData, setLegalStatusResponseData] = useState(null);
  const legalstatuses = async () => {
    try {
      const response = await axios.get(environment.baseUrl + '/v1/lookup/legalstatuses', {
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('user-token')
          // Add other headers here
        }
      });
      console.log("response of legalstatuses", response.data);
      setLegalStatusResponseData(response.data);
    } catch (error) {

    }
  }

  useEffect(() => {
    getPropertyDetails();
    getPerformanceValues();
    getNoteType();
    legalstatuses();
  }, []);

  const [formData, setFormData] = useState({
    lienPosition: '',
    performance: '',
    noteType: '',
    legalStatus: '',
    hardestHitFundState: '',
    judicialState: '',
    nonJudicialState: '',
    paymentsRemaining: '',
    loanToValue: '',
    originationDate: '',
    originalBalance: '',
    totalPayoff: '',
    paymentRemaining: '',
    interestRate: '',
    interestOnlyLoan: '',
    principalInterestPayment: '',
    escrowImpounds: '',
    totalMonthlyLoanPayment: '',
    accuredLateCharges: '',
    lastPaymentReceivedDate: '',
    nextPaymentDate: '',
    maturityDate: '',
    property:'',
  });

  // Error state
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;

    const inputValue = type === "checkbox" ? checked : value;

    setFormData(prevState => ({
      ...prevState,
      [name]: inputValue
    }));
    // Clear error message for a field when it's changed
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: ''
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    // Validate fields
    // for (const field in formData) {
    //   if (!formData[field]) {
    //     errors[field] = 'This field is required';
    //   }
    // }

    // // If errors exist, set them and exit
    // if (Object.keys(errors).length > 0) {
    //  console.log("errors",errors);
    //   setFormErrors(errors);
    //   return;
    // }

    console.log(formData);
    // Here you can send `formData` to an API or handle it according to your needs
    postData(formData);
  };

  const postData = async (formValue) => {
    const payload = {
      ...formValue,
      lienPosition: +(formValue?.lienPosition),
      property: {
        id: propertyId
      },
      performance: {
        id: formValue?.performance
      },
      noteType: {
        id: formValue?.noteType
      },
      legalStatus: {
        id: formValue?.legalStatus
      }
    }
    try {
      const response = await axios.post(`${environment.baseUrl}/v1/property/propertynoteterm`, {
        ...payload
      }, {
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('user-token')
        }
      });
      console.log("response.data", response.data);
      return navigate(`/promissory/valuation/`+propertyId);
    } catch (error) {
      console.error("There was an error!", error?.errorMessage);
      alert('ERROR');
    }
  };

  return (
    <React.Fragment>
      <div class="note-terms-form form-container">
        <div class="loan-form px-2 px-sm-5 pt-3">
          <h6
            class="title text-uppercase px-2 py-1 mt-2 mt-sm-4 mb-1 mb-sm-2"
          >
            legal information
          </h6>
          <form onSubmit={handleSubmit}>
            <div class="row">
              <div class="col-12 col-sm-3">
                <div class="mb-2 mb-sm-3">
                  <label
                    for="lien-position"
                    class="form-label sec-clr fs-10 fw-500 mb-0 text-uppercase"
                  >
                    lien position
                  </label>
                  {/* <input
                        type="text"
                        class="form-control black-clr promissory-input fs-12 fw-500"
                        value="1"
                        id="lien-position"
                      /> */}
                  <select
                    class="form-select black-clr promissory-select fs-12 fw-500"
                    id="lienPosition"
                    name="lienPosition"
                    value={formData.lienPosition}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option value="1">1st</option>
                    <option value="2">2nd</option>
                    <option value="3">3rd</option>
                  </select>
                </div>
              </div>
              <div class="col-12 col-sm-3">
                <div class="mb-2 mb-sm-3">
                  <label
                    for="performance"
                    class="form-label sec-clr fs-10 fw-500 mb-0 text-uppercase"
                  >
                    performance (pl/npl)
                  </label>
                  <select
                    class="form-select black-clr promissory-select fs-12 fw-500"
                    id="performance"
                    name="performance"
                    value={formData.performance}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    {performanceResponseData?.map((ele)=> <option value={ele?.id}>{ele?.performance}</option>)}
                  </select>
                </div>
              </div>
              <div class="col-12 col-sm-3">
                <div class="mb-2 mb-sm-3">
                  <label
                    for="noteType"
                    class="form-label sec-clr fs-10 fw-500 mb-0 text-uppercase"
                  >
                    note type
                  </label>
                  <select
                    class="form-select black-clr promissory-select fs-12 fw-500"
                    id='noteType'
                    name="noteType"
                    value={formData.noteType}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    {noteTypeResponseData?.map(ele=><option value={ele?.id}>{ele?.noteType}</option>)}
                  </select>
                </div>
              </div>
              <div class="col-12 col-sm-3">
                <div class="mb-2 mb-sm-3">
                  <label
                    for="legalStatus"
                    class="form-label sec-clr fs-10 fw-500 mb-0 text-uppercase"
                  >
                    legal status
                  </label>
                  <select
                    class="form-select black-clr promissory-select fs-12 fw-500"
                    id='legalStatus'
                    name="legalStatus"
                    value={formData.legalStatus}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    {legalStatusResponseData?.map(ele=><option value={ele?.id}>{ele?.legalStatus}</option>)}

                  </select>
                </div>
              </div>

              <div class="col-12 col-sm-3">
                <div class="mb-2 mb-sm-3">
                  <label
                    for="hit-fund-state"
                    class="form-label sec-clr fs-10 fw-500 mb-0 text-uppercase"
                  >
                    hardest hit fund state
                  </label>
                  <span class="switch" id="hit-fund-state">
                    <input
                      type="checkbox"
                      id='hardestHitFundState'
                      name='hardestHitFundState'
                      checked={formData.hardestHitFundState}
                      onChange={handleChange}
                    />
                    <label for="hit-fund-state-switcher"></label>
                  </span>
                </div>
              </div>
              <div class="col-12 col-sm-3">
                <div class="mb-2 mb-sm-3">
                  <label
                    for="judicial-state"
                    class="form-label sec-clr fs-10 fw-500 mb-0 text-uppercase"
                  >
                    judicial state
                  </label>
                  <span class="switch" id="judicial-state">
                    <input
                      type="checkbox"
                      id='judicialState'
                      name='judicialState'
                      checked={formData.judicialState}
                      onChange={handleChange}

                    />
                    <label for="judicial-state-switcher"></label>
                  </span>
                </div>
              </div>
              <div class="col-12 col-sm-3">
                <div class="mb-2 mb-sm-3">
                  <label
                    for="non-judicial-state"
                    class="form-label sec-clr fs-10 fw-500 mb-0 text-uppercase"
                  >
                    non-judicial state
                  </label>
                  <span class="switch" id="non-judicial-state">
                    <input
                      type="checkbox"
                      id='nonJudicialState'
                      name='nonJudicialState'
                      checked={formData.nonJudicialState}
                      onChange={handleChange}
                    />
                    <label for="non-judicial-state-switcher"></label>
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div class="loan-form px-2 px-sm-5">
          <h6
            class="title text-uppercase px-2 py-1 mt-2 mt-sm-4 mb-1 mb-sm-2"
          >
            loan information
          </h6>
          <form onSubmit={handleSubmit}>
            <div class="row">
              <div class="col-12 col-sm-3">
                <div class="mb-2 mb-sm-3">
                  <label
                    for="unpd-princpl-bal"
                    class="form-label sec-clr fs-10 fw-500 mb-0 text-uppercase"
                  >
                    UNPAID PRINCIPAL BALANCE
                  </label>
                  <input
                    type="text"
                    class="form-control black-clr promissory-input fs-12 fw-500"
                    id='paymentsRemaining'
                    name='paymentsRemaining'
                    value={formData.paymentsRemaining }
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div class="col-12 col-sm-3">
                <div class="mb-2 mb-sm-3 focus-placeholder">
                  <label
                    for="ln-to-val"
                    class="form-label sec-clr fs-10 fw-500 mb-0 text-uppercase"
                  >
                    loan to value
                  </label>
                  <input
                    type="text"
                    class="form-control black-clr promissory-input fs-12 fw-500"
                    id='loanToValue'
                    name='loanToValue'
                    value={formData.loanToValue}
                    onChange={handleChange}
                    placeholder="Enter Value"
                  />
                </div>
              </div>
              <div class="col-12 col-sm-3">
                <div class="mb-2 mb-sm-3">
                  <label
                    for="original-dt"
                    class="form-label sec-clr fs-10 fw-500 mb-0 text-uppercase"
                  >
                    original date
                  </label>
                  <input
                    type="date"
                    class="form-control black-clr promissory-input fs-12 fw-500"
                    id='originationDate'
                    name='originationDate'
                    value={formData.originationDate}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div class="col-12 col-sm-3">
                <div class="mb-2 mb-sm-3">
                  <label
                    for="original-bln"
                    class="form-label sec-clr fs-10 fw-500 mb-0 text-uppercase"
                  >
                    original balance
                  </label>
                  <input
                    type="text"
                    class="form-control black-clr promissory-input fs-12 fw-500"
                    id='originalBalance'
                    name='originalBalance'
                    value={formData.originalBalance}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div class="col-12 col-sm-3">
                <div class="mb-2 mb-sm-3">
                  <label
                    for="ttl-payoff"
                    class="form-label sec-clr fs-10 fw-500 mb-0 text-uppercase"
                  >
                    total payoff
                  </label>
                  <input
                    type="text"
                    class="form-control black-clr promissory-input fs-12 fw-500"
                    id='totalPayoff'
                    name='totalPayoff'
                    value={formData.totalPayoff}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div class="col-12 col-sm-3">
                <div class="mb-2 mb-sm-3">
                  <label
                    for="payments-rmng"
                    class="form-label sec-clr fs-10 fw-500 mb-0 text-uppercase"
                  >
                    payments remaining
                  </label>
                  <input
                    type="text"
                    class="form-control black-clr promissory-input fs-12 fw-500"
                    id='paymentRemaining'
                    name='paymentRemaining'
                    value={formData.paymentRemaining}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div class="col-12 col-sm-3">
                <div class="mb-2 mb-sm-3">
                  <label
                    for="intrst-rate"
                    class="form-label sec-clr fs-10 fw-500 mb-0 text-uppercase"
                  >
                    interest rate
                  </label>
                  <input
                    type="text"
                    class="form-control black-clr promissory-input fs-12 fw-500"
                    id='interestRate'
                    name='interestRate'
                    value={formData.interestRate}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div class="col-12 col-sm-3">
                <div class="mb-2 mb-sm-3">
                  <label
                    for="intrst-only-loan"
                    class="form-label sec-clr fs-10 fw-500 mb-0 text-uppercase"
                  >
                    interest-only loan
                  </label>
                  <span class="switch" id="intrst-only-loan">
                    <input
                      type="checkbox"
                      id='interestOnlyLoan'
                      name='interestOnlyLoan'
                      checked={formData.interestOnlyLoan}
                      onChange={handleChange}
                    />
                    <label for="intrst-only-loan-switcher"></label>
                  </span>
                </div>
              </div>

              <div class="col-12 col-sm-3">
                <div class="mb-2 mb-sm-3">
                  <label
                    for="prncpl-intrst-pymnt"
                    class="form-label sec-clr fs-10 fw-500 mb-0 text-uppercase"
                  >
                    principal and interest payment
                  </label>
                  <input
                    type="text"
                    class="form-control black-clr promissory-input fs-12 fw-500"
                    id='principalInterestPayment'
                    name='principalInterestPayment'
                    value={formData.principalInterestPayment}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div class="col-12 col-sm-3">
                <div class="mb-2 mb-sm-3">
                  <label
                    for="impounds"
                    class="form-label sec-clr fs-10 fw-500 mb-0 text-uppercase"
                  >
                    ESCROW/IMPOUNDS
                  </label>
                  <input
                    type="text"
                    class="form-control black-clr promissory-input fs-12 fw-500"
                    id='escrowImpounds'
                    name='escrowImpounds'
                    value={formData.escrowImpounds}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div class="col-12 col-sm-3">
                <div class="mb-2 mb-sm-3">
                  <label
                    for="monthly-lon-pymnt"
                    class="form-label sec-clr fs-10 fw-500 mb-0 text-uppercase"
                  >
                    TOTAL MONTHLY LOAN PAYMENT
                  </label>
                  <input
                    type="text"
                    class="form-control black-clr promissory-input fs-12 fw-500"
                    id='totalMonthlyLoanPayment'
                    name='totalMonthlyLoanPayment'
                    value={formData.totalMonthlyLoanPayment}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div class="col-12 col-sm-3">
                <div class="mb-2 mb-sm-3">
                  <label
                    for="late-chrgs"
                    class="form-label sec-clr fs-10 fw-500 mb-0 text-uppercase"
                  >
                    accured late charges
                  </label>
                  <input
                    type="text"
                    class="form-control black-clr promissory-input fs-12 fw-500"
                    id='accuredLateCharges'
                    name='accuredLateCharges'
                    value={formData.accuredLateCharges}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div class="col-12 col-sm-3">
                <div class="mb-2 mb-sm-3">
                  <label
                    for="lst-paymnt-rcvd-dt"
                    class="form-label sec-clr fs-10 fw-500 mb-0 text-uppercase"
                  >
                    last payment received date
                  </label>
                  <input
                    type="date"
                    class="form-control black-clr promissory-input fs-12 fw-500"
                    id='lastPaymentReceivedDate'
                    name='lastPaymentReceivedDate'
                    value={formData.lastPaymentReceivedDate}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div class="col-12 col-sm-3">
                <div class="mb-2 mb-sm-3">
                  <label
                    for="nxt-paymnt-dt"
                    class="form-label sec-clr fs-10 fw-500 mb-0 text-uppercase"
                  >
                    next payment date
                  </label>
                  <input
                    type="date"
                    class="form-control black-clr promissory-input fs-12 fw-500"
                    id='nextPaymentDate'
                    name='nextPaymentDate'
                    value={formData.nextPaymentDate}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div class="col-12 col-sm-3">
                <div class="mb-2 mb-sm-3">
                  <label
                    for="maturity-dt"
                    class="form-label sec-clr fs-10 fw-500 mb-0 text-uppercase"
                  >
                    maturity date
                  </label>
                  <input
                    type="date"
                    class="form-control black-clr promissory-input fs-12 fw-500"
                    id='maturityDate'
                    name='maturityDate'
                    value={formData.maturityDate}
                    onChange={handleChange}
                  />
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
              class="btn text-uppercase pri-clr promissory-white-btn note-terms-back"
            >
              back
            </button> */}
            <button
              class="btn text-uppercase promissory-btn note-terms-next next-step ml-2"
              onClick={handleSubmit}
            >
              next
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default NoteTerms;