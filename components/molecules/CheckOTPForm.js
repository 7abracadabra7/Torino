"use client";

import { useState } from "react";
import OtpInput from "react18-input-otp";
import styles from "./OTP.module.css";

import { useCheckOtp } from "../../services/mutations";
import { setCookie } from "../../utils/cookie";
import { useModalContext } from "../../providers/contextProvider";

function CheckOTPForm({ mobile, setStep, setIsOpen }) {
  const [code, setCode] = useState("");

  const { isPending, mutate } = useCheckOtp();
  const { setUser, handleLogin } = useModalContext();

  const checkOtpHandler = (event) => {
    event.preventDefault();

    if (isPending) return;

    mutate(
      { mobile, code },
      {
        onSuccess: (data) => {
          setCookie("accessToken", data?.data?.accessToken, 30);
          setCookie("refreshToken", data?.data?.refreshToken, 365);
          setIsOpen(false);
          // setUser(mobile);
          handleLogin(mobile);
          setStep(1);
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };

  const changeHandler = (otp) => {
    setCode(otp);
  };

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>کد تایید را وارد کنید.</h4>
      <form className={styles.form} onSubmit={checkOtpHandler}>
        <label>کد تایید به شماره موبایل {mobile} ارسال شد.</label>
        <div className={styles.otpContainer}>
          <OtpInput
            value={code}
            onChange={changeHandler}
            numInputs={6}
            shouldAutoFocus={true}
            inputStyle={{
              border: "1px solid silver",
              borderRadius: "5px",
              width: "58px",
              height: "53px",
              height: "45px",
              marginRight: "5px",
            }}
          />
        </div>
        <button className={styles.button} type="submit">
          ورود به تورینو
        </button>
      </form>
    </div>
  );
}

export default CheckOTPForm;
