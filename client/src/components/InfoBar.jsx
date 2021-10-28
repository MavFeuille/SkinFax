import React from 'react';
import onlineIcon from '../icons/onlineIcon.png'
import closeIcon from '../icons/closeIcon.png'
import './InfoBar.css';


export default function InfoBar({room}){

  
  return (
    <div className="inforBar">
      <div className="leftInnerContainer">
        <img className="onlineIcon" src={onlineIcon} alt="online image" />
      <h3>{room}</h3>
      </div>
    <div className="rightInnerContainer"> 
    {/*used to rely on the parsed query str for location which became location.state} 
    when user clicks= leave chat*/}
      <a href="/">img src={closeIcon} alt="close image</a>
    </div>
    </div>
  )
}
