"use client";

import { useGetUserData } from "../services/queries";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function AuthProvider({ children }) {
  const router = useRouter();
  const { isPending, data } = useGetUserData();

  useEffect(() => {
    if (!isPending && !data?.data) router.push("/");
  }, [isPending]);

  if (isPending) return <p>Loading...</p>;

  return children;
}

export default AuthProvider;
