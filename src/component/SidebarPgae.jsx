import React, { useState } from 'react';
import discover from "../icons/discover.svg"
import search from "../icons/search.svg"
import Calculate from "../icons/calculate.svg"
import favoris from "../icons/favoris.svg"
import shortList from "../icons/shortList.svg"
import inbox from "../icons/inbox.svg"
import settings from "../icons/settings.svg"
import image from "../icons/image.svg"
import arrow from "../icons/arrow.svg"
import tawa from "../icons/tawa.svg"
import menu from '../icons/images/menu.png'


const SidebarPage = () => {
 
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sidebar">
    <div className="sidebar-title">
      <img src={tawa} alt="img"/>
    </div>
    <div className="hamburger" onClick={handleToggle}>
         <img src={menu} alt="menu" style={{width:"150px"}} /> 
      </div>
    <div className={`sider-container ${isOpen?'sider-container-open':''}`}>
    <div className="sidebar-list">
      <div className="sidebar-item">
        <img src={discover} alt="Icon" className="sidebar-icon" />
        Discover Talents
      </div>
      <div className="sidebar-item-search">
        <img src={search} alt="Icon" className="sidebar-icon" />
        Search by Profile
      </div>
      <div className="sidebar-item">
        <img src={Calculate} alt="Icon" className="sidebar-icon" />
        Calculate engagement rate
      </div>
      <div className="sidebar-item">
        <img src={favoris} alt="Icon" className="sidebar-icon" />
        Favorite Influencers
      </div>
      <div className="sidebar-item">
        <img src={shortList} alt="Icon" className="sidebar-icon" />
        Shortlists
      </div>
      <div className="sidebar-item">
        <img src={inbox} alt="Icon" className="sidebar-icon" />
        Direct inbox
      </div>
    </div>
    <div className="sidebar-bottom-list">
      <div className="sidebar-item">
        <img src={image} alt="Icon" className="sidebar-icon" />
        Free account
        <img src={arrow} alt="Avatar" className="avatar-icon" />
      </div>
      <div className="sidebar-item">
        <img src={settings} alt="Icon" className="sidebar-icon" />
        Settings
      </div>
      <div className="sidebar-item">
        <img src={settings} alt="Icon" className="sidebar-icon" />
        Contact us
      </div>
    </div>
    </div>
  </div>
  );
};

export default SidebarPage;
