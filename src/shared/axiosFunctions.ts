import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:5090/api/',
});

export const axiosGet = async (endpoint: string) => {
  try {
    const response = await api.get(endpoint, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',       
      },
    });

    return response;
  } catch (error: any) {
    const {response} = error;
    if(response.data) {
        return response.data;
    }

    return error;
  }
};

