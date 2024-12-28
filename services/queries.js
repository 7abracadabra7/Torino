import { useQuery } from "@tanstack/react-query";
import api from "../config/api";
import QueryString from "qs";

const useSearchTour = (query) => {
  const url = "tour?" + QueryString.stringify(query);

  const queryFn = () => api.get(url);
  const queryKey = ["tour", query];

  return useQuery({ queryFn, queryKey, enabled: false });
};

const useFetchTour = (tourId) => {
  const queryKey = ["tour", tourId];

  const fetchTour = async (tourId) => {
    const result = await api.get(`tour/${tourId}`);
    return result.data;
  };

  return useQuery({
    queryKey,
    queryFn: () => fetchTour(tourId),
    enabled: !!tourId,
    onError: (error) => {
      console.log(error);
    },
  });
};

const useGetUserData = () => {
  const queryFn = () => api.get("user/profile");
  const queryKey = ["user-data"];

  return useQuery({
    queryFn,
    queryKey,
  });
};

const useGetBasket = () => {
  const queryFn = () => api.get("basket");
  const queryKey = ["user-basket"];

  return useQuery({ queryFn, queryKey });
};

const useGetUserTours = () => {
  const queryFn = () => api.get("user/tours");
  const queryKey = ["user-tours"];

  return useQuery({ queryFn, queryKey });
};

export {
  useSearchTour,
  useFetchTour,
  useGetUserData,
  useGetBasket,
  useGetUserTours,
};
