"use client";

import { useEffect, useState } from "react";
import { useUserContext } from "../../providers/UserContextProvider";
import BankAccount from "../molecules/dashboardComponents/BankAccount";
import PersonalInfo from "../molecules/dashboardComponents/PersonalInfo";
import UserAccount from "../molecules/dashboardComponents/UserAccount";
import styles from "../molecules/dashboardComponents/UserProfile.module.css";
import { useForm } from "react-hook-form";
import { useAddProfile } from "../../services/mutations";
import { useGetUserData } from "../../services/queries";

const ProfilePage = () => {
  const { data } = useGetUserData();
  const [isEditing, setIsEditing] = useState({ index: 0 });
  const [userData, setUserData] = useState({
    mobile: data.data.mobile || "",
    email: data.data.email || "",
    firstName: data.data.firstName || "",
    lastName: data.data.lastName || "",
    gender: data.data.gender || "",
    birthDate: data.data.birthDate || "",
    nationalCode: data.data.nationalCode || "",
    payment: {
      shaba_code: data.data.shaba_code || "",
      debitCard_code: data.data.debitCard_code || "",
      accountIdentifier: data.data.accountIdentifier || "",
    },
  });



  const { mutate } = useAddProfile();
  useEffect(() => {
    mutate(userData, {
      onError: (err) => console.log(err),
    });
  }, [userData]);

  function onSubmit(formData) {
    setUserData((data) => ({ ...data, ...formData }));
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
