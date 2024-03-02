import React, { useState } from 'react'
import "./SignUp.scss"
import home1 from "./../../assets/images/home1.jpg"
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import environment from '../../environemnt';
// import ApiService from '../../services/ApiService';


function SignUp() {
  // 
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });

  const validateEmail = (email) => {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      // return emailRegex.test(email);
      return true;
  };

  const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData(prevState => ({
          ...prevState,
          [name]: value
      }));

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
      if (!errors.email && formData.email && formData.password) {
          console.log('Form Data:', formData);
          // ApiService;
          postData(formData);
          
      } else {
          console.log('There are errors in the form.');
      }
  };

  const [responseData, setResponseData] = useState(null);

  const  postData = async (formValue) => {
    try {
      const response = await axios.post( `${environment.baseUrl}/v1/auth`, {
        'email': formValue?.email,
          'password': formData?.password
      });

      setResponseData(response.data);
      console.log("response.data",response.data?.access_token);
      localStorage.setItem('user-token',response.data?.access_token);
      return navigate('/promissory/dashboard');
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  const navigatetoForgotPass = () => {
    return navigate('/app/forgot-password');
  }

  // 
  return (
    <body>
    {/* <!-- navbar --> */}
    

    <div className="container-fluid w-auto login-container p-0 mx-4">
      <div className="row h-100">
        <div
          className="col-12 col-md-6 d-flex align-items-center justify-content-center justify-content-md-start"
        >
          <div className="login-form-content px-0 px-md-5">
            <div className="login-header-details">
              <h3 className="mb-0 text-uppercase text-white">login</h3>
              <p className="mb-4 grey-clr fw-light">
                Purchase Tokens, Access Your Payment History, And Manage Your
                Investments.
              </p>
            </div>

            <div
              className="account-verified-details d-flex flex-column align-items-center justify-content-center"
            >
              <div
                className="bg-success verified-tick d-flex align-items-center justify-content-center rounded-circle mb-1"
              >
                <i className="fa fa-check text-white"></i>
              </div>
              <h4 className="mb-0 text-uppercase text-white mb-1">
                account verified
              </h4>
              <p className="mb-0 grey-clr fw-light text-center">
                You have successfully activated your account!
              </p>
              <p className="mb-4 grey-clr fw-light">
                Please <span className="fw-400">Login</span>
              </p>
            </div>

            <form className="login-form" onSubmit={submitForm}>

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
              </div>

              <div className="form-floating input-block">
                <input 
                  name="password"
                  type="password" 
                  className="form-control" 
                  id="password" 
                  placeholder=""
                  value={formData.password} 
                  onChange={handleInputChange}
                />
                <label htmlFor="password" className="fw-500">Password</label>
              </div>

              <div
                className="d-flex align-items-center justify-content-between my-4"
              >
                <button
                  type="button"
                  className="btn btn-link p-0 grey-clr forgot-pswd-btn fs-15" onClick={navigatetoForgotPass}
                >
                  Forgot Password?
                </button>
                <button type="submit" className="btn text-uppercase promissory-btn">
                  login
                </button>
              </div>
            </form>
            <h6 className="text-white mt-4 mb-0 fs-15">DON’T HAVE AN ACCOUNT?</h6>
            <button
              type="button"
              className="btn btn-link p-0 grey-clr register-btn-link"
            >
             <NavLink style={{ color: 'inherit', textDecoration: 'inherit'}} to={'/app/register'}>
              <h5 className="grey-clr">REGISTER NOW</h5>
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
                        src={require('../../assets/images/progress-left-stat.PNG')}
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

    {/* <script>
      $(function () {
        $('.input-block input').each(function () {
          const _this = $(this);
          _this.on('input', (e) => {
            _this.val() !== ''
              ? _this.addClass('fill')
              : _this.removeClass('fill');
          });
        });
      });
    </script> */}
  </body>
  )
}

export default SignUp;