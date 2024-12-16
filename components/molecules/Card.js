import styles from "./Card.module.css";
import dateConverter from "../../utils/dateConvertor";
import { formatNumberWithCommas } from "../../utils/engToPersianNumber";
import Link from "next/link";

function Card(props) {
  const { id,title, startDate, endDate, price, image, options } = props;
  const shamsiDate = dateConverter(startDate, endDate);
  const day = shamsiDate[2];
  const month = shamsiDate[1];
  const difference = shamsiDate[3];
  console.log(shamsiDate, day, difference);
  const aboutTour = `${month} ماه - ${difference}روزه - پرواز - ${options[1]} `;
  const fPrice = formatNumberWithCommas(price);
  const finalPrice = fPrice.toLocaleString();

  return (
    <div className={styles.container}>
      <img src={image} alt="image" />
      <div className={styles.details}>
        <div className={styles.info}>
          <h4>{title}</h4>
          <div>{`${aboutTour.slice(0, 35)} ...`}</div>
        </div>
        <div className={styles.reserveBox}>
          <Link href={`/${id}`}>رزرو</Link>
          <p className={styles.price}>{`${finalPrice} تومان`}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
