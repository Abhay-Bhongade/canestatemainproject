import React, { useState, useRef } from "react";
import bigUnion from "../assets/big-Union.png";

const RoomsGalary = () => {
  const [selectedImages, setSelectedImages] = useState([null, null, null]);
  const fileInputRefs = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);

  const handleImageClick = (index) => {
    fileInputRefs.current[index].current.click();
  };

  const handleImageChange = (event, index) => {
    const file = event.target.files[0];
    const updatedSelectedImages = [...selectedImages];
    updatedSelectedImages[index] = URL.createObjectURL(file);
    setSelectedImages(updatedSelectedImages);
  };
  return (
    // <div className="galary-area-main">
    //   <h3 className="galary-heading">Gallery</h3>
    //   <div className="big-img">
    //     <img src="./src/assets/big-Union.png" alt="" />
    //   </div>
    //   <div className="row grop-img pt-3">
    //     <div className="col-sm-6">
    //       <div className="mini-img-1">
    //         <img src="./src/assets/big-Union.png" alt="" />
    //       </div>
    //     </div>
    //     <div className="col-sm-6">
    //       <div className="mini-img-1">
    //         <img src="./src/assets/big-Union.png" alt="" />
    //       </div>
    //     </div>
    //   </div>
    //   <div className="add-more btn mt-3">Add More Images</div>
    //   <div className="upload-main">
    //     <div className="upload btn mt-3">Upload</div>
    //   </div>
    // </div>
    <div className="galary-area-main">
      <h3 className="galary-heading" style={{ margin: "0 0 39px 0" }}>
        Gallery
      </h3>
      <div className="big-img">
        <img
          src={selectedImages[0] || bigUnion}
          alt="Image 1"
          onClick={() => handleImageClick(0)}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleImageChange(e, 0)}
          ref={fileInputRefs.current[0]}
          style={{ display: "none" }}
        />
      </div>
      <div className="row grop-img pt-4">
        <div className="col-sm-6">
          <div className="mini-img-1">
            <img
              src={selectedImages[1] || bigUnion}
              alt="Image 2"
              onClick={() => handleImageClick(1)}
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageChange(e, 1)}
              ref={fileInputRefs.current[1]}
              style={{ display: "none" }}
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="mini-img-1">
            <img
              src={selectedImages[2] || bigUnion}
              alt="Image 3"
              onClick={() => handleImageClick(2)}
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageChange(e, 2)}
              ref={fileInputRefs.current[2]}
              style={{ display: "none" }}
            />
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

export default RoomsGalary;
