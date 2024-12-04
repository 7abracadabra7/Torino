import styles from "./Card.module.css";
import dateConverter from "../../utils/dateConvertor";
import { convertToPersianNumber } from "../../utils/engToPersianNumber";

function Card(props) {
  const { title, startDate, endDate, price, image, options } = props;
  const shamsiDate = dateConverter(startDate, endDate);
  const day = shamsiDate[2];
  const month = shamsiDate[1];
  const difference = shamsiDate[3];
  console.log(shamsiDate, day, difference);
  const aboutTour = `${month} ماه - ${difference}روزه - پرواز - ${options[1]} `;
  const fPrice = convertToPersianNumber(price)
  const finalPrice = fPrice.toLocaleString();
  console.log("ffffffffffffffffffff", finalPrice);

  return (
    <div className={styles.container}>
      <img src={image} alt="image" />
      <div className={styles.details}>
        <div className={styles.info}>
          <h4>{title}</h4>
          <div>{`${aboutTour.slice(0, 35)} ...`}</div>
        </div>
        <div className={styles.reserveBox}>
          <button>رزرو</button>
          <p className={styles.price}>{`${finalPrice} تومان`}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
