import React, { useEffect, useState } from 'react'
import '../marketPlace/MarketPlace.scss';
import environment from '../../../environemnt';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import StepperHeader from './StepperHeader';

const PropertyDetails = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    propertyType: '',
    propertySearch: '',
    address: '',
    city: '',
    state: '',
    county: '',
    zipcode: '',
    yearBuilt: '',
    grossLivingArea: '',
    lotSize: '',
    bedRooms: '',
    bathRooms: '',
    occupancyStats: ''
  });

   // Error state
   const [formErrors, setFormErrors] = useState({});

   const handleChange = (e) => {
     const { name, value } = e.target;
     setFormData((prevData) => ({
       ...prevData,
       [name]: value
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
 
     console.log("11",formData);
     // Validate fields
     for (const field in formData) {
       if (!formData[field]) {
         errors[field] = 'This field is required';
       }
     }
 
     console.log("22",formData);
     // If errors exist, set them and exit
     if (Object.keys(errors).length > 0) {
      console.log("errors",errors);
       setFormErrors(errors);
       return;
     }
 
     console.log(formData);
     // Here you can send `formData` to an API or handle it according to your needs
     postData(formData);
   };

   const  postData = async (formValue) => {
    const payload = {
      "street": formValue.address,
      "city": formValue.city,
      "state": formValue.state,
      "county": formValue.county,
      "zipCode": formValue.zipcode,
      "yearBuild": formValue.yearBuild,
      "grossLivingArea": formValue.grossLivingArea,
      "lotSize": formValue.lotSize,
      "bedRooms": formValue.bedRooms,
      "bathRooms": formValue.bathRooms,
      "propertyType": {id:+(formValue.propertyType)},
      "occupancyType": {
        id: +(formValue.occupancyStats)
      } 
    }
    try {
      const response = await axios.post( `${environment.baseUrl}/v1/property`, {
         ...payload
      }, {
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer '+localStorage.getItem('user-token')
        }
      });
      console.log("response.data",response.data);
      return navigate(`/promissory/note-terms/${response.data.id}`);
    } catch (error) {
      console.error("There was an error!", error);
      alert("ERROR");
    }
  };

  const [occupancyResponseData, setOccupancyResponseData] = useState(null);
  const getOccupancy =  async () => {
    try {
      const response = await axios.get(environment.baseUrl+'/v1/lookup/occupancyTypes', { headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('user-token')
        // Add other headers here
      }});
      console.log("response of getOccupancy",response.data);
      setOccupancyResponseData(response.data);
    } catch (error) {
      
    }
  }

  const [propertyTypeResponseData, setPropertyTypeResponseData] = useState(null);
  const getPropetyType =  async () => {
    try {
      const response = await axios.get(environment.baseUrl+'/v1/lookup/propertyTypes', { headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('user-token')
        // Add other headers here
      }});
      console.log("response of propertyType",response.data);
      setPropertyTypeResponseData(response.data);
    } catch (error) {
      
    }
  }

  useEffect(() => {
    getOccupancy();
    getPropetyType();
  }, []);

   
  return (
   <React.Fragment>
    <div class="property-details-form form-container">
            <div class="loan-form px-2 px-sm-5 pt-3">
              <h6
                class="title text-uppercase px-2 py-1 mt-2 mt-sm-4 mb-1 mb-sm-2"
              >
                property location
              </h6>
              <form onSubmit={handleSubmit}>
                <div class="row">
                  <div class="col-12 col-sm-3">
                    <div class="mb-2 mb-sm-3">
                      <label
                        for="property-type"
                        class="form-label sec-clr fs-10 fw-500 mb-0 text-uppercase"
                      >
                        PROPERTY TYPE
                      </label>
                      <select
                        class="form-select black-clr promissory-select fs-12 fw-500"
                        id="propertyType"
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                      >
                        <option value="">Select</option>
                        {propertyTypeResponseData?.map((ele)=>{
                          return <option key={ele?.id} value={ele?.id}>{ele?.propertyType}</option>
                        })}
                      </select>
                      {formErrors.propertyType && <div className="text-danger fs-10">{formErrors.propertyType}</div>}
                    </div>
                  </div>
                  <div class="col-12 col-sm-9">
                    <div class="mb-2 mb-sm-3">
                      <label
                        for="property-search"
                        class="form-label sec-clr fs-10 fw-500 mb-0 text-uppercase"
                      >
                        find YOUR Property
                      </label>
                      <div class="input-group promissory-input-grp">
                        <input
                          type="text"
                          class="form-control black-clr promissory-input fs-12 fw-500"
                          placeholder="Ex: 1248 S Keeler Ave or 60623"
                          aria-label="property search"
                          aria-describedby="property search"
                          id="propertySearch"
                          name="propertySearch"
                          value={formData.propertySearch}
                          onChange={handleChange}
                        />
                        <span
                          class="input-group-text"
                          id="property-search-icon"
                        >
                          <i class="fa fa-search ps-2" aria-hidden="true"></i>
                        </span>
                      </div>
                      {formErrors.propertySearch && <div className="text-danger fs-10">{formErrors.propertySearch}</div>}
                    </div>
                  </div>

                  <div class="col-12 col-sm-3">
                    <div class="mb-2 mb-sm-3">
                      <label
                        for="address"
                        class="form-label sec-clr fs-10 fw-500 mb-0 text-uppercase"
                      >
                        address
                      </label>
                      <input
                        type="text"
                        class="form-control black-clr promissory-input fs-12 fw-500"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                      />
                      {formErrors.address && <div className="text-danger fs-10">{formErrors.address}</div>}
                    </div>
                  </div>
                  <div class="col-12 col-sm-3">
                    <div class="mb-2 mb-sm-3">
                      <label
                        for="city"
                        class="form-label sec-clr fs-10 fw-500 mb-0 text-uppercase"
                      >
                        city
                      </label>
                      <input
                        type="text"
                        class="form-control black-clr promissory-input fs-12 fw-500"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                      />
                      {formErrors.city && <div className="text-danger fs-10">{formErrors.city}</div>}
                    </div>
                  </div>
                  {/* <div class="col-12 col-sm-3">
                    <div class="mb-2 mb-sm-3">
                      <label
                        for="property-type"
                        class="form-label sec-clr fs-10 fw-500 mb-0 text-uppercase"
                      >
                        state
                      </label>
                      <select
                        class="form-select black-clr promissory-select fs-12 fw-500"
                        id="property-type"
                      >
                        <option selected="" value="texas">Texas</option>
                        <option value="state-2">State 2</option>
                        <option value="state-3">State 3</option>
                      </select>
                    </div>
                  </div> */}
                  <div class="col-12 col-sm-3">
                    <div class="mb-2 mb-sm-3">
                      <label
                        for="state"
                        class="form-label sec-clr fs-10 fw-500 mb-0 text-uppercase"
                      >
                        state
                      </label>
                      <input
                        type="text"
                        class="form-control black-clr promissory-input fs-12 fw-500"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                      />
                      {formErrors.state && <div className="text-danger fs-10">{formErrors.state}</div>}
                    </div>
                  </div>
                  {/* <div class="col-12 col-sm-3">
                    <div class="mb-2 mb-sm-3">
                      <label
                        for="county"
                        class="form-label sec-clr fs-10 fw-500 mb-0 text-uppercase"
                      >
                        county
                      </label>
                      <select
                        class="form-select black-clr promissory-select fs-12 fw-500"
                        id="county"
                      >
                        <option selected="" value="texas">Texas</option>
                        <option value="state-2">State 2</option>
                        <option value="state-3">State 3</option>
                      </select>
                    </div>
                  </div> */}
                  <div class="col-12 col-sm-3">
                    <div class="mb-2 mb-sm-3">
                      <label
                        for="county"
                        class="form-label sec-clr fs-10 fw-500 mb-0 text-uppercase"
                      >
                        county
                      </label>
                      <input
                        type="text"
                        class="form-control black-clr promissory-input fs-12 fw-500"
                        id="county"
                        name="county"
                        value={formData.county}
                        onChange={handleChange}
                      />
                      {formErrors.county && <div className="text-danger fs-10">{formErrors.county}</div>}
                    </div>
                  </div>

                  <div class="col-12 col-sm-3">
                    <div class="mb-2 mb-sm-3">
                      <label
                        for="zipcode"
                        class="form-label sec-clr fs-10 fw-500 mb-0 text-uppercase"
                      >
                        zip code
                      </label>
                      <input
                        type="number"
                        class="form-control black-clr promissory-input fs-12 fw-500"
                        id="zipcode"
                        name="zipcode"
                        value={formData.zipcode}
                        onChange={handleChange}
                      />
                      {formErrors.zipcode && <div className="text-danger fs-10">{formErrors.zipcode}</div>}
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div class="loan-form px-2 px-sm-5">
              <h6
                class="title text-uppercase px-2 py-1 mt-2 mt-sm-4 mb-1 mb-sm-2"
              >
                property specifications
              </h6>
              <form onSubmit={handleSubmit}>
                <div class="row">
                  <div class="col-12 col-sm-3">
                    <div class="mb-2 mb-sm-3">
                      <label
                        for="year-built"
                        class="form-label sec-clr fs-10 fw-500 mb-0 text-uppercase"
                      >
                        year built
                      </label>
                      <input
                        type="text"
                        class="form-control black-clr promissory-input fs-12 fw-500"
                        id="yearBuilt"
                        name="yearBuilt"
                        value={formData.yearBuilt}
                        onChange={handleChange}
                      />
                      {formErrors.yearBuilt && <div className="text-danger fs-10">{formErrors.yearBuilt}</div>}
                    </div>
                  </div>
                  <div class="col-12 col-sm-3">
                    <div class="mb-2 mb-sm-3">
                      <label
                        for="grossLivingArea"
                        class="form-label sec-clr fs-10 fw-500 mb-0 text-uppercase"
                      >
                        floor size sq ft
                      </label>
                      <input
                        type="text"
                        class="form-control black-clr promissory-input fs-12 fw-500"
                        id="grossLivingArea"
                        name="grossLivingArea"
                        value={formData.grossLivingArea}
                        onChange={handleChange}
                      />
                      {formErrors.grossLivingArea && <div className="text-danger fs-10">{formErrors.grossLivingArea}</div>}
                    </div>
                  </div>
                  <div class="col-12 col-sm-3">
                    <div class="mb-2 mb-sm-3">
                      <label
                        for="lot-size"
                        class="form-label sec-clr fs-10 fw-500 mb-0 text-uppercase"
                      >
                        lot size sq ft
                      </label>
                      <input
                        type="text"
                        class="form-control black-clr promissory-input fs-12 fw-500"
                        id="lotSize"
                        name="lotSize"
                        value={formData.lotSize}
                        onChange={handleChange}
                      />
                      {formErrors.lotSize && <div className="text-danger fs-10">{formErrors.lotSize}</div>}
                    </div>
                  </div>
                  <div class="col-12 col-sm-3">
                    <div class="mb-2 mb-sm-3">
                      <label
                        for="bedRooms"
                        class="form-label sec-clr fs-10 fw-500 mb-0 text-uppercase"
                      >
                        bed rooms
                      </label>
                      <input
                        type="text"
                        class="form-control black-clr promissory-input fs-12 fw-500"
                        id="bedRooms"
                        name="bedRooms"
                        value={formData.bedRooms}
                        onChange={handleChange}
                      />
                      {formErrors.bedRooms && <div className="text-danger fs-10">{formErrors.bedRooms}</div>}
                    </div>
                  </div>

                  <div class="col-12 col-sm-3">
                    <div class="mb-2 mb-sm-3">
                      <label
                        for="bathRooms"
                        class="form-label sec-clr fs-10 fw-500 mb-0 text-uppercase"
                      >
                        bath rooms
                      </label>
                      <input
                        type="text"
                        class="form-control black-clr promissory-input fs-12 fw-500"
                        id="bathRooms"
                        name="bathRooms"
                        value={formData.bathRooms}
                        onChange={handleChange}
                      />
                      {formErrors.bathRooms && <div className="text-danger fs-10">{formErrors.bathRooms}</div>}
                    </div>
                  </div>
                  <div class="col-12 col-sm-3">
                    <div class="mb-2 mb-sm-3">
                      <label
                        for="occupancyStats"
                        class="form-label sec-clr fs-10 fw-500 mb-0 text-uppercase"
                      >
                        occupancy status
                      </label>
                      <select
                        class="form-select black-clr promissory-select fs-12 fw-500"
                        id="occupancyStats"
                        name="occupancyStats"
                        value={formData.occupancyStats}
                        onChange={handleChange}
                      >
                        <option value="">Select</option>
                        {occupancyResponseData?.map((ele)=>{
                          return <option key={ele?.id}  value={ele?.id}>{ele?.occupancyType}</option>
                        })}
                      </select>
                      {formErrors.occupancyStats && <div className="text-danger fs-10">{formErrors.occupancyStats}</div>}
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
                <button
                  class="btn text-uppercase pri-clr promissory-white-btn back-loan d-none"
                >
                  back
                </button>
                <button
                  class="btn text-uppercase promissory-btn property-dts-nxt-btn next-step"
                  onClick={handleSubmit}
                >
                  next
                </button>
              </div>
            </div>
          </div>

          

          <div class="valuations-form form-container d-none">
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
                <button
                  class="btn text-uppercase pri-clr promissory-white-btn valuations-back"
                >
                  back
                </button>
                <button
                  class="btn text-uppercase promissory-btn valuations-next next-step"
                >
                  next 3
                </button>
              </div>
            </div>
          </div>

          <div class="files-upload-form form-container d-none">
            <div class="loan-form px-2 px-sm-5 pt-3">
              <h6
                class="title text-uppercase px-2 py-1 mt-2 mt-sm-4 mb-1 mb-sm-2"
              >
                upload file
              </h6>
              <form action="">
                <div class="row">
                  <div class="col-12">
                    <div class="mb-2 mb-sm-3">
                      <div class="promissory-upload-ele">
                        <img
                          src={require('../../../assets/images/drag_drop.PNG')}
                          alt="..."
                          class="mb-1"
                        />
                        <div class="d-flex mb-1">
                          <p>Drag and Drop</p>
                          <span class="mx-1">or</span>
                          <label class="custom-file-upload">
                            <input
                              type="file"
                              class="form-control"
                              id="img_upld"
                            />
                            Browse
                          </label>
                        </div>
                        <p class="supported-file-note">
                          (supported file types: .pdf/ .word/ .excel/ .jpg/
                          .png)
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="uploaded-files">
                      <div class="file mb-2">
                        <span class="file-name">
                          Filename_Version_Format.pdf
                        </span>
                        <span class="file-size"> 10MB </span>
                        <div class="document-title">
                          <label
                            for="doc1-title"
                            class="form-label sec-clr fs-10 fw-500 mb-0 text-uppercase"
                          >
                            document title
                          </label>
                          <input
                            type="text"
                            class="form-control black-clr promissory-input fs-12 fw-500"
                            value=""
                            placeholder=""
                            id="doc1-title"
                          />
                        </div>
                        <div class="upload-status inprogress-status">
                          <span class="status"> 50% </span>
                          <i
                            class="fa fa-times-circle-o cancel-icon"
                            aria-hidden="true"
                          ></i>
                        </div>
                      </div>
                      <div class="file mb-2">
                        <span class="file-name">
                          Filename_Version_Format.pdf
                        </span>
                        <span class="file-size"> 10MB </span>
                        <div class="document-title">
                          <label
                            for="doc2-title"
                            class="form-label sec-clr fs-10 fw-500 mb-0 text-uppercase"
                          >
                            document title
                          </label>
                          <input
                            type="text"
                            class="form-control black-clr promissory-input fs-12 fw-500"
                            value=""
                            placeholder=""
                            id="doc2-title"
                          />
                        </div>
                        <div class="upload-status error-status">
                          <span class="status status-error-txt"> Error </span>
                          <i
                            class="fa fa-trash-o delete-icon"
                            aria-hidden="true"
                          ></i>
                        </div>
                      </div>
                      <div class="file mb-2">
                        <span class="file-name">
                          Filename_Version_Format.pdf
                        </span>
                        <span class="file-size"> 10MB </span>
                        <div class="document-title">
                          <label
                            for="doc3-title"
                            class="form-label sec-clr fs-10 fw-500 mb-0 text-uppercase"
                          >
                            document title
                          </label>
                          <input
                            type="text"
                            class="form-control black-clr promissory-input fs-12 fw-500"
                            value="Deed of trust and mortgage payment"
                            placeholder=""
                            id="doc3-title"
                          />
                        </div>
                        <div class="upload-status success-status">
                          <span class="status status-success-txt">
                            Uploaded
                          </span>
                          <i
                            class="fa fa-trash-o delete-icon"
                            aria-hidden="true"
                          ></i>
                        </div>
                      </div>
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
                <button
                  class="btn text-uppercase pri-clr promissory-white-btn files-back"
                >
                  back
                </button>
                <button
                  class="btn text-uppercase promissory-btn submit-loan-application next-step"
                >
                  submit
                </button>
              </div>
            </div>
          </div>
       
   </React.Fragment>
  )
}

export default PropertyDetails;



// lienPosition: '',
//     performance: '',
//     noteType: '',
//     legalStatus: '',
//     hardestHitFundState: '',
//     judicialState: '',
//     nonJudicialState: '',
//     unpaidPrincipalBalance: '',
//     loanToValue: '',
//     originationDate: '',
//     originalBalance: '',
//     totalPayoff: '',
//     paymentRemaining: '',
//     interestRate: '',
//     interestOnlyLoan: '',
//     principalAndInterestPayment: '',
//     escrowOrImpounds: '',
//     totalMonthlyLoanPayment: '',
//     accruredLateCharges: '',
//     lastPaymentReceivedDate: '',
//     nextPaymentDate: '',
//     maturityDate: '',