import axios from 'axios'
import React, { useState } from 'react'

const ApiService = () => {
  const [responseData, setResponseData] = useState(null);

  const  postData = async () => {
    try {
      const response = await axios.post('http://18.226.163.172:30814/auth/v1/login', {
        data: 'Your payload data here'
      }, {
        headers: {
          'username': 'Bearer YOUR_TOKEN_HERE',
          'password': 'test'
          // Add other headers here
        }
      });

      setResponseData(response.data);
    } catch (error) {
      console.error("There was an error!!!", error);
    }
  };

  // return (
  //   <div>ApiService</div>
  // )
}

export default ApiService;
