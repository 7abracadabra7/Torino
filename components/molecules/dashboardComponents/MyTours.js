import React from "react";
import MyTour from "./MyTour";

const MyTours = ({ tours }) => {
  return tours?.map((tour) => <MyTour tour={tour} />);
};

export default MyTours;
