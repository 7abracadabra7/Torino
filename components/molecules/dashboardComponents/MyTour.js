import Image from "next/image";
import styles from "./MyTour.module.css";
import { translateVehicleName } from "../../../utils/translateVehicleName";
import dateConverter from "../../../utils/dateConvertor";
import engToPersianNumber, {
  convertToPersianNumber,
  formatNumberWithCommas,
} from "../../../utils/engToPersianNumber";
const MyTour = ({ tour }) => {
  console.log("lightsonme", tour);
  let iconImage;
  if (
    tour.fleetVehicle === "Van" ||
    tour.fleetVehicle === "SUV" ||
    tour.fleetVehicle === "Bus"
  ) {
    iconImage = "bus.png";
  } else if (tour.fleetVehicle === "Airplane") {
    iconImage = "airplane.png";
  }

  const start = dateConverter(tour.startDate);
  const end = dateConverter(tour.endDate);
  const startDay = start[2];
  const startMonth = start[1];
  const startYear = start[0];
  const endDay = end[2];
  const endMonth = end[1];
  const endYear = end[0];

  return (
    <div className={styles.container}>
      <div className={styles.upSide}>
        <div className={styles.top}>
          <div className={styles.flex}>
            <Image src="/icons/sun-fog.png" width={24} height={24} alt="icon" />
            <p>{tour.title}</p>
          </div>

          <div className={styles.flex}>
            <Image
              src={`/icons/${iconImage}`}
              width={24}
              height={24}
              alt="icon"
            />
            <p>سفر با {translateVehicleName(tour.fleetVehicle)}</p>
          </div>
          {tour.availableSeats === 0 ? (
            <p className={styles.finished}>به اتمام رسیده</p>
          ) : (
            <p className={styles.notFinished}>در حال برگزاری</p>
          )}
        </div>
        <div className={styles.middle}>
          <div className={styles.flex}>
            <p className={styles.boldText}>تاریخ رفت</p>
            <span className={styles.normalText}>
              {`${startDay} ${startMonth} ${startYear}`}
            </span>
          </div>
          <div className={styles.flex}>
            <p className={styles.boldText}>تاریخ برگشت</p>
            <span className={styles.normalText}>
              {`${endDay} ${endMonth} ${endYear}`}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p style={{ marginLeft: "7px" }} className={styles.normalText}>مبلغ پرداخت شده:</p>
        <span style={{ marginLeft: "3px" }} className={styles.boldText}>
          {formatNumberWithCommas(tour.price)}
        </span>
        <p className={styles.normalText}>تومان</p>
      </div>
    </div>
  );
};

export default MyTour;
