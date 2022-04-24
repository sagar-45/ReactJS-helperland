import React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function Uparrow() {
    const ScrollUp=()=>{
        window.scrollTo({top:0,behavior:"smooth"})
    }
  return (
    <>
        <button className="btn uparrow" onClick={ScrollUp}><KeyboardArrowUpIcon /></button>
    </>
  )
}
