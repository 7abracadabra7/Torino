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

const useOrder = () => {
  const mutationFn = async (data) => {
    const response = await api.post("order", data);
    return response;
  };
  return useMutation({
    mutationFn,

    onSuccess: (response) => {
      console.log(response.data.message);
    },
    onError: (error) => {
      console.error("Error creating post:", error);
    },
  });
};

const useAddToBasket = () => {
  const mutationFn = async (id) => {
    const response = await api.put(`basket/${id}`);
    return response;
  };
  return useMutation({
    mutationFn,
    onSuccess: (response) => {
      console.log(response.data.message);
    },
    onError: (error) => {
      console.error("Error in add tour to basket:", error);
    },
  });
};

export { useSendOtp, useCheckOtp, useOrder, useAddToBasket };
