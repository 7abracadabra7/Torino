import Image from "next/image";
import styles from "./MainPage.module.css";

const MainPage = () => {
  return (
    <div>
      <Image
        className={styles.image}
        src="/images/cover.png"
        width={1440}
        height={350}
        alt="cover page"
      />
      <h1 className={styles.torino}>
        <span>تورینو </span>برگزار کننده بهترین تور های داخلی و خارجی
      </h1>
    </div>
  );
};

export default MainPage;
