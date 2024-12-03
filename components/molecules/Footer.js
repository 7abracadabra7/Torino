import Image from "next/image";
import styles from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
    <div className={styles.footerContainer}>
      <div className={styles.top}>
        <div className={styles.footerElement}>
          <Image
            src="/images/Group16.png"
            width={104}
            height={104}
            alt="image"
          />
          <div className={styles.elementText}>
            <h3 className={styles.footerTitle}>به صرفه ترین قیمت</h3>
            <p className={styles.footerText}>
              بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.
            </p>
          </div>
        </div>
        <div className={styles.footerElement}>
          <Image
            src="/images/Group17.png"
            width={104}
            height={104}
            alt="image"
          />
          <div className={styles.elementText}>
            <h3 className={styles.footerTitle}>پشتیبانی</h3>
            <p className={styles.footerText}>
              پشتیبانی و همراهی 24 ساعته در تمامی مراحل سفر شما.{" "}
            </p>
          </div>
        </div>
        <div className={styles.footerElement}>
          <Image
            src="/images/Group18.png"
            width={104}
            height={104}
            alt="image"
          />
          <div className={styles.elementText}>
            <h3 className={styles.footerTitle}>رضایت کاربران</h3>
            <p className={styles.footerText}>
              رضایت بیش از 10هزار کاربر از تور های ما.{" "}
            </p>
          </div>
        </div>
      </div>
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
      
              <Image src="/images/aira.png" width={68} height={74} alt="logo" />
           
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
