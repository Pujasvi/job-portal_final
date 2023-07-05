import React from 'react'

function errorMessageStrip({error}) {
  return (
    <div style={{fontSize:'12px',marginLeft:'10px',color:'red',marginBottom:'10px'}}>{error}</div>
  )
}

export default errorMessageStrip