import React from 'react'
import ReactDOM from 'react-dom'
import { GridLoader } from 'react-spinners'
import "./Spinner.css"
const Spinner = ({loading}) => {
  return ReactDOM.createPortal(
    <div className='spinner'>
        <GridLoader
        loading={loading} 
      size={20}
      color="black"
        />
    </div>,document.getElementById('spinner-root')
  )
}

export default Spinner