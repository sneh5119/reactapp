import React, { useState } from 'react'
import "./signUp/SignUp.scss"
import home1 from "./../assets/images/home1.jpg"
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import environment from '../environemnt'

const Register = () => {
    const [formData, setFormData] = useState({firstName:'',middleName:'',lastName:'', email: '', phone: '' });
    const [errors, setErrors] = useState({firstName:'',middleName:'',lastName:'', email: '', phone: '' });

    // Error state
   const [formErrors, setFormErrors] = useState({});

  
    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailRegex.test(email);
    };
  
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        console.log("formData 1",formData);
  
        if (name === 'email' && !validateEmail(value)) {
            setErrors(prevState => ({
                ...prevState,
                email: 'Invalid email format'
            }));
        } else {
            setErrors(prevState => ({
                ...prevState,
                [name]: ''
            }));
        }
    };
  
    const submitForm = (event) => {
        event.preventDefault();
        for (const field in formData) {
          if (!formData[field]) {
            errors[field] = 'This field is required';
          }
    
    }
 
    if (!errors.email && formData.email && formData.phone) {
      console.log('Form Data:', formData);
      postData(formData);
  } else {
      console.log('There are errors in the form.');
  }
    };

    const  postData = async (formValue) => {
      try {
        const response = await axios.post( `${environment.baseUrl}/v1/auth/signup`, {
           ...formValue
        }, {
          headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer '+localStorage.getItem('user-token')
          }
        });
        alert("Please check the E-Mail");
      } catch (error) {
        console.error("There was an error!", error);
        alert("ERROR");
      }
    };
  return (
    <body>
    <div className="container-fluid w-auto register-container p-0 mx-4">
      <div className="row h-100">
        <div
          className="col-12 col-md-6 d-flex align-items-center justify-content-center justify-content-md-start"
        >
          <div className="register-form-content px-0 px-md-5">
            <div className="register-header-details">
              <h3 className="mb-0 text-uppercase text-white">register</h3>
              <p className="mb-4 grey-clr fw-light">
                Purchase Tokens, Access Your Payment History, And Manage Your
                Investments.
              </p>
            </div>

            <div className="activate-account-details text-center">
              <h3 className="mb-3 text-uppercase text-white">activate account</h3>
              <p className="mb-0 grey-clr fw-light text-center">
                Verify your email address
              </p>
              <p className="mb-0 email-lite-pink-clr fw-400 text-center">
                (johnsmith@domainname.com)
              </p>
              <p className="mb-0 grey-clr fw-light text-center">
                by clicking the link sent to your email.
              </p>
              <p className="mb-0 grey-clr fw-light mb-4 text-center">
                Check your spam folder if you did not receive an email.
              </p>
            </div>

            <form className="login-form" onSubmit={submitForm}>
            <div className="form-floating mb-2 input-block">
                <input 
                  name="firstName"
                  type="text" 
                  className="form-control" 
                  id="firstName" 
                  placeholder=""
                  value={formData.firstName} 
                  onChange={handleInputChange}
                />
                <label htmlFor="firstName" className="fw-500">First Name</label>
                {formErrors.firstName && <div className="text-danger fs-10">{formErrors.firstName}</div>}
              </div>
              <div className="form-floating mb-2 input-block">
                <input 
                  name="middleName"
                  type="text" 
                  className="form-control" 
                  id="middleName" 
                  placeholder=""
                  value={formData.middleName} 
                  onChange={handleInputChange}
                />
                <label htmlFor="middleName" className="fw-500">Middle Name</label>
                {formErrors.middleName && <div className="text-danger fs-10">{formErrors.middleName}</div>}
              </div>
              <div className="form-floating mb-2 input-block">
                <input 
                  name="lastName"
                  type="text" 
                  className="form-control" 
                  id="lastName" 
                  placeholder=""
                  value={formData.lastName} 
                  onChange={handleInputChange}
                />
                <label htmlFor="lastName" className="fw-500">Last Name</label>
                {formErrors.lastName && <div className="text-danger fs-10">{formErrors.lastName}</div>}
              </div>
            <div className="form-floating mb-2 input-block">
                <input 
                  name="email"
                  type="email" 
                  className="form-control" 
                  id="email" 
                  placeholder=""
                  value={formData.email} 
                  onChange={handleInputChange}
                />
                <label htmlFor="email" className="fw-500">Email address</label>
                {formErrors.email && <div className="text-danger fs-10">{formErrors.email}</div>}
              </div>

              <div className="form-floating input-block">
                <input 
                  name="phone"
                  type="number" 
                  className="form-control" 
                  id="phone" 
                  placeholder=""
                  value={formData.phone} 
                  onChange={handleInputChange}
                />
                <label htmlFor="phone" className="fw-500">Phone</label>
                {formErrors.phone && <div className="text-danger fs-10">{formErrors.phone}</div>}
              </div>
              <div
                className="d-flex align-items-center justify-content-between my-4"
              >
                <button type="submit" className="btn text-uppercase promissory-btn" onClick={submitForm}>
                  CREATE AN ACCOUNT
                </button>
              </div>
            </form>
            <h6 className="text-white mt-4 mb-0 fs-15 text-uppercase">
              already have an account?
            </h6>
            <button
              type="button"
              className="btn btn-link p-0 grey-clr login-btn-link"
            >
             <NavLink style={{ color: 'inherit', textDecoration: 'inherit'}} to={'/app/sign-up'}>
               <h5 className="grey-clr text-uppercase">login</h5>
             </NavLink> 
              
            </button>
          </div>
        </div>
        <div
          className="col-12 col-md-6 d-flex align-items-center justify-content-end img-col"
        >
          <div className="img-content px-5 me-5">
            <div className="home-analytics-card">
              <img
                src={home1}
                alt="..."
                className="w-100 h-100 home-img"
              />
              <div className="footer">
                <div
                  className="top-content bg-white d-flex justify-content-between p-2 m-2 mb-0"
                >
                  <div
                    className="content-left d-flex flex-column justify-content-center"
                  >
                    <h6 className="black-clr mb-0 fs-14 fw-semibold">
                      12507 Astor Ave
                    </h6>
                    <p className="sec-clr mb-0 fs-11 fw-500">
                      Cleveland, Ohio 44135
                    </p>
                  </div>
                  <div className="content-right fs-12 d-flex align-items-center">
                    <div className="d-flex flex-column align-items-end me-2">
                      <span className="irr-percent fw-500 pri-clr"> 19.9% </span>
                      <span className="coc-percent sec-clr"> 9.9% </span>
                    </div>
                    <div className="d-flex flex-column align-items-end">
                      <span className="fw-500 pri-clr"> IRR </span>
                      <span className="sec-clr"> CoC </span>
                    </div>
                  </div>
                </div>
                <div
                  className="bottom-content bg-black d-flex justify-content-between p-2 m-2 mt-0"
                >
                  <div className="content-left d-flex align-items-center">
                    <div className="d-flex flex-column grey-clr me-1">
                      <span className="fw-500 fs-12"> $52.86 </span>
                      <span className="fw-100 fs-10"> MINIMUM </span>
                    </div>
                    <div
                      className="bg-success increased-percent d-flex align-items-center p-1"
                    >
                      <i className="fa fa-arrow-up text-white me-1"></i>
                      <span className="text-white fs-10"> 6.36% </span>
                    </div>
                  </div>
                  <div className="content-right d-flex align-items-center">
                    <div
                      className="d-flex flex-column align-items-end grey-clr me-1"
                    >
                      <span className="fw-500 fs-12"> 5,636 </span>
                      <span className="fw-100 fs-10 text-end"> TOKENS LEFT </span>
                    </div>
                    <div>
                      <img
                        src="../assets/images/progress-left-stat.PNG"
                        alt="..."
                      />
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
  )
}

export default Register