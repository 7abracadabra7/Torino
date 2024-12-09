import Image from "next/image";
import styles from "../../../styles/tourDetails.module.css";
import dateConverter from "../../../utils/dateConvertor";
import Link from "next/link";

export default async function TourPage({ params }) {
  const { tourId } = params;

  const tourData = await fetch(`http://localhost:6500/tour/${tourId}`);
  const result = await tourData.json();
  console.log(result.title);

  const {
    id,
    title,
    startDate,
    endDate,
    fleetVehicle,
    availableSeats,
    insurance,
    price,
    origin,
    image,
    options,
  } = result;
  const shamsiDate = dateConverter(startDate, endDate);
  const day = shamsiDate[2];
  const month = shamsiDate[1];
  const year = shamsiDate[0];
  const difference = shamsiDate[3];

  return (
    <div className={styles.container}>
      <div className={styles.topBox}>
      <Image src={image} width={397} height={265} alt={`${title}`} />
      <div className={styles.left}>
        <div className={styles.top}>
        <h3> {title}</h3>
        <p>{`${difference}روز و ${difference - 1}`}</p>
        <div>
          <div>
            <Image
              width={20}
              height={20}
              alt="icon"
              src="/icons/user-tick.png"
            />
            <span>تورلیدر از مبدا</span>
          </div>
          <div>
            <Image width={20} height={20} alt="icon" src="/icons/map.png" />
            <span>برنامه سفر</span>
          </div>
          <div>
            <Image width={20} height={20} alt="icon" src="/icons/medal.png" />
            <span>تضمین کیفیت</span>
          </div>
        </div>

        </div>
        <div className={styles.bottom}> 
          <h3><span>{price}</span>تومان</h3>
          <Link href='/'>رزرو و خرید</Link>
        </div>
      </div>

      </div>
      <div className={styles.bottomBox}>
<div>
  <div>
    <Image src="/icons/routing-2.png" width={20} height={20} alt="icon"/>
    <span className={styles.itemTitle}>مبدا</span>
  </div>
  <p className={styles.item}>
    {origin}
  </p>
</div>
<div>
<div>
    <Image src="/icons/calendar.png" width={20} height={20} alt="icon"/>
    <span className={styles.itemTitle}>تاریخ رفت</span>
  </div>
  <p >
    {`${day} ${month} ${year}`}
  </p>
</div>
</div>
<div></div>
<div></div>
<div></div>
<div></div>

      </div>
    </div>
  );
}
