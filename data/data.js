import { jimabanner, jimbbanner } from "@/assets/images";

export const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

export const slides = [
  {
    id: 1,
    image: jimabanner,
    caption: "Slide 1",
  },
  {
    id: 2,
    image: jimbbanner,
    caption: "Slide 2",
  },
];

export const menuItems = [
  { id: 2, text: "Sale", toPath: "/all-products/sale" },
  { id: 3, text: "ເຄື່ອງມາໃໝ່", toPath: "/all-products/arrival" },
  { id: 4, text: "ກ່ຽວກັບພໍ່ຄ້າ", toPath: "/404" },
  { id: 5, text: "ຕິດຕໍ່", toPath: "/404" },
];

export const CategoriesOptions = [
  { value: "clothing", label: "Clothing" },
  { value: "shoes", label: "Shoes" },
  { value: "accessories", label: "Accessories" },
  { value: "bags", label: "Bags" },
  { value: "jewelry", label: "Jewelry" },
  { value: "watches", label: "Watches" },
  { value: "eyewear", label: "Eyewear" },
  { value: "lingerie", label: "Lingerie" },
  { value: "activewear", label: "Activewear" },
  { value: "outerwear", label: "Outerwear" },
];

export const themes = ["winter", "black", "night"];