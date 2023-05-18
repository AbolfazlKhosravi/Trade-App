const convertToPersianNumber = (number) => {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  const numberString = String(number);
  let persianNumber = "";

  for (let i = 0; i < numberString.length; i++) {
    const digit = parseInt(numberString[i]);
    if (isNaN(digit)) {
      persianNumber += numberString[i];
    } else {
      persianNumber += persianDigits[digit];
    }
  }

  return persianNumber;
};

export default convertToPersianNumber;
