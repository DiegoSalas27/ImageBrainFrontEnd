import React from 'react';
import './imageLonkForm.css';

const imageLonkForm = ({ onInputChange, onButtonSubmit }) => {
  return(
    <div>
      <p className='f3'>
        {'This Magic Brain will detect faces in your pictures. Give it a try!'}
      </p>
      <div className='center '>
        <div className='center pa4 br3 shadow-5 form'>
          <input onChange= { onInputChange } className='f4 p2 w-70 center' type='text' />
          <button
            className='ml2 w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
            onClick = { onButtonSubmit }
            >Detect</button>
        </div>
      </div>
    </div>
  );
}
export default imageLonkForm;