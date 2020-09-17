import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import './App.css';
import useVideos from '../hooks/useVideos';

const App = () => {
  
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('hunt showdown live stream');

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

return (
  <div className="ui container wrapper">
    <SearchBar onFormSubmit={search} />
    <div className="ui grid">
      <div className="ui row">
      <div className="eleven wide column">
        <VideoDetail video={selectedVideo} />
      </div>
      <div className="five wide column">
        <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
      </div>
      </div>
    </div>
    </div>
  );

};



export default App;


// dodajemy tego callbacka onFormSubmit jako propa, gdy dodajemy go do komponentu mozemy go nazwac jak chcemy w tym wypadku onFormSubmit, moznaby nawet nazwac onTermSubmit