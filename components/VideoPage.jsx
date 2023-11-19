import React from 'react';
import SuggestionCard from './SuggestionCard';
import {AiOutLike,AiFiLike ,AiOutDislike} from "react=icons";

const VideoPage = () => {
  return (
    <div className="videoPage">
        <div className="videoItem">

        <iframe className="iframe-video" 
        src="https://www.youtube.com/embed/gdx7gN1UyX0?si=ZUqiZyiXAvVBXf8L" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>
        </iframe>
        </div>
        <div className='"description'>
            <div className='mixed-group'>
                <img className="channelImage" src="" alt="" />
                <div className='channelText'></div>
            </div>
        </div>
        <div className="suggestionBar">
            <SuggestionCard/>
            <SuggestionCard/>
            <SuggestionCard/>
            <SuggestionCard/>
            <SuggestionCard/>
            <SuggestionCard/>
            <SuggestionCard/>
        </div>
    </div>

  )
};

export default VideoPage