export const withSeparator = (number) => {
  return !isNaN(parseFloat(number))
    ? Number(number.toFixed(1)).toLocaleString()
    : false;
};

//withSeparator(1234567) ===> 1 234 567
