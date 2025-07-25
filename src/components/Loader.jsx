import React from 'react'
import {PropagateLoader} from 'react-spinners';

const Loader = () => {
  return (
    <div className='loader-container flex justify-center items-center h-screen'>
      <PropagateLoader color="#36d7b7" />
    </div>
  )
}

export default Loader