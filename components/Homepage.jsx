import React from 'react';
import VideoCard from './VideoCard';

const Homepage = () => {
  return (
  <div className='main-flex-container'>
      
      <div className='Page'>
         <div className='sidebar'>
          <ul>
            <li>Home</li>
            <li>Shorts</li>
            <li>Subscription</li>
            <li>You</li>
            <li>History</li>
          </ul>
         </div>
         <div className='main'>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
         </div>

      </div>

  </div>
  );
};

export default Homepage;