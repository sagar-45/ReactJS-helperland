import React from 'react'
import star from '../images/star.png';

export default function Title(props) {
  return (
    <>
        <div className="C_title">
            <p>{props.name}</p>
            <div className="star">
                <div className="line"></div>
                <img src={star} alt="image" />
                <div className="line"></div>
            </div>
        </div>
    </>
  )
}
