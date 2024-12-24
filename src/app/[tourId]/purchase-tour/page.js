import React from "react";
import PurchaseTour from "../../../../components/templates/PurchaseTour";

const page = ({ params }) => {
  console.log("params", params);
  return (
    <div>
      <PurchaseTour tourId={params.tourId} />
    </div>
  );
};

export default page;
