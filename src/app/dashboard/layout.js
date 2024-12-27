"use client";

import Link from "next/link";
import AuthProvider from "../../../providers/AuthProvider";
import styles from "../../../styles/ProfileLayout.module.css";
import UserContextProvider from "../../../providers/UserContextProvider";
import { useState } from "react";

const ProfileLayout = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleLinkClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <AuthProvider>
      <UserContextProvider>
        <div className={styles.profileLayout}>
          <ul className={styles.sidebar}>
            <li
              className={activeIndex === 0 ? styles.active : styles.sidebarItem}
            >
              <div>
                <Link onClick={() => handleLinkClick(0)} href="/dashboard">
                  پروفایل من
                </Link>
              </div>
            </li>
            <li
              className={activeIndex === 1 ? styles.active : styles.sidebarItem}
            >
              <div>
                <Link
                  onClick={() => handleLinkClick(1)}
                  href="/dashboard/my-tours"
                >
                  تور ها من
                </Link>
              </div>
            </li>
            <li
              className={activeIndex === 2 ? styles.active : styles.sidebarItem}
            >
              <div>
                <Link
                  onClick={() => handleLinkClick(2)}
                  href="/dashboard/transactions"
                >
                  تراکنش ها
                </Link>
              </div>
            </li>
          </ul>
          <main className={styles.mainContent}>{children}</main>
        </div>
      </UserContextProvider>
    </AuthProvider>
  );
};

export default ProfileLayout;
