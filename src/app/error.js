"use client"
import styles from "../../styles/ErrorPage.module.css";
import Image from "next/image";


const ServerIsDown = () => {
  return (
<div className={styles.container}>
      <div className={styles.errorBox}>
        <h1 className={styles.error}>اتصال با سرور برقرار نیست!</h1>
        <h3 className={styles.tryLater}>لطفا بعدا دوباره امتحان کنید.</h3>
      </div>
      <Image
        src="/images/ErrorLamp.png"
        width={555}
        height={555}
        alt="error image"
      />
    </div>
  )
}

export default ServerIsDown