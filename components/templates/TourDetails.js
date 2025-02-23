// "use client";
import Image from "next/image";
import styles from "./TourDetails.module.css";
import dateConverter from "../../utils/dateConvertor";
import { translateVehicleName } from "../../utils/translateVehicleName";
import { translateCityName } from "../../utils/translateCityName";
import { tourDays } from "../../utils/dateConvertor";
import {
  convertToPersianNumber,
  formatNumberWithCommas,
} from "../../utils/engToPersianNumber";
// import { useAddToBasket } from "../../services/mutations";
import ReserveButton from "../atoms/ReserveButton";
// import { useRouter } from "next/router";

const TourDetails = ({ result }) => {
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
  } = result;

  // const { mutate } = useAddToBasket();

  // const addToBasket = () => {
  //   mutate(id, {
  //     onSuccess: (response) => {
  //       console.log(response);
  //       router.push(`/${id}/purchase-tour`);
  //     },
  //   });
  // };

  const start = dateConverter(startDate);
  const end = dateConverter(endDate);

  const startDay = start[2];
  const startMonth = start[1];
  const startYear = start[0];
  const endDay = end[2];
  const endMonth = end[1];
  const endYear = end[0];
  const difference = tourDays(endDate, startDate);
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.topBox}>
          <Image
            className={styles.cityImage}
            src={image}
            width={397}
            height={265}
            alt={`${title}`}
          />
          <div className={styles.left}>
            <div className={styles.top}>
              <h3> {title}</h3>
              <p>{`${convertToPersianNumber(
                difference
              )} روز و ${convertToPersianNumber(difference - 1)} شب`}</p>
              <div className={styles.topInfo}>
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
                  <Image
                    width={20}
                    height={20}
                    alt="icon"
                    src="/icons/map.png"
                  />
                  <span>برنامه سفر</span>
                </div>
                <div>
                  <Image
                    width={20}
                    height={20}
                    alt="icon"
                    src="/icons/medal.png"
                  />
                  <span>تضمین کیفیت</span>
                </div>
              </div>
            </div>
            <div className={styles.bottom}>
              <h3>
                <span className={styles.price}>
                  {formatNumberWithCommas(price)}
                </span>
                <p className={styles.toman}> تومان</p>
              </h3>

              <ReserveButton id={id} />
            </div>
          </div>
        </div>

        <div className={styles.bottomBox}>
          <div className={styles.bottomInfo}>
            <div className={styles.bottomTitle}>
              <Image
                src="/icons/routing-2.png"
                width={20}
                height={20}
                alt="icon"
              />
              <span className={styles.itemTitle}>مبدا</span>
            </div>

            <p className={styles.item}>{translateCityName(origin?.name)}</p>
          </div>
          <div className={styles.bottomInfo}>
            <div className={styles.bottomTitle}>
              <Image
                src="/icons/calendar.png"
                width={20}
                height={20}
                alt="icon"
              />
              <span className={styles.itemTitle}>تاریخ رفت</span>
            </div>
            <p
              className={styles.item}
            >{`${startDay} ${startMonth} ${startYear}`}</p>
          </div>

          <div className={styles.bottomInfo}>
            <div className={styles.bottomTitle}>
              <Image
                src="/icons/calendar.png"
                width={20}
                height={20}
                alt="icon"
              />
              <span className={styles.itemTitle}>تاریخ برگشت</span>
            </div>
            <p className={styles.item}>{`${endDay} ${endMonth} ${endYear}`}</p>
          </div>

          <div className={styles.bottomInfo}>
            <div className={styles.bottomTitle}>
              <Image src="/icons/bus.png" width={20} height={20} alt="icon" />
              <span className={styles.itemTitle}> حمل و نقل</span>
            </div>
            <p className={styles.item}>{translateVehicleName(fleetVehicle)}</p>
          </div>

          <div className={styles.bottomInfo}>
            <div className={styles.bottomTitle}>
              <Image src="/icons/bus.png" width={20} height={20} alt="icon" />
              <span className={styles.itemTitle}> ظرفیت</span>
            </div>
            <p className={styles.item}>
              حداکثر {convertToPersianNumber(availableSeats)} نفر
            </p>
          </div>

          <div className={styles.bottomInfo}>
            <div className={styles.bottomTitle}>
              <Image
                src="/icons/security.png"
                width={20}
                height={20}
                alt="icon"
              />
              <span className={styles.itemTitle}> بیمه</span>
            </div>
            <p className={styles.item}>
              بیمه {insurance ? <span>دارد</span> : <span>ندارد</span>}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetails;
