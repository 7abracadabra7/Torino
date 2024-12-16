"use client";

import { useState } from "react";
import SendOTPForm from "../molecules/SendOTPForm";
import CheckOTPForm from "../molecules/CheckOTPForm";
import ModalContainer from "../molecules/ModalContainer";
import { useModalContext } from "../../providers/contextProvider";

function AuthForm() {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const { isOpen, setIsOpen } = useModalContext();
  const [expired, setExpired] = useState();
  expired && console.log("time:", expired);
  return (
    <div>
      {step === 1 && (
        <ModalContainer setIsOpen={setIsOpen} isOpen={isOpen}>
          <SendOTPForm
            mobile={mobile}
            setMobile={setMobile}
            setStep={setStep}
            setExpired={setExpired}
          />
        </ModalContainer>
      )}
      {step === 2 && (
        <ModalContainer setIsOpen={setIsOpen} isOpen={isOpen}>
          <CheckOTPForm
            mobile={mobile}
            setStep={setStep}
            setIsOpen={setIsOpen}
          />
        </ModalContainer>
      )}
    </div>
  );
}

export default AuthForm;
