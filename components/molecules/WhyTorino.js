import ImageSlider from "./ImageSlider";
import styles from "./WhyTorino.module.css";

const WhyTorino = () => {
  return (
    <div className={styles.container}>
      <div className={styles.right}>
        <div className={styles.title}>
          <div className={styles.questionMark}>
            <span>؟</span>
          </div>
          <h2>
            چرا <span className={styles.torino}>تورینو</span>؟
          </h2>
        </div>
        <h3 className={styles.subTitle}>تور طبیعت گردی و تاریخی</h3>
        <p className={styles.text}>
          اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در دل
          طبیعت چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید تورهای
          طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از جاذبه‌های گردشگری و
          آثار تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای فرهنگی و تاریخی
          را خریداری کنید.
        </p>
      </div>
      <div className={styles.left}>
        <ImageSlider />
      </div>
    </div>
  );
};

export default WhyTorino;
