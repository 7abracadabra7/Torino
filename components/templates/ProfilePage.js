"use client";

import { useUserContext } from "../../providers/UserContextProvider";
import BankAccount from "../molecules/dashboardComponents/BankAccount";
import PersonalInfo from "../molecules/dashboardComponents/PersonalInfo";
import UserAccount from "../molecules/dashboardComponents/UserAccount";
import styles from "../molecules/dashboardComponents/UserProfile.module.css";

const ProfilePage = () => {
  const userData = useUserContext();

  return (
    <div className={styles.container}>
      <UserAccount userData={userData} />
      <PersonalInfo userData={userData} />
      <BankAccount userData={userData} />
    </div>
  );
};

export default ProfilePage;
