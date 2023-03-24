import React from 'react'
import "./herosection.css";
import Hand_holding_bulb_3D from "../../assets/images/Hand_holding_bulb_3D.png";
// import waves from "../../assets/images/waves.png";
const HeroSection = () => {
  return (
    <div className="app__hero">
      <div className="hero-left">
        <h1>Hackathon Submissions</h1>
        <p className="hero-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. At inventore iusto ducimus nulla placeat non? Fuga praesentium officia mollitia similique explicabo ab iste porro fugiat, beatae illum tenetur dignissimos incidunt quod minima exercitationem ad.</p>
        <div className="btn">
        <button className="primary-btn">
          Upload Sumbission
        </button>

        </div>
      </div>
      <div className="hero-right">
        <img src={Hand_holding_bulb_3D} alt="hero-lines" />
      </div>
    </div>
  )
}

export default HeroSection