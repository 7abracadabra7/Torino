"use client";

import { useState } from "react";
import { useUserContext } from "../../providers/UserContextProvider";
import BankAccount from "../molecules/dashboardComponents/BankAccount";
import PersonalInfo from "../molecules/dashboardComponents/PersonalInfo";
import UserAccount from "../molecules/dashboardComponents/UserAccount";
import styles from "../molecules/dashboardComponents/UserProfile.module.css";
import { useForm } from "react-hook-form";

const ProfilePage = () => {
  const data = useUserContext();
  const [isEditing, setIsEditing] = useState({ index: 0 });
  const [userData, setUserData] = useState({
    mobile: data.mobile || "",
    email: data.email || "",
    firstName: data.firstName || "",
    lastName: data.lastName || "",
    gender: data.gender || "",
    birthDate: data.birthDate || "",
    nationalCode: data.nationalCode || "",
    payment: {
      shaba_code: data.shaba_code || "",
      debitCard_code: data.debitCard_code || "",
      accountIdentifier: data.accountIdentifier || "",
    },
  });
  console.log(isEditing);
  function onSubmit(data) {
    console.log("first", data);
    // setIsEditing(false);
  }

  const { register, handleSubmit } = useForm();

  return (
    <div className={styles.container}>
      <UserAccount
        userData={userData}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        register={register}
        onSubmit={handleSubmit(onSubmit)}
      />
      <PersonalInfo
        userData={userData}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        register={register}
        onSubmit={handleSubmit(onSubmit)}
      />
      <BankAccount
        userData={userData}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        register={register}
        onSubmit={handleSubmit(onSubmit)}
      />
    </div>
  );
};

export default ProfilePage;
