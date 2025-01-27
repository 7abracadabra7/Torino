"use client";
import React from "react";
import { useGetUserTours } from "../../../../services/queries";
import MyTours from "../../../../components/molecules/dashboardComponents/MyTours";

const page = () => {
  const { data } = useGetUserTours();
  console.log("response", data?.data);
  return <MyTours tours={data?.data} />;
};

export default page;
