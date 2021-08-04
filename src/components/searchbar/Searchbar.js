import React from "react";
import { Component } from "react";
import { toast } from "react-toastify";
import s from "./Searchbar.module.css";
export default class Searchbar extends Component {
  state = {
    imagesName: "",
  };
  handleNameChange = (event) => {
    this.setState({ imagesName: event.currentTarget.value.toLowerCase() });
  };
  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.imagesName.trim() === "") {
      toast.error("Введите название картинок.");
      return;
    }

    this.props.onSubmit(this.state.imagesName);
    this.setState({ imagesName: "" });
  };
  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchForm__button}>
            <span className={s.SearchForm__button_label}>Search</span>
          </button>

          <input
            className={s.SearchForm__input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.imagesName}
            onChange={this.handleNameChange}
          />
        </form>
      </header>
    );
  }
}
