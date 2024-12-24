"use client";

import Image from "next/image";
import { Calendar, CalendarProvider } from "zaman";
import { useState } from "react";
import Select from "react-select";

import styles from "./PassengerInfo.module.css";
import { Controller } from "react-hook-form";

const PassengerInfo = ({ register, control, setValue }) => {
  const [calendarValue, setCalendarValue] = useState();
  const [showCalendar, setShowCalendar] = useState(false);
  const [gender, setGender] = useState();

  const genders = [
    { value: "man", label: "مرد" },
    { value: "woman", label: "زن" },
    { value: "other", label: "سایر" },
  ];

  // const {
  //   register,
  //   handleSubmit,
  //   control,
  //   formState: { errors },
  // } = useForm();

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

  return (
    <div className={styles.passengerInfo}>
      <div className={styles.titleBox}>
        <Image src="/icons/profile2.png" width={20} height={20} alt="icon" />
        <h2 className={styles.title}>مشخصات مسافر</h2>
      </div>
      <form className={styles.form}>
        <input
          className={styles.input}
          type="text"
          {...register("fullName", { required: "ورود نام الزامی است" })}
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
        {/* <Controller
          control={control}
          name="date"
          render={({ field: { onChange } }) => (
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
                    locale="fa"
                    direction="rtl"
                    defaultValue={new Date()}
                  >
                    <Calendar
                      {...field}
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
        /> */}

        <input
          className={styles.input}
          type="text"
          {...register("birthDate", { required: "تاریخ تولد را وارد کنید" })}
          value={calendarValue?.toLocaleString("fa-IR") || ""}
          readOnly
          onClick={() => setShowCalendar((prev) => !prev)}
          placeholder="تاریخ تولد"
        />
        {showCalendar && (
          <div className={styles.calendarContainer}>
            <CalendarProvider
              locale="fa"
              direction="rtl"
              defaultValue={new Date()}
            >
              <Calendar
                defaultValue={calendarValue}
                onChange={(e) => {
                  setCalendarValue(new Date(e.value));
                  setValue("birthDate", new Date(e.value).toISOString());
                  setShowCalendar(false);
                }}
                onClick={(e) => e.preventDefault()}
              />
            </CalendarProvider>
          </div>
        )}

        <Controller
          control={control}
          name="gender"
          render={({ field: { onChange, value } }) => (
            <Select
              styles={customStyles}
              options={genders}
              onChange={(selectedOption) => {
                onChange(selectedOption);
              }}
              placeholder="جنسیت"
              components={{ IndicatorSeparator: null }}
              value={value}
            />
          )}
        />
      </form>
    </div>
  );
};

export default PassengerInfo;
