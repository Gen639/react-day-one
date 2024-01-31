import React, { Component } from "react";

export default class TechImageCard extends Component {
  render() {
    const { imageSrc, altText } = this.props;
    return <img className="tech-card" src={imageSrc} alt={altText}></img>;
  }
}
