import React from "react";
import styles from "./Transactions.module.css";
import { formatNumberWithCommas } from "../../../utils/engToPersianNumber";

const Transactions = ({ transactions }) => {
  console.log(transactions?.data, "transa");
  const convertDate = (date) => {
    const persianDate = new Date(date).toLocaleString("fa-IR");
    return persianDate;
  };
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <td>تاریخ و ساعت</td>
          <td>مبلغ(تومان)</td>
          <td>نوع تراکنش</td>
        </tr>
      </thead>
      <tbody className={styles.body}>
        {transactions?.data.map((transaction) => (
          <tr>
            <td>{convertDate(transaction.createdAt)}</td>
            <td>{formatNumberWithCommas(transaction.amount)}</td>
            <td>ثبت نام در تور گردشگری</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  //   return transactions?.data.map((transaction) => (
  //     <Transaction transaction={transaction} />
  //   ));
};

export default Transactions;
