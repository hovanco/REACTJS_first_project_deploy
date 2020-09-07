import React, { Component,Fragment } from 'react';
import "./App.css";
import pic_1 from "./pic_ture/item1.jpg";
import pic_2 from "./pic_ture/item2.jpg";
import pic_3 from "./pic_ture/item3.png";
import pic_4 from "./pic_ture/item4.jpg";
import pic_5 from "./pic_ture/item1.jpg";

class App extends Component {
  render() {
    return (
      <>
         <div className="wrapper">
        <div className="main_container">
          <div className="item">
            <div className="img_holder">
              <img src={pic_1} alt="image nice" />
            </div>
            <div className="item_info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor rerum est, voluptas cupiditate assumenda iure vero tempora fugiat. Unde blanditiis incidunt alias molestiae. Totam, laboriosam. Animi accusamus et labore sit nihil exercitationem provident odit nostrum ipsum, architecto deserunt eius veritatis qui enim modi impedit nemo quam quae voluptatibus aliquid possimus.
            </div>
          </div>  
          <div className="item">
            <div className="img_holder">
            <img src={pic_2} alt="nice" />
            </div>
            <div className="item_info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor rerum est, voluptas cupiditate assumenda iure vero tempora fugiat. Unde blanditiis incidunt alias molestiae. Totam, laboriosam. Animi accusamus et labore sit nihil exercitationem provident odit nostrum ipsum, architecto deserunt eius veritatis qui enim modi impedit nemo quam quae voluptatibus aliquid possimus.
            </div>
          </div>  
          <div className="item">
            <div className="img_holder">
            <img src={pic_3} alt="nice" />
            </div>
            <div className="item_info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor rerum est, voluptas cupiditate assumenda iure vero tempora fugiat. Unde blanditiis incidunt alias molestiae. Totam, laboriosam. Animi accusamus et labore sit nihil exercitationem provident odit nostrum ipsum, architecto deserunt eius veritatis qui enim modi impedit nemo quam quae voluptatibus aliquid possimus.
            </div>
          </div>  
          <div className="item">
            <div className="img_holder">
            <img src={pic_4} alt="nice" />
            </div>
            <div className="item_info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor rerum est, voluptas cupiditate assumenda iure vero tempora fugiat. Unde blanditiis incidunt alias molestiae. Totam, laboriosam. Animi accusamus et labore sit nihil exercitationem provident odit nostrum ipsum, architecto deserunt eius veritatis qui enim modi impedit nemo quam quae voluptatibus aliquid possimus.
            </div>
          </div>  
          <div className="item">
            <div className="img_holder">
            <img src={pic_5} alt="nice" />
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