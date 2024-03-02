import React, { useCallback } from 'react'
// import '../dashboard/Dashboard.css'
import './Navbar.css';
import Brand from '../../../assets/images/brand.PNG';
import { NavLink, useNavigate } from 'react-router-dom';
// import { Outlet } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();

  const navigateRoute = (url) => {
    return navigate(url);
  };

  // const abc = useCallback(() => {
  //   console.log("jaedbebdas");
  //   return navigate('property-details');
  // }, []);
  
  return (
    <React.Fragment>
         {/* <!-- menubar -->
        <!-- for desktop only --> */}
         {/* <div class="root-container d-flex"> */}
         <div
          class="menu-bar px-2 py-2 py-md-3 d-flex flex-column align-items-center menu-bar-desktop"
        >
          <i
            class="fa fa-bars text-white hamburger-icon fs-14"
            aria-hidden="true"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions"
            aria-controls="offcanvasWithBothOptions"
          ></i>
  
          <img
          onClick={() => {
            navigateRoute('dashboard');
        }}
            src={Brand}
            alt="..."
            class="mb-5 brand-logo"
          />
  
          <a
            id="mi-1"
            class="menu-item text-white text-center mb-3 d-flex flex-column align-items-center justify-content-center fs-11 text-capitalize"
            onClick={() => {
              navigateRoute('property-details');
          }}
          >
            <i
            // active
              class="fa fa-th text-white mb-0 fs-14 menu-bar-icon mbi-1"
              aria-hidden="true"
            ></i>
            my assets
          </a>
  
          <a
            href="#"
            id="mi-2"
            class="menu-item text-white text-center mb-3 d-flex flex-column align-items-center justify-content-center fs-11 text-capitalize"
            onClick={() => {
              navigateRoute('market-place');
          }}
          >
            <i
              class="fa fa-cog text-white mb-0 fs-14 menu-bar-icon mbi-2"
              aria-hidden="true"
            ></i>
            market place
          </a>
  
          <a
            href="#"
            id="mi-3"
            class="menu-item text-white text-center mb-3 d-flex flex-column align-items-center justify-content-center fs-11 text-capitalize"
          >
            <i
              class="fa fa-cog text-white mb-0 fs-14 menu-bar-icon mbi-3"
              aria-hidden="true"
            ></i>
            refer & earn
          </a>
  
          <a
            href="#"
            id="mi-4"
            class="menu-item text-white text-center mb-3 d-flex flex-column align-items-center justify-content-center fs-11 text-capitalize"
          >
            <i
              class="fa fa-cog text-white mb-0 fs-14 menu-bar-icon mbi-4"
              aria-hidden="true"
            ></i>
            transactions
          </a>
  
          <a
            href="#"
            id="mi-5"
            class="menu-item text-white text-center mb-3 d-flex flex-column align-items-center justify-content-center fs-11 text-capitalize"
          >
            <i
              class="fa fa-cog text-white mb-0 fs-14 menu-bar-icon mbi-5"
              aria-hidden="true"
            ></i>
            wallet
          </a>
  
          <a
            href="#"
            id="mi-6"
            class="menu-item text-white text-center mb-3 d-flex flex-column align-items-center justify-content-center fs-11 text-capitalize"
          >
            <i
              class="fa fa-cog text-white mb-0 fs-14 menu-bar-icon mbi-6"
              aria-hidden="true"
            ></i>
            taxes
          </a>
  
          <a
            href="#"
            id="mi-7"
            class="menu-item menu-item-setting text-white text-center mb-3 d-flex flex-column align-items-center justify-content-center fs-11 text-capitalize"
          >
            <i
              class="fa fa-cog pri-clr mb-0 fs-14 menu-bar-icon mbi-7"
              aria-hidden="true"
            ></i>
            settings
          </a>
        </div>
        {/* <!-- ends::for desktop only -->
  
        <!-- for mobile --> */}
        <div
          class="offcanvas offcanvas-mobile offcanvas-start d-none"
          data-bs-scroll="false"
          tabindex="-1"
          id="offcanvasWithBothOptions"
          aria-labelledby="offcanvasWithBothOptionsLabel"
        >
          {/* <!-- <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            Backdrop with scrolling
          </h5>
        </div> --> */}
          <div class="offcanvas-body d-flex flex-column align-items-center h-100">
            <a
              data-bs-dismiss="offcanvas"
              
              id="mi-1"
              class="menu-item text-white text-center mb-3 d-flex flex-column align-items-center justify-content-center fs-11 text-capitalize"
            >
              <i
                class="fa fa-th text-white mb-0 fs-14 menu-bar-icon mbi-1 active"
                aria-hidden="true"
              ></i>
              my assets
            </a>
  
            <a
              data-bs-dismiss="offcanvas"
              href="#"
              id="mi-2"
              class="menu-item text-white text-center mb-3 d-flex flex-column align-items-center justify-content-center fs-11 text-capitalize"
            >
              <i
                class="fa fa-cog text-white mb-0 fs-14 menu-bar-icon mbi-2"
                aria-hidden="true"
              ></i>
              market place
            </a>
  
            <a
              data-bs-dismiss="offcanvas"
              href="#"
              id="mi-3"
              class="menu-item text-white text-center mb-3 d-flex flex-column align-items-center justify-content-center fs-11 text-capitalize"
            >
              <i
                class="fa fa-cog text-white mb-0 fs-14 menu-bar-icon mbi-3"
                aria-hidden="true"
              ></i>
              refer & earn
            </a>
  
            <a
              data-bs-dismiss="offcanvas"
              href="#"
              id="mi-4"
              class="menu-item text-white text-center mb-3 d-flex flex-column align-items-center justify-content-center fs-11 text-capitalize"
            >
              <i
                class="fa fa-cog text-white mb-0 fs-14 menu-bar-icon mbi-4"
                aria-hidden="true"
              ></i>
              transactions
            </a>
  
            <a
              data-bs-dismiss="offcanvas"
              href="#"
              id="mi-5"
              class="menu-item text-white text-center mb-3 d-flex flex-column align-items-center justify-content-center fs-11 text-capitalize"
            >
              <i
                class="fa fa-cog text-white mb-0 fs-14 menu-bar-icon mbi-5"
                aria-hidden="true"
              ></i>
              wallet
            </a>
  
            <a
              data-bs-dismiss="offcanvas"
              href="#"
              id="mi-6"
              class="menu-item text-white text-center mb-3 d-flex flex-column align-items-center justify-content-center fs-11 text-capitalize"
            >
              <i
                class="fa fa-cog text-white mb-0 fs-14 menu-bar-icon mbi-6"
                aria-hidden="true"
              ></i>
              taxes
            </a>
  
            <a
              data-bs-dismiss="offcanvas"
              href="#"
              id="mi-7"
              class="menu-item menu-item-setting text-white text-center mb-3 d-flex flex-column align-items-center justify-content-center fs-11 text-capitalize"
            >
              <i
                class="fa fa-cog pri-clr mb-0 fs-14 menu-bar-icon mbi-7"
                aria-hidden="true"
              ></i>
              settings
            </a>
          </div>
        </div>
        {/* <!-- ends::for mobile --> */}
         {/* </div> */}
        
    
    {/* </div> */}
    </React.Fragment>
    
  )
}

export default Navbar