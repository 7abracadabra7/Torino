import { useMutation } from "@tanstack/react-query";
const { default: api } = require("../config/api");

const useSendOtp = () => {
  const mutationFn = async (data) => {
    const response = await api.post("auth/send-otp", data);
    console.log(response);
    return response;
  };
  return useMutation({ mutationFn });
};

const useCheckOtp = () => {
  const mutationFn = async (data) => {
    const response = await api.post("auth/check-otp", data);
    return response;
  };

  return useMutation({ mutationFn });
};

export { useSendOtp, useCheckOtp };
