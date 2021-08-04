import { Component } from "react";
import ImageGalleryItem from "../imageGalleryItem";
import imageAPI from "../../services/image-api";
import s from "./ImageGallery.module.css";
const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

export default class ImagesInfo extends Component {
  state = {
    images: null,
    error: null,
    status: Status.PENDING,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imagesName;
    const nextName = this.props.imagesName;
    console.log(prevName);
    console.log(nextName);
    if (prevName !== nextName) {
      this.setState({ status: Status.PENDING });
      imageAPI
        .fetchImages(nextName)
        .then((images) =>
          this.setState({ images: images.hits, status: Status.RESOLVED })
        )
        .catch((error) => this.setState({ error, status: Status.REJECTED }));
    }
  }

  render() {
    const { images } = this.state;
    //if (status === "idle") {
    // return <div>Введите имя покемона.</div>;
    //}
    console.log(images);
    return (
      <ul className={s.ImageGallery}>
        {images && <ImageGalleryItem images={images} />}
      </ul>
    );

    //if (status === "rejected") {
    //  return <ImageGallery message={error.message} />;
    //}

    //if (status === "resolved") {
    //  return <ImageGallery images={images} />;
    //}
  }
}
//<ImageGalleryItem images={images} />
