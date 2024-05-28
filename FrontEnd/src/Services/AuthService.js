import axios from "axios";

const api = "http://localhost:5149/api/";


export const LoginAPI = async (username, password) => {
  try {
    const res = await axios.post(api + "account/login", {
      username: username,
      password: password,
    });
    return res.data;
  } catch (error) {
    return <>error</>;
  }
};

export const RegisterAPI = async ({email, username, password}) => {
  try {
    const res = await axios.post(api + "account/register", {
      username: username,
      password: password,
      email: email,
    });
    return res;
  } catch (error) {
    return <>error</>;
  }
};
