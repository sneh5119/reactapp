// api.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://18.226.163.172:30814'
});

// api.js continued
instance.interceptors.response.use(
    (response) => {
      // If the response is good, just return it.
      return response;
    },
    (error) => {
      if (error.response && error.response.status === 401) {
        // Handle logout logic here
        logoutUser();
      }
      // If it's another kind of error, just throw it.
      return Promise.reject(error);
    }
  );
  
  function logoutUser() {
    // Clear any tokens or session data
    localStorage.removeItem('token');
    
    // Redirect user to login page or show a message
    window.location = '/app/sign-up';
  }
  

export default instance;
