import React from "react";

export default function NewsLetter() {
  return (
    <>
      <div className="nl_com">
        <p className="nl_title">GET OUR NEWSLETTER</p>
        <div className="nl_d">
          <input type="text" placeholder="YOUR EMAIL" />
          <button className="btn">Submit</button>
        </div>
      </div>
    </>
  );
}
