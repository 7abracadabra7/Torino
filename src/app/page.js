import MainPage from "../../components/templates/MainPage";

import "./globals.css";
import { serverFetch } from "../../services/http";

export default async function Home({ searchParams }) {
  const response = await serverFetch("tour", searchParams, {
    cache: "no-store",
  });

  return (
    <>
      <MainPage tours={response} />
    </>
  );
}
