import axios from "axios";
import Cookies from "js-cookie";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://demo.socialxperia.ai/api"
    : "http://localhost:8000/api";

const API = axios.create({ baseURL });

export default API;

export const register = (data) => {
  return API.post("auth/signup", data);
};

export const verifyotp = (data) => {
    return API.post(
      "auth/verify-otp",
       data,
    {
        headers: {
          "x-token": Cookies.get("token"),
        },
      }
      );
  };

  export const signIn = (data) => {
    return API.post("auth/signin", data);
  }

  export const resendOtp = () => {
    return API.post(
      "auth/resend-otp",
      null, 
      {
        headers: {
          "x-token": Cookies.get("token"),
        },
      }
    );
  }