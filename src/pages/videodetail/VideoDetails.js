import React from 'react';
import SideBar from './SideBar';
import Video from './Video';

function VideoDetails(props) {
    return (
        <div className='video-details'>
            <SideBar />
            <Video />
        </div>
    );
}

export default VideoDetails;