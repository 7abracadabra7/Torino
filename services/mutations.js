import { useMutation, useQueryClient } from "@tanstack/react-query";
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

  const onSuccess = () => {
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

export { useSendOtp, useCheckOtp, useCheckout, useAddToBasket };
