import React from "react";
import styles from "./EmptyCart.module.css";

const EmptyToursPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src="/images/emptyTourList.png"
          alt="Empty Cart"
          className={styles.image}
        />
      </div>
      <h2 className={styles.title}>لیست تورها خالی است</h2>
      <p className={styles.message}>شما هنوز هیچ توری خریداری نکرده اید.</p>
    </div>
  );
};

export default EmptyToursPage;
