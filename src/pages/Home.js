import React from "react";
import flesh from "../icons/flesh.svg";
import alarm from "../icons/alarm.svg";
import location from "../icons/location.svg"
import ProgressBar from "../component/ProgressBar";
import UserSocial from "../component/UserSocial";
import Chart from "../component/Chart";
import Access from "../component/Access";


function Home() {



  return (
    <div className="home">
      <div className="top-home">
        <div className="back">
          {" "}
          <img src={flesh} alt="icon" />
          back
        </div>

        <div className="alarm">
          <img src={alarm} alt="icon" />
          <div className="notif">2</div>
        </div>
      </div>
      <div>
        <div className="stats">
          <p>
            <span className="title-black-600">Name here</span>
            <br />
            <span className="title-black-800">Instagram Stats</span>
          </p>
          <div>
            <ProgressBar
              title={"Request Left"}
              detail={"260/500"}
              more={"More Request"}
              color={"#95D35D"}
              width={60}
              colorDetail={"#95D35D"}
            />
             <ProgressBar
              title={"Time Left"}
              detail={"21 Day"}
              more={"More Time"}
              color={"#FC445D"}
              width={25}
              colorDetail={"#6C5DD3"}
              styles={{marginTop:"-20px"}}
            />
          </div>
        </div>
      </div>
      <div className="user-container">
        <div>
      <UserSocial />
      <div className="mt-40 flex-center gap-14">
      <div className="alarm">
          <img src={location} alt="icon" />
        </div>
        <div className="title-gray-600">Barcelona, Spain</div>
      </div>
      <div className="mt-40 flex-center justify-between gap-35 flex-wrap">
      <div className="flex-center gap-14">
      <div className="title-gray-600 list-life-style">Healthy</div>
      <div className="title-gray-600 list-life-style">Lifestyle</div>
      <div className="title-gray-600 list-life-style">Sport</div>
        </div>
        <div className="">
        <div className="flex-center gap-14">
      <div className="title-gray-600 list-life-style-right">Request quote</div>
      <div className="title-gray-600 list-life-style-right">Add to shortlist</div>
        </div>
        </div>
      </div>
      <Access />
      </div>
      <div className="chart-container">
<Chart />
      </div>
      </div>
    </div>
  );
}

export default Home;
