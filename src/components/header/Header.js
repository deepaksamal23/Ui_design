import React from "react";
import logo from "../../assets/logo.png";
import add from "../../assets/add.png"
import user from "../../assets/user.png"
import file from "../../assets/file.png"
import filedown from "../../assets/filedown.png"
import pdf from "../../assets/pdf.png"
import setting from "../../assets/setting.png"
import lastdown from "../../assets/lastdown.png"
import "./Header.css";
import Profile from "../../screen/profile/Profile";
const Header = () => {
  return (
    <>
      <div className="container">
        <div className="child_container">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>

          <div className="menulist">
          <div className="menu1">
          <img src={add} alt="" />
          </div>

          <div className="menu2">
          <img src={user} alt="" />
          </div>

          <div className="menu3">
          <img src={file} alt="" />
          </div>

          <div className="menu4">
          <img src={filedown} alt="" />
          </div>

          <div className="menu5">
          <img src={pdf} alt="" />
          </div>

          <div className="menu6">
          <img src={setting} alt="" />
          </div>

          <div className="menu7">
          <img src={lastdown} alt="" />
          </div>
          </div>
        </div>
      </div>
      <Profile/>
    </>
  );
};

export default Header;
