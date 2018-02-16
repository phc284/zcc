import React from 'react';
import { Follow } from 'react-twitter-widgets';


const TwitterHandle = ({ handle }) => {
    return (
      <div className="twitter-profile">
        <img src={handle.img_url} alt=""/>
        <div>
          {handle.name}
          <Follow
            username={handle.username}
          />
        </div>
      </div>
    );
}

export default TwitterHandle;
