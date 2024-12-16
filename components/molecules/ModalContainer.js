import styles from "./ModalContainer.module.css";

const ModalContainer = ({ children, isOpen, setIsOpen }) => {
  if (!isOpen) return;
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div className={styles.content}>
          <button
            className={styles["close-button"]}
            onClick={() => setIsOpen(!isOpen)}
          >
            &times;
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ModalContainer;
