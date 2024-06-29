import axios from "axios"

const initializeApp = () => {
    
    // Setting base URL for all API request via axios
    console.log(import.meta.env.VITE_APP_BASE_URL);
    const baseURL = import.meta.env.VITE_APP_BASE_URL || 'https://default.api.url'; // Provide a default URL if not set
    axios.defaults.baseURL = baseURL;

    if (!import.meta.env.NODE_ENV || import.meta.env.NODE_ENV === 'development') {
        // dev code



    } else {
        // Prod build code



        // Removing console.log from prod
        console.log = () => {};


        // init analytics here
    }

}

export default initializeApp