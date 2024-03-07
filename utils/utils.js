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
  if (discount && discount.value > 0) {
    if (discount.discountType === "percentage") {
      discountAmount = (originalPrice * discount.value) / 100;
    } else discountAmount = discount.value;
    return originalPrice - discountAmount;
  }
  return originalPrice;
};

export const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const generateRandomId = (length = 8) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let randomId = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    randomId += characters.charAt(randomIndex);
  }

  return randomId;
};

export const extractImageId = (imageUrl) => {
  if (imageUrl) {
    const urlParts = imageUrl.split("/");
    const filenameWithExtension =
      urlParts[urlParts.length - 3] +
      "/" +
      urlParts[urlParts.length - 2] +
      "/" +
      urlParts[urlParts.length - 1];
    return filenameWithExtension.replace(/\.[^/.]+$/, "");
  }
  return "";
};
