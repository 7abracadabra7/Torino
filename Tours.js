import Card from "../molecules/Card";
import styles from "./Tours.module.css";

const Tours = ({ tours }) => {
  return (
    <div>
      <h1 className={styles.title}>همه تورها</h1>
      <div className={styles.container}>
        {tours && tours.map((tour) => <Card key={tour.id} {...tour} />)}
      </div>
    </div>
  );
};

export default Tours;
