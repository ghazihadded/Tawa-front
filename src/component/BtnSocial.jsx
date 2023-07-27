import React from 'react'

function BtnSocial({icon,active,onChange,type,name}) {
  return (
    <div className={`${active?"active-btn":"btn-social-icon"} flex-center`} onClick={()=>onChange(type)}>
    <img src={icon} alt="Icon" className="social-icon"/>
    {name}
  </div>
  )
}

export default BtnSocial
