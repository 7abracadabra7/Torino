// "use client";
// import { useRouter } from "next/navigation";
import { notFound } from "next/navigation";
import TourDetails from "../../../components/templates/TourDetails";
import { serverFetch } from "../../../services/http";
// import { useFetchTour } from "../../../services/queries";

export default async function TourPage({ params }) {
  const { tourId } = params;

  const data = await serverFetch(`tour/${tourId}`, null, { cache: "no-store" });
  console.log("kjkjkjppp", data.message);
  if (data.message == "تور درخواستی وجود ندارد!") {
    notFound();
  } else {
    return <TourDetails result={data} />;
  }
}
