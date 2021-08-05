import React from "react";
import { Component } from "react";
import PropTypes from "prop-types";
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
    const { imagesName } = this.state;
    this.props.onSubmit(imagesName);
    this.setState({ imagesName: "" });
  };
  render() {
    const { imagesName } = this.state;
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
            value={imagesName}
            onChange={this.handleNameChange}
          />
        </form>
      </header>
    );
  }
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
