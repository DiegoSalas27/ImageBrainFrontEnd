import React from 'react';
import './faceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
  return(
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputImage' src={imageUrl} alt='people' width='500px' height='auto'/> 
        <div className='bounding-box' style={{top: box.topRow, right: box.rightCol,
         bottom: box.bottomRow, left: box.leftCol}}></div>
      {/*auto makes it possible to adjust the height based on the width*/}
      </div>
    </div>
  );
}

export default FaceRecognition;