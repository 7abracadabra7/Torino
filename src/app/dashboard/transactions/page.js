"use client";
import { useGetTransactions } from "../../../../services/queries";
import Transactions from "../../../../components/molecules/dashboardComponents/Transactions";

const page = () => {
  const { data } = useGetTransactions();

  return <Transactions transactions={data} />;
};

export default page;
