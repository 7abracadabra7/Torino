import Image from "next/image";
import styles from "./MainPage.module.css";
import Tours from "../organisms/Tours";
import SearchTicket from "../molecules/SearchTicket";
import CallPurchasing from "../molecules/CallPurchasing";
import WhyTorino from "../molecules/WhyTorino";
const MainPage = async () => {
  const response = await fetch(`http://localhost:6500/tour`, {
    cache: "no-cache",
  });
  const tours = await response.json();

  const originSet = new Set();
  const destinationSet = new Set();

  const originCities = tours
    .map((tour) => {
      if (!originSet.has(tour.origin.id)) {
        originSet.add(tour.origin.id);
        return {
          value: tour.origin.id,
          label: tour.origin.name,
        };
      }
      return null;
    })
    .filter((city) => city !== null);

  const destinationCities = tours
    .map((tour) => {
      if (!destinationSet.has(tour.destination.id)) {
        destinationSet.add(tour.destination.id);
        return {
          value: tour.destination.id,
          label: tour.destination.name,
        };
      }
      return null;
    })
    .filter((city) => city !== null);

  if (destinationCities.length && originCities.length) {
    console.log("o", originCities, "d", destinationCities);
  }
  return (
    <div>
      <Image
        className={styles.image}
        src="/images/cover.png"
        width={1440}
        height={350}
        alt="cover page"
      />
      <div className={styles.container}>
        <h1 className={styles.torino}>
          <span>تورینو </span>برگزار کننده بهترین تور های داخلی و خارجی
        </h1>

        <SearchTicket
          destinationCities={destinationCities}
          originCities={originCities}
        />
  

        <Tours tours={tours} />
        <CallPurchasing />
        <WhyTorino />
      </div>
    </div>
  );
};

export default MainPage;
