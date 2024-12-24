"use client";

import Image from "next/image";
import { Calendar, CalendarProvider } from "zaman";
import { useState } from "react";
import Select from "react-select";

import styles from "./PassengerInfo.module.css";
import { Controller, useForm } from "react-hook-form";

const PassengerInfo = () => {
  const [calendarValue, setCalendarValue] = useState();
  const [showCalendar, setShowCalendar] = useState(false);

  const genders = [
    { value: "man", label: "مرد" },
    { value: "woman", label: "زن" },
    { value: "other", label: "سایر" },
  ];

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const handleGenderChange = (selectedOption) => {
    console.log("Selected option:", selectedOption);
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      height: "50px",
      minHeight: "50px",
      width: "257px",
      marginTop: "23px",
      borderRadius: " 5px",
      color: "#00000080",
      fontSize: "14px",
      fontWeight: "400",
      borderColor: "#00000080",
      "&:hover": {
        borderColor: "#00000080",
      },
    }),
  };

  const submitHandler = (data) => {
    console.log("first");
  };
  return (
    <div className={styles.passengerInfo}>
      <div className={styles.titleBox}>
        <Image src="/icons/profile2.png" width={20} height={20} alt="icon" />
        <h2 className={styles.title}>مشخصات مسافر</h2>
      </div>
      <form onSubmit={handleSubmit(submitHandler)} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          {...register("name", { required: "ورود نام الزامی است" })}
          placeholder="نام و نام خانوادگی"
        />
        <input
          className={styles.input}
          type="text"
          {...register("nationalCode", {
            required: "کدملی خود را وارد کنید",
          })}
          placeholder="کدملی"
        />
        <Controller
          control={control}
          name="date"
          render={({ field }) => (
            <div className={styles.controller}>
              <input
                className={styles.input}
                type="text"
                value={calendarValue?.toLocaleDateString("fa-IR")}
                readOnly
                onClick={() => setShowCalendar((prev) => !prev)}
                placeholder="تاریخ تولد"
              />
              {showCalendar && (
                <div className={styles.calendarContainer}>
                  <CalendarProvider
                    {...field}
                    locale="fa"
                    direction="rtl"
                    defaultValue={new Date()}
                  >
                    <Calendar
                      defaultValue={calendarValue}
                      onChange={(e) => {
                        setCalendarValue(new Date(e.value));
                        setShowCalendar(false);
                      }}
                    />
                  </CalendarProvider>
                </div>
              )}
            </div>
          )}
        />

        <Controller
          control={control}
          name="date"
          render={({ field }) => (
            <Select
              styles={customStyles}
              {...field}
              options={genders}
              onChange={handleGenderChange}
              placeholder=" جنسیت"
              components={{ IndicatorSeparator: null }}
            />
          )}
        />
      </form>
    </div>
  );
};

export default PassengerInfo;
