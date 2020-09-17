import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => { // bez destr zamiast video bylby props
  return (
  <div onClick={() => onVideoSelect(video)} className="video-item item ">
    <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url} />
    <div className="content">
      <div className="header">{video.snippet.title}</div>
    </div>
  </div>
  );
};

export default VideoItem;


// onClick={() => onVideoSelect(video) DLACZEGO TAK? PRZYPOMINAM:
// MOGLIBYSMY DAC TEN CALLBACK TAK onVideoSelect ALE W TYM WYPADKU POTRZEBNE JEST NAM PRZEKAZANIE ARGUMENTU OBECNEGO VIDEO
// NIE ZROBIMY TEZ TAK onVideoSelect(video) BO TA FUNKCJA BEDZIE SIE WYKONYWAC PRZY KAZDYM URUCHOMIENIU
// DLATEGO DAJEMY FUNKCJE STRZALKOWA KTORA DOPIERO WTEDY WYWOLA onVideoSelect Z ARG video PO KLIKNIECIU