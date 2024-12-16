"use client";

import { useState } from "react";
import toast from "react-hot-toast";

import styles from "./OTP.module.css";

import { useSendOtp } from "../../services/mutations";
import { isValidMobile } from "../../utils/validation";

function SendOTPForm({ mobile, setMobile, setStep, setExpired }) {
  const [error, setError] = useState("");

  const { isPending, mutate } = useSendOtp();

  const sendOtpHandler = (event) => {
    event.preventDefault();

    if (isPending) return;
    if (!isValidMobile(mobile)) return setError("شماره معتبر وارد کنید!");
    setError("");

    mutate(
      { mobile },
      {
        onSuccess: (data) => {
          toast.success(data?.data?.message);
          toast(data?.data?.code);
          console.log("hi", data?.data.code);
          setStep(2);
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>ورود به تورینو</h4>
      <form className={styles.form} onSubmit={sendOtpHandler}>
        <label>شماره موبایل خود را وارد کنید</label>
        <input
          className={styles.input}
          type="text"
          placeholder="۳۳۱۳****۰۹۱۲"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        {!!error && <p className={styles.error}>{error}</p>}
        <button className={styles.button} type="submit">
          ارسال کد تایید
        </button>
      </form>
    </div>
  );
}

export default SendOTPForm;
