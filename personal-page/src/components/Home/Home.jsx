import React, { Component } from "react";
import TechImageCard from "./TechImageCard";
import "../../App.css";

const technologyImage = {
  html: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png",
  css: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
  js: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  react: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  docker: "https://1000logos.net/wp-content/uploads/2021/11/Docker-Logo.png",
};

export default class Home extends Component {
  render() {
    return (
      <div>
        <p>
          Little bit about myself: A goal-driven, communicative young
          professional, a graduate of International Business master’s degree,
          with more than 9-year international experience, primary in sales and
          commercial client support. Passionate about web-development and
          recently embarked on intensive bootcamp to further enhance skills in
          this field.
        </p>
        <p>Here are some of technologies that I had a chance to learn:</p>
        {Object.entries(technologyImage).map(
          ([technology, imageUrl], index) => (
            <TechImageCard
              key={index}
              imageSrc={imageUrl}
              altText={technology}
            />
          )
        )}
      </div>
    );
  }
}
