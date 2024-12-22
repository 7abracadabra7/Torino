import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useSearchTour = (originId, destinationId, startDate) => {
  console.log("first");
  const queryKey = ["tours", { originId, destinationId, startDate }];
  const fetchTours = async (originId, destinationId, startDate) => {
    const params = new URLSearchParams();
    if (originId) params.append("originId", originId);
    if (destinationId) params.append("destinationId", destinationId);
    if (startDate) params.append("startDate", startDate);
    console.log(`${params.toString()}`);
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}tour/${params.toString()}`
    );
    return result;
  };

  // http://localhost:6500/tour?destinationId=9&originId=1&startDate=2024-11-20T00%3A00%3A00.000Z&endDate=2024-12-25T00%3A00%3A00.000Z
  return useQuery({
    queryKey,
    queryFn: () => fetchTours(originId, destinationId, startDate),
  });
};
