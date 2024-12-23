"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import { useModalContext } from "../../providers/contextProvider";
import { convertToPersianNumber } from "../../utils/engToPersianNumber";
import { useState } from "react";

const Header = () => {
  const { setIsOpen, user, setUser } = useModalContext();
  const phoneNumber = convertToPersianNumber(user);
  const [profileModal, setProfileModal] = useState(false);

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

        {!user ? (
          <button
            className={styles.registerBtn}
            onClick={() => setIsOpen(true)}
          >
            <Image
              src="/images/profile.png"
              width={24}
              height={24}
              alt="profile image"
            />
            <p>ورود | ثبت نام</p>
          </button>
        ) : (
          <button
            className={styles.phoneNumber}
            onClick={() => setProfileModal(!profileModal)}
          >
            <Image
              src="/images/profile.png"
              width={24}
              height={24}
              alt="profile image"
            />
            <p>{phoneNumber}</p>
            <Image
              src="/icons/arrow-down.png"
              width={24}
              height={24}
              alt="icon"
            />
          </button>
        )}
      </div>
      {profileModal && (
        <ul className={styles.profileModal}>
          <li className={styles.modalItem}>
            <div className={styles.modalImage}>
              <Image
                className={styles.image}
                src="/icons/profile2.png"
                width={24}
                height={24}
                alt="profile image"
              />
            </div>
            {phoneNumber}
          </li>
          <li className={styles.modalLinks}>
            <div className={styles.modalItem}>
              <Image
                src="/icons/profile3.png"
                width={24}
                height={24}
                alt="profile image"
              />
              <p>اطلاعات حساب کاربری</p>
            </div>

            <div className={styles.modalItem}>
              <Image
                src="/icons/logout.png"
                width={24}
                height={24}
                alt="profile image"
              />
              <p>خروج از حساب کاربری</p>
            </div>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
