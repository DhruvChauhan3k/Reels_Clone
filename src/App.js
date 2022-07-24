
import React from 'react';
import './App.css';
import VideoCard from './VideoCard';
function App() {
  return (   
    <div className="app">
    <div className="app_top">
    <img src="https://i.pinimg.com/originals/d4/2a/9b/d42a9bd7d283e658e75f0cb03413fbd8.jpg" alt="Instagram Logo" className="app_logo" />
     <h1 className="app_reelsTxt">REELS</h1>
    </div>
    <div className="app_videos">
      <VideoCard
      channel = 'Sidemen'
      avatarSrc = 'https://assets.website-files.com/60644a76ea9749c206ea51ae/607debb35dab6bcbe5b9ae0c_unnamed.jpg'
      song = 'Original Audio'
      url = 'https://assets.mixkit.co/videos/preview/mixkit-hand-holding-a-multicolored-smoke-bomb-2825-large.mp4'
      likes = '987'
      shares = '30'
      />
        <VideoCard
      channel = 'Sidemen'
      avatarSrc = 'https://assets.website-files.com/60644a76ea9749c206ea51ae/607debb35dab6bcbe5b9ae0c_unnamed.jpg'
      song = 'Original Audio'
      url = 'https://assets.mixkit.co/videos/preview/mixkit-woman-gluing-glitter-to-an-easter-egg-42858-large.mp4'
      likes = '907'
      shares = '20'
      />
        <VideoCard
      channel = 'Sidemen'
      avatarSrc = 'https://assets.website-files.com/60644a76ea9749c206ea51ae/607debb35dab6bcbe5b9ae0c_unnamed.jpg'
      song = 'Original Audio'
      url = 'https://assets.mixkit.co/videos/preview/mixkit-radio-announcer-2962-large.mp4'
      likes = '987'
      shares = '30'
      />
        <VideoCard
      channel = 'Sidemen'
      avatarSrc = 'https://assets.website-files.com/60644a76ea9749c206ea51ae/607debb35dab6bcbe5b9ae0c_unnamed.jpg'
      song = 'Original Audio'
      url = 'https://assets.mixkit.co/videos/preview/mixkit-two-girls-with-balloons-sitting-while-talking-3569-large.mp4'
      likes = '987'
      shares = '30'
      />
    </div>
    </div>
  );
}
export default App;
