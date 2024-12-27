"use client";
import React from "react";
import PurchaseTour from "../../../components/templates/PurchaseTour";
import { useRouter } from "next/navigation";

const page = () => {
  // console.log("params", params);
  const router = useRouter();

  return (
    <div>
      <PurchaseTour router={router} />
    </div>
  );
};

export default page;
