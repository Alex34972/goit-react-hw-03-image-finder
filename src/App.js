import React from "react";
import { Component } from "react";
import Searchbar from "./components/searchbar";
import Button from "./components/button";
import s from "./App.module.css";
import ImageGallery from "./components/imageGallery";
import imageAPI from "./services/image-api";
export default class App extends Component {
  state = {
    imagesName: "",
    page: 1,
  };
  handleFormSubmit = (imagesName) => {
    this.setState({ imagesName });
  };
  handleNextPage = () => {
    this.setState(({ page }) => {
      console.log(page);
      return { page: page + 1 };
    });
  };
  render() {
    const { imagesName } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <div className={s.App}>
          <ImageGallery imagesName={imagesName} />
        </div>
        <Button onMore={this.handleNextPage} />
      </>
    );
  }
}
