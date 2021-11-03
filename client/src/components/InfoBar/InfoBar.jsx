import React from 'react';
// import onlineIcon from '../icons/onlineIcon.png'
import onlineIcon from '../icons/onlineIcon.png'
//  import closeIcon from '../icons/closeIcon.png'
import './InfoBar.css';


export default function InfoBar({room}){
  
  return (
    <div className="inforBar">
      
      <div className="leftInnerContainer">
      <img src="https://img.icons8.com/material-sharp/24/26e07f/online-support.png" width="25" height="25" />
      <h3>{room}</h3>
      <div className="title">Your Private Space</div>
      </div>
    <div className="rightInnerContainer"> 
   
      {/* <a href="/"><img src="https://img.icons8.com/ios-glyphs/30/000000/population-return.png" width="30" height="30"/></a> */}
    </div>
    </div>
  )
}
