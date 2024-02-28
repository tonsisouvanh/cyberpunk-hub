export function formatPrice(price, decimalPlaces = 0) {
  const lakSymbol = "₭";
  return price
    ? price
        .toLocaleString("en-US", {
          style: "currency",
          currency: "LAK",
          currencyDisplay: "symbol",
          minimumFractionDigits: decimalPlaces,
        })
        .replace("LAK", lakSymbol)
    : "";
}

export const calculateDiscountedPrice = (originalPrice, discount) => {
  let discountAmount;
  if (discount) {
    if (discount.type === "percentage") {
      discountAmount = (originalPrice * discount.value) / 100;
    } else discountAmount = discount.value;
    return originalPrice - discountAmount;
  }

  return originalPrice;
};

export const capitalizeFirstLetter = (str) => {
  console.log(str);
  return str.charAt(0).toUpperCase() + str.slice(1);
};
