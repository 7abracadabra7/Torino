import styles from "../../styles/ErrorPage.module.css";
import Image from "next/image";
import Link from "next/link";

const PageNotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.errorBox}>
        <h1 className={styles.error}>صفحه موردنظر یافت نشد!</h1>
        <Link href="/" className={styles.returnBtn}>
          بازگشت به صفحه اصلی
        </Link>
      </div>
      <Image
        className={styles.img}
        src="/images/ErrorTV.png"
        width={555}
        height={555}
        alt="error image"
      />
    </div>
  );
};

export default PageNotFound;
