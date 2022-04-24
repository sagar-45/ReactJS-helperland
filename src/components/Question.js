import React from 'react'

export default function Question(props) {
    return (
        <>
            <div className="heading" id={`heading${props.number}`}>
                <span className={`head_title ${props.collapsed}`} data-bs-toggle="collapse" data-bs-target={`#collapse${props.number}`} aria-expanded="true" aria-controls={`collapse${props.number}`}>
                    {props.que}
                </span>
            </div>
            <div id={`collapse${props.number}`} className={`accordion-collapse collapse ${props.show}`} aria-labelledby="headingOne" data-bs-parent={`#${props.parentele}`}>
                <div className="accordion-body">
                    {props.ans}
                </div>
            </div>
        </>
    )
}
