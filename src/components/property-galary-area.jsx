import React, { useState, useRef } from "react";
import bigUnion from "../assets/big-Union.png";

const PropertyGalary = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  return (
    <div className="galary-area-main">
      <h3 className="galary-heading" style={{ margin: "0 0 39px 0" }}>
        Gallery
      </h3>
      <div className="big-img">
        {selectedImage ? (
          <img src={selectedImage} alt="Selected" onClick={handleImageClick} />
        ) : (
          <img
            src={bigUnion}
            alt="loading...."
            onClick={handleImageClick}
          />
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          ref={fileInputRef}
          style={{ display: "none" }}
        />
      </div>
      <div className="row grop-img pt-4">
        <div className="col-sm-6">
          <div className="mini-img-1">
            <img src={bigUnion} alt="loading...." />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="mini-img-1">
            <img src={bigUnion} alt="loading...." />
          </div>
        </div>
      </div>
      <div className="add-more btn mt-4">Add More Images</div>
      <div className="upload-main">
        <div className="upload btn mt-4">Upload</div>
      </div>
    </div>
  );
};

export default PropertyGalary;
