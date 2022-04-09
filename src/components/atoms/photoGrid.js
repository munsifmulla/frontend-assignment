import React from "react";
import { imageExists, getExtension } from "utils";

const PhotoGrid = ({ images, classes }) => {
  const videoTypeSupported = ["mp4"];

  const renderMedia = url =>
    videoTypeSupported.includes(getExtension(url)) ? (
      <div>
        <video controls>
          <source src={url} type="video/mp4" />
        </video>
      </div>
    ) : (
      <img src={url} alt="" />
    );
  const photoClass = (image, length, index) => {
    if (length === 1) {
      return (
        <div className={`full`} key={image.url}>
          {renderMedia(image.url)}
        </div>
      );
    }
    if (length % 2 === 0) {
      if (length === 2) {
        return (
          <div className={`full-half`} key={image.url}>
            {renderMedia(image.url)}
          </div>
        );
      }
      return (
        <div className={`half`} key={image.url}>
          {renderMedia(image.url)}
        </div>
      );
    }
    if (length % 2 === 1) {
      return (
        <div
          className={`${index === 0 ? "full-half" : "half"}`}
          key={image.url}
        >
          {renderMedia(image.url)}
        </div>
      );
    }
  };
  return (
    <div className={classes.photoGrid}>
      {images.map((image, index) => photoClass(image, images.length, index))}
    </div>
  );
};

export default PhotoGrid;
