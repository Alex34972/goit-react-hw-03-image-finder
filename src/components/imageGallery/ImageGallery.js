import { Component } from "react";

import ImageGalleryItem from "../imageGalleryItem";
import s from "./ImageGallery.module.css";

export default class ImagesInfo extends Component {
  state = {
    images: [],
  };

  handleOpenModal = (e) => {
    if (e.target !== e.currentTarget) {
      this.props.onClick();
    }
  };
  render() {
    const { images } = this.props;

    return (
      <>
        <ul className={s.ImageGallery} onClick={this.handleOpenModal}>
          {images && <ImageGalleryItem images={images} />}
        </ul>
      </>
    );
  }
}
