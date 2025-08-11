import React from 'react';
import './video.css';

function Video() {
  return (
    <section className="video-section">
      <div className="video-header">
        <p className="video-label">Impact in Action</p>
        <h2 className="video-title">Our journey toward's innovation</h2>
      </div>
      <div className="video-container">
        <video controls>
          <source src="/korvet.video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}

export default Video;
