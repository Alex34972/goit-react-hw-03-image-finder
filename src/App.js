import React from "react";
import { Component } from "react";
import { toast } from "react-toastify";
import Searchbar from "./components/searchbar";
import Button from "./components/button";
import s from "./App.module.css";
import ImageGallery from "./components/imageGallery";
import LoaderComponent from "./components/loader";
import Modal from "./components/modal";
import imageAPI from "./services/image-api";

export default class App extends Component {
  state = {
    searchImages: "",
    modalContent: "",
    page: 1,
    renderImages: [],
    isLoading: true,
    openModal: false,
  };

  hadleChangeQuery = (query) => {
    this.setState({
      searchImages: query,
      page: 1,
      renderImages: [],
    });
  };

  handleNextPage = () => {
    this.setState(({ page }) => {
      return { page: page + 1 };
    });
  };
  handleScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  toggleModal = () => {
    this.setState(({ openModal }) => ({ openModal: !openModal }));
  };
  //toggleLoading = () => {
  //  this.setState(({ isLoading }) => ({ isLoading: !isLoading }));
  //};

  modalContentSet = (itemId) => {
    const { renderImages } = this.state;
    const element = renderImages.find(({ id }) => id === itemId);
    this.setState({ modalContent: element.largeImageURL });
  };
  componentDidUpdate(prevProps, prevState) {
    const { searchImages, page } = this.state;
    if (prevState.searchImages !== searchImages || prevState.page !== page) {
      imageAPI
        .fetchImages(searchImages, page)
        .then(({ hits }) => {
          this.setState(({ renderImages }) => {
            return { renderImages: [...renderImages, ...hits] };
          });
        })
        .then(this.handleScroll)
        .catch((error) => toast(error))
        .finally(() => {
          this.setState({ isLoading: !false });
        });
    }
  }
  render() {
    const { renderImages, isLoading, page, modalContent, openModal } =
      this.state;
    const isNotLastPage = renderImages.length / page === 12;
    console.log(isNotLastPage);
    const btnBeView = renderImages.length > 0 && isLoading && isNotLastPage;
    console.log(btnBeView);
    return (
      <>
        <Searchbar onSubmit={this.hadleChangeQuery} />
        <div className={s.App}>
          {!isLoading && <LoaderComponent />}
          <ImageGallery images={renderImages} onClick={this.toggleModal} />
        </div>
        {openModal && (
          <Modal content={modalContent} onBackdrop={this.toggleModal} />
        )}
        {btnBeView && <Button onMore={this.handleNextPage} />}
      </>
    );
  }
}
