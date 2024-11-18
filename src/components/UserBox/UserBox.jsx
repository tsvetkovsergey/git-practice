// import React from 'react'
import './UserBox.styles.css';

export const UserBox = () => {
  return (
    <div className="box">
      <h3 className="authorname">Sergei Tsvetkov</h3>
      <p className="lyrics">
        {`So, so you think you can tell heaven from hell?
        Blue skies from pain?
        Can you tell a green field from a cold steel rail?
        A smile from a veil?
        Do you think you can tell?`}
      </p>
      <p className="date">18.11.2024</p>
    </div>
  );
};
