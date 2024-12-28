import styles from "./UserProfile.module.css";
import Image from "next/image";

const BankAccount = ({
  userData,
  isEditing,
  setIsEditing,
  register,
  onSubmit,
}) => {
  console.log(isEditing);
  return (
    <div className={styles.subContainer}>
      <div className={styles.topSide}>
        <div className={styles.rightSide}>
          <h2 className={styles.header}>اطلاعات حساب بانکی</h2>

          <div className={styles.fields}>
            <div className={styles.field}>
              {isEditing.index == 3 && !userData.shaba_code ? (
                <input
                  className={styles.input}
                  type="text"
                  {...register("shaba_code")}
                  placeholder="شماره شبا"
                />
              ) : (
                <div className={styles.valueBox}>
                  <span className={styles.label}>شماره شبا</span>

                  <span className={styles.value}>
                    {userData.shaba_code || "-"}
                  </span>
                </div>
              )}
            </div>
            <div className={styles.field}>
              {isEditing.index == 3 && !userData.debitCard_code ? (
                <input
                  className={styles.input}
                  type="text"
                  {...register("debitCard_code")}
                  placeholder="شماره کارت"
                />
              ) : (
                <div className={styles.valueBox}>
                  <span className={styles.label}>شماره کارت</span>

                  <span className={styles.value}>
                    {userData.debitCard_code || "-"}
                  </span>
                </div>
              )}
            </div>
            <div className={styles.field}>
              {isEditing.index == 3 && !userData.accountIdentifier ? (
                <input
                  className={styles.input}
                  type="text"
                  {...register("accountIdentifier")}
                  placeholder="شماره حساب"
                />
              ) : (
                <div className={styles.valueBox}>
                  <span className={styles.label}>شماره حساب</span>

                  <span className={styles.value}>
                    {userData.accountIdentifier || "-"}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className={styles.leftSide}>
          {isEditing.index != 3 && (
            <div className={styles.edit}>
              <Image
                src="/icons/edit.png"
                width={20}
                height={20}
                alt="edit icon"
              />
              <p onClick={() => setIsEditing({ index: 3 })}>ویرایش اطلاعات</p>
            </div>
          )}
        </div>
      </div>

      {isEditing.index == 3 && (
        <div className={styles.buttons}>
          <button onClick={onSubmit} className={styles.button}>
            تایید
          </button>
          <button onClick={() => setIsEditing(false)} className={styles.button}>
            انصراف
          </button>
        </div>
      )}
    </div>
  );
};

export default BankAccount;
