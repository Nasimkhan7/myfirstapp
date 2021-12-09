import { useState } from "react";

const Gallery = () => {
  const img1 =
    "https://cdn.talkesport.com/wp-content/uploads/CSGO-Operation-10-Details.jpg";
  const img2 =
    "https://compass-ssl.xbox.com/assets/48/b7/48b7d00b-45ef-4bf7-b3cc-30e0e5c07d1b.jpg?n=PUBG_GLP-Page-Hero-1084_1920x1080.jpg";
  const img3 =
    "https://cdn2.unrealengine.com/gamename-store-landscape-2560x1440-2560x1440-606256535.jpg";
  const img4 =
    "https://compass-ssl.xbox.com/assets/f6/ee/f6ee6bb3-16c2-4cae-97c4-7fc405cb4c76.jpg?n=Devil-May-Cry-5_GLP-Page-Hero-1084_1920x1080_02.jpg";
  const img5 =
    "https://www.kotaku.com.au/content/uploads/sites/3/2016/05/21/jehdm1w0cw5ivjsj5bbo.jpg";

  const [mainImg, setMainImg] = useState(img1);


  const updateMainImage = (img) => {
    setMainImg(img);
  }

  return (
    <div className="container">
      <h1 className="display-1">My Image Gallery</h1>

      <img src={mainImg} className="img-fluid" alt="main img" />

      <div className="row mt-4 mb-5">
        <div className="col">
          <img src={img1} className="img-fluid" alt="main img" onClick={() => { updateMainImage(img1) }} />
        </div>
        <div className="col">
          <img src={img2} className="img-fluid" alt="main img" onClick={() => { updateMainImage(img2) }} />
        </div>
        <div className="col">
          <img src={img3} className="img-fluid" alt="main img" onClick={() => { updateMainImage(img3) }} />
        </div>
        <div className="col">
          <img src={img4} className="img-fluid" alt="main img" onClick={() => { updateMainImage(img4) }} />
        </div>
        <div className="col">
          <img src={img5} className="img-fluid" alt="main img" onClick={() => { updateMainImage(img5) }} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;