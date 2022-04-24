import React from "react";
import arrow from '../images/arrow-black.png'
export default function HomeBlogCard(props) {
  return (
    <>
      <div className="cards">
        <img src={props.url} alt="images" />
        <div className="details">
          <p className="card_heading">Lorem ipsum dolor sit amet</p>
          <p className="card_date">January 28, 2019</p>
          <p className="card_desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            fermentum metus pulvinar aliquet.
          </p>
          <button className="btn">
            Read the Post
            <img src={arrow} alt="images" />
          </button>
        </div>
      </div>
    </>
  );
}
