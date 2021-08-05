import React from "react";
import PropTypes from "prop-types";
import s from "./ImageGalleryItem.module.css";
const ImageGalleryItem = ({ images, modalContent }) => {
  return (
    <>
      {images.map((image) => (
        <li className={s.ImageGalleryItem} key={image.id}>
          <img
            src={image.webformatURL}
            alt={image.tags}
            className={s.ImageGalleryItem__image}
            onClick={() => this.modalContent(image.id)}
          />
        </li>
      ))}
    </>
  );
};
ImageGalleryItem.propTypes = {
  onItemClick: PropTypes.func.isRequired,
};
export default ImageGalleryItem;
