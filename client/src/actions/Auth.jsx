import * as AuthApi from "../api/authRequest";

export const logIn = (formData) => async (disptach) => {
  disptach({ type: "AUTH_START" });
  try {
    const { data } = await AuthApi.Login(formData);
    disptach({ type: "AUTH_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    disptach({ type: "AUTH_FAILURE" });
  }
};
export const Register = (formData) => async (disptach) => {
  disptach({ type: "AUTH_START" });
  try {
    const { data } = await AuthApi.Register(formData);
    disptach({ type: "AUTH_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    disptach({ type: "AUTH_FAILURE" });
  }
};
