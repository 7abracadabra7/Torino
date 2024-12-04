
function formatNumberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

  export function convertToPersianNumber(number) {
    const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    const formattedNumber = formatNumberWithCommas(number*100);
    const persianFormattedNumber = formattedNumber.replace(/\d/g, (digit) => persianDigits[digit]);

    return persianFormattedNumber;

  }
  

