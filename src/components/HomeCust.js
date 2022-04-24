import React from "react";
import arrow from "../images/arrow-black.png";
import comment from "../images/message.png";
export default function HomeCust(props) {
  return (
    <>
      <div className="c_card">
        <img src={comment} alt="image" className="comment_img" />
        <div className="customer_d">
          <img src={props.url} alt="image" />
          <div className="name_d">
            <p className="name">{props.name}</p>
            <p className="man">{props.position}</p>
          </div>
        </div>
        <div className="comment">
            {props.resp}
        </div>
        <button className="btn">
          Read the Post
          <img src={arrow} alt="images" />
        </button>
      </div>
    </>
  );
}
