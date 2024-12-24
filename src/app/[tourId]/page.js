"use client";
import { useRouter } from "next/navigation";
import TourDetails from "../../../components/templates/TourDetails";
import { useFetchTour } from "../../../services/queries";

export default function TourPage({ params }) {
  const router = useRouter();
  const { tourId } = params;

  const { data, isLoading } = useFetchTour(tourId);
  // const tourData = await fetch(`http://localhost:6500/tour/${tourId}`);
  // const result = await tourData.json();
  if (isLoading) {
    return <div>Loading</div>;
  }

  return <TourDetails result={data} router={router} />;
}
