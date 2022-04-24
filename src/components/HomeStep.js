import React from 'react'

export default function HomeStep(props) {
  return (
    <>
        <div className="step">
          <div><img src={props.url} alt="img"/></div>
          <p>{props.text}</p>
        </div>
    </>
  )
}
