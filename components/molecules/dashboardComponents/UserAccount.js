import Image from "next/image";
import styles from "./UserProfile.module.css";
import { convertToPersianNumber } from "../../../utils/engToPersianNumber";

const UserAccount = ({ userData }) => {
  return (
    <div className={styles.subContainer}>
      <div className={styles.rightSide}>
        <h2 className={styles.header}>اطلاعات حساب کاربری</h2>
        <div className={styles.fields}>
          <div className={styles.field}>
            <span className={styles.label}>شماره موبایل </span>
            <span className={styles.value}>
              {convertToPersianNumber(userData?.mobile)}
            </span>
          </div>
          <div className={styles.field}>
            <span className={styles.label}>ایمیل</span>
            <span className={styles.value}>{userData?.email || "-"}</span>
          </div>
        </div>
      </div>
      <div className={styles.leftSide}>
        <div className={styles.edit}>
          <Image src="/icons/edit.png" width={16} height={16} alt="edit icon" />
          <p>افزودن</p>
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
