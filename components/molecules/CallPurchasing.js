import Image from "next/image";
import styles from "./CallPurchasing.module.css";

const CallPurchasing = () => {
  return (
    <div className={styles.container}>
      <div className={styles.right}>
        <div className={styles.info}>
          <h1>
            خرید تلفنی از <span className={styles.torino}>تورینو</span>
          </h1>
          <p>به هر کجا که میخواهید!</p>
        </div>
        <div>
          <Image
            className={styles.image}
            src="/images/mr.png"
            width={308}
            height={225}
            alt="man image"
          />
        </div>
      </div>
      <div className={styles.left}>
        <Image
          className={styles.poshtibani}
          src="/images/poshtibani.png"
          width={160}
          height={60}
          alt="phone number"
        />
        <button className={styles.button}>اطلاعات بیشتر</button>
      </div>
    </div>
  );
};

export default CallPurchasing;
