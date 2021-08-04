import React from "react";
import s from "./ImageGalleryItem.module.css";
const ImageGalleryItem = ({ images }) => {
  return (
    <>
      {images.map((image) => (
        <li className={s.ImageGalleryItem} key={image.id}>
          <img
            src={image.webformatURL}
            alt={image.tags}
            className={s.ImageGalleryItem__image}
          />
        </li>
      ))}
    </>
  );
};
export default ImageGalleryItem;
