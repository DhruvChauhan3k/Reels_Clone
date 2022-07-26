import React from 'react';
import "./VideoHeader.css";
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Ticker from 'react-ticker';
function VideoHeader() {
  return (
    <div className="videoHeader">
      <ArrowBackIosIcon/>
      <h3>Reels</h3>
      <CameraAltOutlinedIcon/>
    </div>
  )
}
export default VideoHeader