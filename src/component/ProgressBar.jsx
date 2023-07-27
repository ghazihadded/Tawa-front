import React from 'react'

function ProgressBar({title,width,more,detail,color,colorDetail,styles}) {
  return (
    <>
    <div className='request-pos' style={styles}>
    <h4>{title}</h4>
    <div className='request-container'>
        <p className='request-detail' style={{color:colorDetail}}>{detail}</p>
        <div className='request'>{more} </div>
    </div>
    </div>
    
      <div className='progess-bar'>
        <div className='progress-load' style={{background:color,width:width}}>

        </div>
      </div>
    </>
  )
}

export default ProgressBar
