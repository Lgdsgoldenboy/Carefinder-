// src/services/Api.ts
import axios from 'axios';

const BASE_URL = 'https://api.reliancehmo.com/v3';

// src/services/Api.ts
export interface Hospital {
  id: string;
  name: string;
  address: string;
  phone_number: string;
  city: string; // Ensure this is defined as string
}

// If the API can return undefined, you might want to adjust your type:
export interface Hospital {
  id: string;
  name: string;
  address: string;
  phone_number: string;
  city: string; // Ensure this is defined as string
}
export const fetchHospitals = async (): Promise<Hospital[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/providers`);
    console.log(response.data); // Log the response to check its structure
    return response.data.data; // Adjust according to the API's data structure
  } catch (error) {
    console.error('Error fetching hospitals:', error);
    throw error;
  }
};