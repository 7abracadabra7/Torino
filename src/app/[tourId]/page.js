
import TourDetails from "../../../components/templates/TourDetails";

export default async function TourPage({ params }) {
  const { tourId } = params;

  const tourData = await fetch(`http://localhost:6500/tour/${tourId}`);
  const result = await tourData.json();



  return (
    <TourDetails result={result} />
  );
}
