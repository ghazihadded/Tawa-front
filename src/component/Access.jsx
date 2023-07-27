import React, { useState } from 'react'
import lock from "../icons/lock.svg"

function Access() {
const [accessList,setAccessList]=useState("Stats")

  return (
    <div className='mt-40'>
        <div className='flex-center gap-35 border-bottom'>
         <div className={`title-gray-600 mb-20 ${accessList==="Stats" && "access-active"}`} onClick={()=>setAccessList('Stats')}>Stats</div>
         <div className={`title-gray-600 mb-20 ${accessList==="Media" && "access-active"}`} onClick={()=>setAccessList('Media')}>Media</div>
         <div className={`title-gray-600 mb-20 ${accessList==="Analytics" && "access-active"}`} onClick={()=>setAccessList('Analytics')}>Analytics</div>
         <div className={`title-gray-600 mb-20 ${accessList==="Profiles" && "access-active"}`} onClick={()=>setAccessList('Profiles')}> Related Profiles</div>
        </div>
        <div className='access-container mt-40'>
            <div className='pos-btn-access'>
            <button className='btn-access'>Join TAWA Talents to Get Full Access <img src={lock} alt="lock" styel={{width:"15px"}} /></button>
            </div>
           
        </div>
    </div>
  )
}

export default Access
