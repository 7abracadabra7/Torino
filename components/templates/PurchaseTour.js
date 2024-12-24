import styles from "./PurchaseTour.module.css";
import PassengerInfo from "../molecules/PassengerInfo";
import TourInfo from "../molecules/TourInfo";

const PurchaseTour = ({ tourId }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <PassengerInfo />
        <TourInfo tourId={tourId} />
      </div>
    </div>
  );
};

export default PurchaseTour;
