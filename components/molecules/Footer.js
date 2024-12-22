import Image from "next/image";
import styles from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className={styles.footerContainer}>
        <div className={styles.bottom}>
          <div className={styles.right}>
            <Link className={styles.boldText} href="/">
              تورینو
            </Link>
            <Link className={styles.boldText} href="/">
              خدمات مشتریان
            </Link>
            <Link className={styles.normalText} href="/">
              درباره ما
            </Link>
            <Link className={styles.normalText} href="/">
              پشتیبانی آنلاین{" "}
            </Link>
            <Link className={styles.normalText} href="/">
              تماس با ما{" "}
            </Link>
            <Link className={styles.normalText} href="/">
              راهنمای خرید{" "}
            </Link>
            <Link className={styles.normalText} href="/">
              چرا تورینو{" "}
            </Link>
            <Link className={styles.normalText} href="/">
              راهنمای استرداد{" "}
            </Link>
            <Link className={styles.normalText} href="/">
              بیمه مسافرتی{" "}
            </Link>
            <Link className={styles.normalText} href="/">
              پرسش و پاسخ{" "}
            </Link>
          </div>
          <div className={styles.left}>
            <div className={styles.leftInfo}>
              <Image
                src="/images/Torino.png"
                width={146}
                height={44}
                alt="logo"
              />
              <p className={styles.phone}>تلفن پشتیبانی:0218574</p>
              <div className={styles.images}>
                <Image
                  src="/images/airline.png"
                  width={78}
                  height={74}
                  alt="logo"
                />
                <Image
                  src="/images/passenger-rights.png"
                  width={71}
                  height={74}
                  alt="logo"
                />
                <Image
                  src="/images/ecunion.png"
                  width={66}
                  height={72}
                  alt="logo"
                />
                <Image
                  src="/images/samandehi.png"
                  width={67}
                  height={74}
                  alt="logo"
                />

                <Image
                  src="/images/aira.png"
                  width={68}
                  height={74}
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyRight}>
        <p>کلیه حقوق این وب سایت متعلق به تورینو میباشد.</p>
      </div>
    </div>
  );
};

export default Footer;
