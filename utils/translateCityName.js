const cityMap = {
  Tehran: "تهران",
  Isfahan: "اصفهان",
  Shiraz: "شیراز",
  Mashhad: "مشهد",
  Tabriz: "تبریز",
  Sanandaj: "سنندج",
  Madrid: "مادرید",
  sulaymaniyahTour: "سلیمانیه",
  Hewler: "هولر",
  Mazandaran: "مازندران",
  "offRoad Center": "تور آفرود",
  Italy: "ایتالیا",
};

export const translateCityName = (cityName) => {
  return cityMap[cityName] || cityName;
};
