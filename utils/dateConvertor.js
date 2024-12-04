import moment from "moment-jalaali";

const dateConverter = (startDateStr, endDateStr) => {
  const monthArray = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];
  // const jalaliDate = moment(startDateStr);
  // const jalaliDate = JalaaliDate.fromGregorian(startDateStr);
  const start = new Date(startDateStr);
  const end = new Date(endDateStr);
  // const formattedDate = start.toLocaleDateString("fa-IR");
  // console.log("startDate", formattedDate);
  const day = start.getDate();
  const month = monthArray[start.getMonth()];
  const year = start.getFullYear();
  const diffInMs = end - start;

  const differenceInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
  const shamsiDate = [year, month, day, differenceInDays];
  return shamsiDate;
};

export default dateConverter;
