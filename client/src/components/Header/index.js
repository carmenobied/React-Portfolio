import React from "react";
// import "./style.css";

const Header = (props) => {
  return (
    <div className="hero text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      {props.children}
    </div>
  )
} 
export default Header;