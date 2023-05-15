import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Sofas",
    imageId : "https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_1440_category_22feb_1.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Beds",
    imageId : "https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_1440_category_22feb_26.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Wardrobes",
    imageId : "https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_1440_category_22feb_31.jpg",
  },
];
