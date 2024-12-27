// "use client";
// import { useRouter } from "next/navigation";
import TourDetails from "../../../components/templates/TourDetails";
import { serverFetch } from "../../../services/http";
// import { useFetchTour } from "../../../services/queries";

export default async function TourPage({ params }) {
  // const router = useRouter();
  const { tourId } = params;

  const data = await serverFetch(`tour/${tourId}`, null, { cache: "no-store" });

  // const { data, isLoading } = useFetchTour(tourId);
  // if (isLoading) {
  //   return <div>Loading</div>;
  // }

  return (
    <TourDetails
      result={data}
      // router={router}
    />
  );
}
