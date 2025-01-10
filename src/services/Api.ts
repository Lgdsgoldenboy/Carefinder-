// src/services/Api.ts
import axios from 'axios';

const BASE_URL = 'https://api.reliancehmo.com/v3';

export const fetchHospitals = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/providers`);
    console.log(response.data); // Log the response to check its structure
    return response.data.data; // Adjust according to the API's data structure
  } catch (error) {
    console.error('Error fetching hospitals:', error);
    throw error;
  }
};