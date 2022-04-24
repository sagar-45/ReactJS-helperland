import React from 'react'

export default function PricesExtraService(props) {
    return (
        <>
            <div className="extra">
                <div className="extra_img">
                    <img src={props.url} alt='image' />
                </div>
                <p className="extra_name">{props.text}</p>
                <p className="extra_time">30 minutes</p>
            </div>
        </>
    )
}
