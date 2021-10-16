import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:8000/api",
});

export const setToken = (token) => {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common["Authorization"];
  }
};

export const registerUser = async (inputData) => {
  try {
    await API.post("/signup", inputData, {
      "Content-Type": "application/json",
    });
    // const data = await response.data.data;
    // console.log("REGISTER: ", data);
  } catch (error) {
    // console.log("ERR CONFIG LOGIN: ", error.response.data.msg);
    return error.response.data;
  }
};

export const loginUser = async (inputData) => {
  try {
    const config = {
      "Content-Type": "application/json",
    };
    let response = await API.post("/signin", inputData, config);
    // console.log("LOGIN: ", response);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
