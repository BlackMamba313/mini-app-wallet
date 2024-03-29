import React from 'react';

const SendIcon = ({width, height}) => {
  return (
    <svg  width={width || 200} height={height || 200}  viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" >
      <defs>
        <linearGradient id="gradient1" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" style={{stopColor: '#216efd', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#ff2142', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <path fill="url(#gradient1)"
            d="M125,177.86a5,5,0,0,1-4.74-3.42L96,101.76,27.64,77.57a5,5,0,0,1,.2-9.49L169.22,24.53a5,5,0,0,1,6.23,6.3L129.76,174.37a5,5,0,0,1-4.73,3.49ZM45.23,73.19l56.44,20a5,5,0,0,1,3.07,3.13l20.15,60.44L163,36.9Z"/>
      <path fill="url(#gradient1)"
            d="M100,102.84a4.94,4.94,0,0,1-3.59-1.52,5,5,0,0,1,.11-7.07L131.86,60a5,5,0,0,1,7,7.18l-35.35,34.26A5,5,0,0,1,100,102.84Z"/>
      <path fill="url(#gradient1)"
            d="M75,175.69a5,5,0,0,1-3.19-8.85l25-20.69a5,5,0,0,1,6.38,7.7l-25,20.69A5,5,0,0,1,75,175.69Z"/>
      <path fill="url(#gradient1)"
            d="M29.31,175.69a5,5,0,0,1-3.53-8.54l45.68-45.69a5,5,0,0,1,7.08,7.08L32.85,174.22A5,5,0,0,1,29.31,175.69Z"/>
      <path fill="url(#gradient1)"
            d="M29.31,130a5,5,0,0,1-3.85-8.19l20.69-25a5,5,0,0,1,7.7,6.38l-20.69,25A5,5,0,0,1,29.31,130Z"/>
    </svg>
  );
};

export default SendIcon;