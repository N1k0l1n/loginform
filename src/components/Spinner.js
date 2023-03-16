import React from 'react'
import spinnerImg from '../assets/spinnervlll.gif'

const Spinner = () => {
  return (
    <>
      <div>
        <img 
        src={spinnerImg} 
        alt="loading" 
        className="d-block m-auto"
        style={{width:'200px'}}
        />
      </div>
    </>
  )
}

export default Spinner;
