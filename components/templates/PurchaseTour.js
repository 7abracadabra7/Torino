"use client";

import styles from "./PurchaseTour.module.css";
import PassengerInfo from "../molecules/PassengerInfo";
import TourInfo from "../molecules/TourInfo";
import { useForm } from "react-hook-form";
import { useOrder } from "../../services/mutations";
import { toast } from "react-hot-toast";

const PurchaseTour = ({ tourId, router }) => {
  const { mutate } = useOrder();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = (data) => {
    // console.log("data:", data);
    mutate(data, {
      onSuccess: (response) => {
        toast.success(response.data.message);
        router.push("/");
      },
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <PassengerInfo
          register={register}
          control={control}
          setValue={setValue}
        />
        <TourInfo tourId={tourId} onSubmit={handleSubmit(onSubmit)} />
      </div>
    </div>
  );
};

export default PurchaseTour;
