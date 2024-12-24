"use client"
import React from "react";
import PurchaseTour from "../../../../components/templates/PurchaseTour";
import { useRouter } from "next/navigation";

const page = ({ params }) => {
  console.log("params", params);
  const router = useRouter();
  return (
    <div>
      <PurchaseTour tourId={params.tourId} router={router}/>
    </div>
  );
};

export default page;
