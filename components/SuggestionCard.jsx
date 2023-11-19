import React from 'react'

const SuggestionCard = () => {
  return (
    <div className='suggestion-card'>
        <img  className="suggestion-thumbnail" src="../src/assets/company.webp" alt="" />

        <div className="card-body"> 
        {/* <img className="channelImage" src="https://robohash.org/9" alt="" /> */}
        <div className="card-text">
            <p>Title</p>
            <p>Channel Name</p>
            <p>200k 2 months ago</p>
        </div>
        </div>
    </div>
  );
};

export default SuggestionCard;