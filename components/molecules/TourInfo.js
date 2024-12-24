"use client";

import Image from "next/image";
import { tourDays } from "../../utils/dateConvertor";
import { formatNumberWithCommas } from "../../utils/engToPersianNumber";
import styles from "./TourInfo.module.css";
import { useFetchTour } from "../../services/queries";

const TourInfo = ({ tourId, onSubmit }) => {
  if (!tourId) {
    return <div>در حال بارگذاری اطلاعات تور...</div>;
  }

  const { data, isError, isLoading } = useFetchTour(tourId);
  if (isError) {
    return <div>error</div>;
  }
  if (isLoading) {
    return <div>loading...</div>;
  }
  if (!data) {
    return <div>داده‌ای برای نمایش وجود ندارد.</div>;
  }

  //   const tourData = await fetch(
  //     `${process.env.NEXT_PUBLIC_BASE_URL}tour/${tourId}`
  //   );
  //   const result = await tourData.json();
  const { title, startDate, endDate, price } = data;
  const difference = tourDays(endDate, startDate);

  return (
    <div className={styles.tourInfo}>
      <div className={styles.top}>
        <h2 className={styles.title}>{title}</h2>
        <span>{`${difference}روز و ${difference - 1} شب`}</span>
      </div>
      <div className={styles.border}>
        <Image src="/images/border.png" width={307} height={2} alt="border" />
      </div>
      <div className={styles.bottom}>
        <p>قیمت نهایی</p>
        <h3>
          <span className={styles.price}>{formatNumberWithCommas(price)}</span>
          <p className={styles.toman}> تومان</p>
        </h3>
      </div>
      <button onClick={onSubmit} className={styles.button}>
        ثبت و خرید نهایی
      </button>
    </div>
  );
};

export default TourInfo;
