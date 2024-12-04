"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

const Header = () => {


  return (
    <div className={styles.headerContainer}>
      <Image src="/images/Torino.png" width={146} height={44} alt="logo" />
      <div className={styles.headerElements}>
        <ul className={styles.headerLinks}>
          <Link href="/">صفحه اصلی</Link>
          <Link href="/"> خدمات گردشگری</Link>
          <Link href="/about-us">درباره ما </Link>
          <Link href="/contact-us">تماس با ما </Link>
        </ul>
        <button className={styles.registerBtn}>
          <Image
            src="/images/profile.png"
            width={24}
            height={24}
            alt="profile image"
          />
          <p>ورود | ثبت نام</p>
        </button>
      </div>
    </div>
  );
};

export default Header;
