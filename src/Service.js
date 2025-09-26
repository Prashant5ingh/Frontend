import React, { useEffect, useState } from 'react'
import axios from 'axios';

// Using axios for api calling for this project.
async function Service() {
    // Fetch data using axios just when application is loaded or mounted on web page.

    // Conversion from obj to json and visa versa is done by axios itself (advantage).
    /* Yes, JSON conversion in Axios is done implicitly. Axios automatically serializes the data object into JSON format when sending a request, and it also automatically parses the response body into a JavaScript object, treating it as JSON by default.
       This means developers do not need to manually call JSON.stringify() on the data being sent or JSON.parse() on the response.
       For example, when using axios.post(), passing a JavaScript object as the data parameter will result in the data being sent as a JSON string in the request body, and the response will be available as a JavaScript object through response.data.
       This automatic handling simplifies the process of working with JSON data in HTTP requests.*/

    // Setting up proxy for dynamic localhost domain name in vite.config.js
    // // And now it makes server to believe that vite app is also running on same server and request for api calls coming from 3000 (Just like home entry). Means we don't have to handle cors error for the same localhost port number.
    // Or we can handle cors error from backend. Making the vite app localhost whitelist.
    console.log("service calls")

    try {
        // const res = await axios.get('/api/jokes');  // this works for proxy in local project not for deployment
        const res = await axios.get('https://backend-bay-phi-78.vercel.app/api/jokes');
        
        return res.data;
    } catch (error) {
        console.error("service calls err", error);
        return null;
    }

}

export default Service