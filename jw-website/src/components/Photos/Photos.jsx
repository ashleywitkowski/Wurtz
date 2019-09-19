import "./Photos.css";
import React from "react";
import { Carousel } from "react-bootstrap";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../../resources/Gallery", false, /\.(png|jpe?g|svg)$/)
);

const Photos = props => {
  const renderImgs = images => {
    let rv = [];
    Object.keys(images).forEach((img, i) => {
      console.log(images);
      rv.push(
        <Carousel.Item>
          <img className="d-block w-100" src={images[img]} alt="First slide" />
        </Carousel.Item>
      );
    });
    return rv;
  };

  return (
    <Carousel interval={7000} className="carousel-inner">
      {renderImgs(images)}
    </Carousel>
  );
};

export default Photos;
