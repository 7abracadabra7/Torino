import { useMutation, useQueryClient } from "@tanstack/react-query";
import { setCookie } from "../utils/cookie";
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

const useCheckout = () => {
  const queryClient = useQueryClient();

  const mutationFn = (data) => api.post("order", data);

  const onSuccess = (data) => {
    setCookie("accessToken", data?.data?.accessToken, 30);
    setCookie("refreshToken", data?.data?.refreshToken, 360);
    queryClient.invalidateQueries({ queryKey: ["user-tours"] });
  };

  return useMutation({ mutationFn, onSuccess });
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
const useAddProfile = (formData) => {
  const queryClient = useQueryClient();
  const mutationFn = async (formData) => {
    const response = await api.put("user/profile", formData);
    return response;
  };
  return useMutation({
    mutationFn,
    onSuccess: (response) => {
      console.log("its me", response);
      queryClient.invalidateQueries({ queryKey: ["user-data"] });
    },
    onError: (error) => {
      console.error("Error in add tour to basket:", error);
    },
  });
};

export { useSendOtp, useCheckOtp, useCheckout, useAddToBasket, useAddProfile };
