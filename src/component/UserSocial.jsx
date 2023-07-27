import React , { useState }  from 'react'
import tiktok from '../icons/tiktok.svg'
import insta from '../icons/insta.svg'
import instaBtn from '../icons/instaBtn.svg'
import BtnSocial from "../component/BtnSocial";
import tiktokBtn from '../icons/tiktokBtn.svg';
import like from "../icons/like.svg";
import profile from "../icons/profile.svg"

function UserSocial() {

    const [btnSocial,setBtnSocial]=useState('')

    const onChangeBtnSocial=(type)=>{
      setBtnSocial(type)
    }



  return (
    <div>
    <div className="container-top flex-wrap">
     <div className="user-desc">
        <div className="avatar-home">
         <img src={profile} alt='profile'/>
         <div className="like">
             <img src={like} alt="icon" />
         </div>
         </div> 
         <div >
          <div className="title-black-600">Samy Chaffai</div>
          <div className="title-gray-600">Samy Chaffai</div>
          <div className="btn-icon">
           <div className="insta"><img src={insta} alt="icon"/></div>
           <div className="tiktok"><img src={tiktok} alt="icon"/></div>
          </div>
         </div>
     </div>
    <div>
     <div className="btn-social mt-10">
   <BtnSocial icon={instaBtn} active={btnSocial==="insta" && true} onChange={onChangeBtnSocial} type="insta" name="Instagram"/>
   <BtnSocial icon={tiktokBtn} active={btnSocial==="tiktok" && true} onChange={onChangeBtnSocial} type="tiktok" name="TikTok" />
     </div>
     <div className="flex-center gap-14 flex-end">
         <div><span className="title-black-800">1.6M</span> <br/><span className="title-gray-600">Followers</span></div>
         <div><span className="title-black-800">19M</span> <br/><span className="title-gray-600">Person reached</span></div>
     </div>
    </div>
    </div>
 </div>
  )
}

export default UserSocial
