"use client";

import styles from "./PurchaseTour.module.css";
import PassengerInfo from "../molecules/PassengerInfo";
import TourInfo from "../molecules/TourInfo";
import { useForm } from "react-hook-form";
import { useCheckout } from "../../services/mutations";
import { toast } from "react-hot-toast";
import { useGetBasket } from "../../services/queries";
import EmptyCart from "../organisms/EmptyCart";

const PurchaseTour = ({ tourId, router }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm();
  const { mutate } = useCheckout();
  const { data, isLoading, isError } = useGetBasket();

  if (!data) {
    return <EmptyCart />;
  }

  const onSubmit = (data) => {
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
        <TourInfo
          data={data?.data}
          isError={isError}
          isLoading={isLoading}
          onSubmit={handleSubmit(onSubmit)}
        />
      </div>
    </div>
  );
};

export default PurchaseTour;
