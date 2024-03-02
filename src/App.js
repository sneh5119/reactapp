import { BrowserRouter as Router, Route, Routes , Navigate } from 'react-router-dom';
import './App.css';
import SignUp from './components/signUp/SignUp';
import Header from './components/header/Header';
import Register from './components/Register';
import Dashboard from './components/authenticatedComponents/dashboard/Dashboard';
import MainPage from './components/authenticatedComponents/main/MainPage';
import ProtectedRoute from './util/ProtectedRoute';
import Home from './components/home/Home';
import MarketPlace from './components/authenticatedComponents/marketPlace/MarketPlace';
import PropertyDetails from './components/authenticatedComponents/newLoan/PropertyDetails';
import NewLoanBase from './components/authenticatedComponents/newLoan/NewLoanBase';
import NoteTerms from './components/authenticatedComponents/newLoan/NoteTerms';
import ViewLoan from './components/authenticatedComponents/viewLoan/ViewLoan';
import BuyMarketPlace from './components/authenticatedComponents/buyMarketPlace/BuyMarketPlace';
import Valuation from './components/authenticatedComponents/newLoan/Valuation';
import NoteFile from './components/authenticatedComponents/newLoan/NoteFile';
import ForgotPassword from './components/forgotPassword/ForgotPassword';
// import ForgotPassword from './components/forgotPassword/forgotPassword';

function App() {
  return (
    <Router>
      <Routes>
        {/* un-authenticated routes */}
        <Route path="/" element={<Navigate to="/app" />} />
        <Route path='/app' element={<Header />}>
          <Route path='' element={<Home />}></Route>
          <Route path='sign-up' element={<SignUp />}></Route>
          <Route path='register' element={<Register />}></Route>
          <Route path='forgot-password' element={<ForgotPassword />}></Route>
        </Route>

        {/* authenticated routes */}
        <Route path='/promissory' element={<ProtectedRoute> <MainPage />  </ProtectedRoute> }>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='market-place' element={<MarketPlace />} />
          <Route path='' element={<NewLoanBase />}>
            <Route path='property-details' element={<PropertyDetails />} />
            <Route path='note-terms/:propertyId' element={<NoteTerms />} />
            <Route path='valuation/:propertyId' element={<Valuation />} />
            <Route path='note-file/:propertyId' element={<NoteFile />} />
          </Route>
          <Route path='view-market-place/:id' element={<ViewLoan />} />
          <Route path='buy-market-place/:id' element={<BuyMarketPlace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
