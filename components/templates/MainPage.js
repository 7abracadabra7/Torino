import Image from "next/image";
import styles from "./MainPage.module.css";
import Tours from "../organisms/Tours";

const MainPage = async () => {
  const response = await fetch(`http://localhost:6500/tour`, {
    cache: "no-cache",
  });
  const tours = await response.json();
  tours && console.log(tours);
  return (
    <div>
      <Image
        className={styles.image}
        src="/images/cover.png"
        width={1440}
        height={350}
        alt="cover page"
      />
      <div className={styles.container}>
        <h1 className={styles.torino}>
          <span>تورینو </span>برگزار کننده بهترین تور های داخلی و خارجی
        </h1>
        <Tours tours={tours} />
      </div>
    </div>
  );
};

export default MainPage;
