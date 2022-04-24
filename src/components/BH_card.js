import React from 'react'
import arrowBlack from '../images/arrow-black.png';
export default function BH_card(props) {
    return (
        <>
            <div className="img_sec">
                <img src={props.url} alt="image" />
                <div className="text_btn">
                    <div className="heading">{props.title}</div>
                    <div className="card_text">{props.desc}</div>
                    <button className="btn">Read more<img src={arrowBlack} alt="arrow" /></button>
                </div>
            </div>
        </>
    )
}
