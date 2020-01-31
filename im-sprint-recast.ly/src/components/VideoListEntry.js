import React from 'react';

const VideoListEntry = (props) => {
  const {title, description} = props.Data.snippet
  const {url} = props.Data.snippet.thumbnails.default

  return (
    <div className="video-list-entry">
      <div className="media-left media-middle">
        <img className="media-object" src={url} alt="" />
      </div>
      <div className="media-body">
        <div className="video-list-entry-title">{title}</div>
        <div className="video-list-entry-detail">{description}</div>
      </div>
  </div>
  )
};

export default VideoListEntry;
