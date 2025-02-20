import styles from "./Tours.module.css";
import Card from "../molecules/Card";

const Tours = ({ tours }) => {
  return (
    <div>
      <h1 className={styles.title}> همه تورها</h1>
      <div className={styles.container}>
        {tours.map((tour) => (
          <Card key={tour.id} {...tour} />
        ))}
      </div>
    </div>
  );
};

export default Tours;
