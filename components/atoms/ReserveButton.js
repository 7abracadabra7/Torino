"use client";

import { useAddToBasket } from "../../services/mutations";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import styles from "./ReserveButton.module.css";
import { useModalContext } from "../../providers/contextProvider";
import { getCookie, setCookie } from "../../utils/cookie";

function ReserveButton({ id }) {
  const { mutate, isPending } = useAddToBasket();
  const router = useRouter();
  const { setIsOpen } = useModalContext();

  const cartHandler = () => {
    if (isPending) return;
    const accessToken = getCookie("accessToken");
    if (!accessToken) {
      setIsOpen(true);
    }

    mutate(id, {
      onSuccess: (data) => {
        toast.success(data.data.message);
        router.push("/checkout");
      },
      onError: (error) => {
        console.log(error);
        if (error.message == "Invalid token") {
          setCookie("accessToken", "", 0);
          setCookie("refreshToken", "", 0);
          setIsOpen(true);
        }
      },
    });
  };

  return (
    <div>
      <button onClick={cartHandler} className={styles.reserveBtn}>
        رزرو و خرید
      </button>
    </div>
  );
}

export default ReserveButton;
