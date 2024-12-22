import styles from "./TorinoServices.module.css";
import Image from "next/image";

const TorinoServices = () => {
  return (
    <div className={styles.top}>
      <div className={styles.footerElement}>
        <Image src="/images/Group16.png" width={104} height={104} alt="image" />
        <div className={styles.elementText}>
          <h3 className={styles.footerTitle}>به صرفه ترین قیمت</h3>
          <p className={styles.footerText}>
            بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.
          </p>
        </div>
      </div>
      <div className={styles.footerElement}>
        <Image src="/images/Group17.png" width={104} height={104} alt="image" />
        <div className={styles.elementText}>
          <h3 className={styles.footerTitle}>پشتیبانی</h3>
          <p className={styles.footerText}>
            پشتیبانی و همراهی 24 ساعته در تمامی مراحل سفر شما.
          </p>
        </div>
      </div>
      <div className={styles.footerElement}>
        <Image src="/images/Group18.png" width={104} height={104} alt="image" />
        <div className={styles.elementText}>
          <h3 className={styles.footerTitle}>رضایت کاربران</h3>
          <p className={styles.footerText}>
            رضایت بیش از 10هزار کاربر از تور های ما.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TorinoServices;
