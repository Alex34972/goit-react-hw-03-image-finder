import { Component } from "react";
import { toast } from "react-toastify";
import ImageGalleryItem from "../imageGalleryItem";
import imageAPI from "../../services/image-api";
import s from "./ImageGallery.module.css";
import LoaderComponent from "../loader/LoaderComponent";

export default class ImagesInfo extends Component {
  state = {
    images: null,
    error: null,
    loading: true,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imagesName;
    const nextName = this.props.imagesName;
    if (prevName !== nextName) {
      imageAPI
        .fetchImages(nextName)
        .then((images) => this.setState({ images: images.hits }))
        .catch((error) => toast(error))
        .finally(() => this.setState({ loading: false }));
    }
  }
  handleOpenModal = (e) => {
    if (e.target !== e.currentTarget) {
      this.props.onClick();
    }
  };
  render() {
    const { images, loading } = this.state;
    return (
      <>
        {loading && <LoaderComponent />}
        <ul className={s.ImageGallery} onClick={this.handleOpenModal}>
          {images && <ImageGalleryItem images={images} />}
        </ul>
      </>
    );
  }
}
