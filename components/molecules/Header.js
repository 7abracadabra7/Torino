"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import { useModalContext } from "../../providers/contextProvider";
import { convertToPersianNumber } from "../../utils/engToPersianNumber";
import { useEffect, useState } from "react";
import { getCookie } from "../../utils/cookie";

const Header = () => {
  const { isOpen, setIsOpen, user, handleLogout } = useModalContext();
  useEffect(() => {
    const accessToken = getCookie("accessToken");
    if (!accessToken) {
      handleLogout();
    }
  }, [isOpen]);
  const phoneNumber = convertToPersianNumber(user);
  const [profileModal, setProfileModal] = useState(false);
  const handleLogoutFunction = () => {
    handleLogout();
    setProfileModal(false);
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);


  const handleLinkClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className={styles.headerContainer}>
      <Image
        className={styles.logo}
        src="/images/Torino.png"
        width={146}
        height={44}
        alt="logo"
      />
      <div className={styles.headerElements}>
        <Image
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={styles.hamburger}
          src="/icons/hamburger.png"
          width={30}
          height={30}
          alt="menu"
        />

        <ul
          onClick={() => setIsMenuOpen(false)}
          className={`${styles.headerLinks} ${isMenuOpen ? styles.show : ""}`}
        >
          
          <Link
            onClick={() => handleLinkClick(1)}
            className={activeIndex === 1 ? styles.active : ""}
            href="/"
          >
            صفحه اصلی
          </Link>
          <Link
            onClick={() => handleLinkClick(2)}
            className={activeIndex === 2 ? styles.active : ""}
            href="/"
          >
          
            خدمات گردشگری
          </Link>
          <Link
            onClick={() => handleLinkClick(3)}
            className={activeIndex === 3 ? styles.active : ""}
            href="/about-us"
          >
            درباره ما{" "}
          </Link>
          <Link
            onClick={() => handleLinkClick(4)}
            className={activeIndex === 4 ? styles.active : ""}
            href="/contact-us"
          >
            تماس با ما{" "}
          </Link>
        </ul>
        <div className={styles.leftSide}>
          <Link href="/checkout" className={styles.cartIcon}>
            <Image src="/icons/cart.png" width={35} height={35} alt="Cart" />
          </Link>
          {!user ? (
            <>
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
              <Image
                onClick={() => setIsOpen(true)}
                className={styles.signinBtn}
                src="/icons/signinBtn.png"
                width={40}
                height={40}
                alt="button"
              />
            </>
          ) : (
            <button
              className={styles.phoneNumber}
              onClick={() => setProfileModal(!profileModal)}
            >
              <Image
              className={styles.profileIcon}
                src="/images/profile.png"
                width={24}
                height={24}
                alt="profile image"
              />
              <p>{phoneNumber}</p>
              <Image
              className={styles.arrow}
                src="/icons/arrow-down.png"
                width={24}
                height={24}
                alt="icon"
              />
            </button>
          )}
        </div>
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
            <div
              onClick={() => setProfileModal(!profileModal)}
              className={styles.modalItem}
            >
              <Image
                src="/icons/profile3.png"
                width={24}
                height={24}
                alt="profile image"
              />
              <Link href="/dashboard">اطلاعات حساب کاربری</Link>
            </div>

            <div className={styles.modalItem}>
              <Image
                src="/icons/logout.png"
                width={24}
                height={24}
                alt="profile image"
              />
              <p className={styles.logoutBtn} onClick={handleLogoutFunction}>
                خروج از حساب کاربری
              </p>
            </div>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
