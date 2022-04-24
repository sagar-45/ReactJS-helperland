import { PropaneSharp } from '@mui/icons-material'
import React from 'react'

export default function HomeWH(props) {
    return (
        <>
            <div className="cards">
                <img src={props.url} alt="image" />
                <p className="card_heading">{props.heading}</p>
                <p className="card_desc">{props.desc}</p>
            </div>
        </>
    )
}
