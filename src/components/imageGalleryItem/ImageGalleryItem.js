import React, { Component } from "react";
import PropTypes from "prop-types";

import s from "./ImageGalleryItem.module.css";

export default class ImageGalleryItem extends Component {
  modalContent = (id) => {
    this.props.onItemClick(id);
  };
  render() {
    const { id, webformatURL } = this.props;
    return (
      <img
        src={webformatURL}
        alt=""
        className={s.ImageGalleryItem_image}
        onClick={() => this.modalContent(id)}
      />
    );
  }
}
ImageGalleryItem.propTypes = {
  onItemClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
};
