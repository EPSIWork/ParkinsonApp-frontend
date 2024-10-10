import axios from "axios";

// Define the base URL for your API
const API_BASE_URL = "https://e17f-141-255-162-201.ngrok-free.app";
const OPEN_CHAT = "https://c20e-141-255-162-201.ngrok-free.app";
// Define the interface for the login data
interface LoginData {
  email: string;
  password: string;
}

interface SignupData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNo: string;
  password: string;
  confirmPassword: string;
}

const api = axios.create({
  baseURL: API_BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const signup = async (signupData: SignupData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/users/register`,
      signupData
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "An error occurred during signup"
      );
    }
    throw error;
  }
};

// Function to handle login
export const login = async (loginData: LoginData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/users/login`,
      loginData
    );
    return response.data;
  } catch (error) {
    // Handle errors (e.g., network errors, API errors)
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "An error occurred during login"
      );
    }
    throw error;
  }
};

export const chatopen = async (message: string) => {
  try {
    console.log("Sending chat message:", message);
    const response = await fetch(
      `${OPEN_CHAT}/chat_gpt/?sentence=${encodeURIComponent(message)}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Received response:", data);
    return data;
  } catch (error) {
    console.error("Error during fetch:", error);
    throw error;
  }
};
