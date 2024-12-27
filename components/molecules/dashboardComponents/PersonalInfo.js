import styles from "./UserProfile.module.css";
import Image from "next/image";

const PersonalInfo = ({ userData }) => {
  return (
    <div className={styles.subContainer}>
      <div className={styles.rightSide}>
        <h2 className={styles.header}>اطلاعات شخصی</h2>
        <div className={styles.fields}>
          <div className={styles.field}>
            <span className={styles.label}>نام و نام خانوادگی</span>
            <span className={styles.value}>{userData?.fullName || "-"}</span>
          </div>
          <div className={styles.field}>
            <span className={styles.label}>کدملی</span>
            <span className={styles.value}>
              {userData?.nationalCode || "-"}
            </span>
          </div>
          <div className={styles.field}>
            <span className={styles.label}>جنسیت</span>
            <span className={styles.value}>{userData?.gender || "-"}</span>
          </div>
          <div className={styles.field}>
            <span className={styles.label}>تاریخ تولد</span>
            <span className={styles.value}>{userData?.birthDate || "-"}</span>
          </div>
        </div>
      </div>
      <div className={styles.leftSide}>
        <div className={styles.edit}>
          <Image src="/icons/edit.png" width={20} height={20} alt="edit icon" />
          <p>ویرایش اطلاعات</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
