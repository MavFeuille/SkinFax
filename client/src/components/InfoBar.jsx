import React from 'react';
import onlineIcon from '../icons/onlineIcon.png'
// import closeIcon from '../icons/closeIcon.png'
import './InfoBar.css';


export default function InfoBar({room}){

  
  return (
    <div className="inforBar">
      <div className="leftInnerContainer">
        <img className="onlineIcon" src={onlineIcon} alt="online image" width="15" height="15" />
      <h3>{room}</h3>
      </div>
    <div className="rightInnerContainer"> 
    {/*used to rely on the parsed query str for location which became location.state} 
    when user clicks= leave chat*/}
      <a href="/"><img src="https://img.icons8.com/ios-filled/50/000000/home.png"/></a>
    </div>
    </div>
  )
}
