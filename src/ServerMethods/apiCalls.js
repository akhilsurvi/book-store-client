import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth'; // Replace with your API URL

// Function to sign up a new user
export const signup = (email, password) => {
    return axios.post(`${API_URL}/signup`, {
        email,
        password,
    });
};

// Function to log in and obtain a JWT
export const login = (email, password) => {
    return axios.post(`${API_URL}/signin`, {
        email,
        password,
    }).then(response => {
        const token = response.data.token; // Adjust based on your API response structure

        // Store the token in local storage
        localStorage.setItem('jwt', token);
        console.log('Login successful, token stored.');
        return token; // Return the token for further use if needed
    });
};

// // Function to fetch protected data
// export const fetchProtectedData = () => {
//     const token = localStorage.getItem('jwt'); // Retrieve the token from local storage

//     if (!token) {
//         console.error('No token found. Please log in.');
//         return Promise.reject(new Error('No token found'));
//     }

//     return axios.get(`${API_URL}/protected`, {
//         headers: {
//             'Authorization': `Bearer ${token}`, // Include the JWT in the authorization header
//             'Content-Type': 'application/json',
//         },
//     }).then(response => {
//         console.log('Protected data:', response.data);
//         return response.data; // Return the fetched data
//     });
// };

// Function to log out and remove the JWT
export const logout = () => {
    localStorage.removeItem('jwt'); // Clear the token from local storage
    console.log('Logged out successfully.');
};

export const isLoggedIn = () => {
    const token = localStorage.getItem('jwt');
    // Optionally check token expiration if you have that logic
    if (token) {
        return true; // User is logged in
    }
    return false; // User is not logged in
};

