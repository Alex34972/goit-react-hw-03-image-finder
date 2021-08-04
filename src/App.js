import React from "react";
import { Component } from "react";
import Searchbar from "./components/searchbar";
import Button from "./components/button";
import s from "./App.module.css";
import ImageGallery from "./components/imageGallery";
export default class App extends Component {
  state = {
    imagesName: "",
  };
  handleFormSubmit = (imagesName) => {
    this.setState({ imagesName });
  };
  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <div className={s.App}>
          <ImageGallery imagesName={this.state.imagesName} />
        </div>
        <Button />
      </>
    );
  }
}
