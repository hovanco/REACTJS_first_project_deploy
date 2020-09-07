import React, { Component,Fragment } from 'react';
import "./App.css";
import image1 from "./images/item_img1.jpg";
import image2 from "./images/item_img2.jpg";
import image3 from "./images/item_img3.png";
import image4 from "./images/item_img4.jpg";
import image5 from "./images/item_img5.jpg";

class App extends Component {
  render() {
    return (
      <>
         <div className="wrapper">
        <div className="main_container">
          <div className="item">
            <div className="img_holder">
              <img src={image1} alt="image nice" />
            </div>
            <div className="item_info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor rerum est, voluptas cupiditate assumenda iure vero tempora fugiat. Unde blanditiis incidunt alias molestiae. Totam, laboriosam. Animi accusamus et labore sit nihil exercitationem provident odit nostrum ipsum, architecto deserunt eius veritatis qui enim modi impedit nemo quam quae voluptatibus aliquid possimus.
            </div>
          </div>  
          <div className="item">
            <div className="img_holder">
            <img src={image2} alt="image nice" />
            </div>
            <div className="item_info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor rerum est, voluptas cupiditate assumenda iure vero tempora fugiat. Unde blanditiis incidunt alias molestiae. Totam, laboriosam. Animi accusamus et labore sit nihil exercitationem provident odit nostrum ipsum, architecto deserunt eius veritatis qui enim modi impedit nemo quam quae voluptatibus aliquid possimus.
            </div>
          </div>  
          <div className="item">
            <div className="img_holder">
            <img src={image3} alt="image nice" />
            </div>
            <div className="item_info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor rerum est, voluptas cupiditate assumenda iure vero tempora fugiat. Unde blanditiis incidunt alias molestiae. Totam, laboriosam. Animi accusamus et labore sit nihil exercitationem provident odit nostrum ipsum, architecto deserunt eius veritatis qui enim modi impedit nemo quam quae voluptatibus aliquid possimus.
            </div>
          </div>  
          <div className="item">
            <div className="img_holder">
            <img src={image4} alt="image nice" />
            </div>
            <div className="item_info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor rerum est, voluptas cupiditate assumenda iure vero tempora fugiat. Unde blanditiis incidunt alias molestiae. Totam, laboriosam. Animi accusamus et labore sit nihil exercitationem provident odit nostrum ipsum, architecto deserunt eius veritatis qui enim modi impedit nemo quam quae voluptatibus aliquid possimus.
            </div>
          </div>  
          <div className="item">
            <div className="img_holder">
            <img src={image5} alt="image nice" />
            </div>
            <div className="item_info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor rerum est, voluptas cupiditate assumenda iure vero tempora fugiat. Unde blanditiis incidunt alias molestiae. Totam, laboriosam. Animi accusamus et labore sit nihil exercitationem provident odit nostrum ipsum, architecto deserunt eius veritatis qui enim modi impedit nemo quam quae voluptatibus aliquid possimus.
            </div>
          </div>  
        </div>
      </div>
      </>
    )
  }
}
export default App;