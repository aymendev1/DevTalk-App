import React from "react";
import { Link, useLocation } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { AiFillMessage } from "react-icons/ai";
import { RiUserFill, RiSettings5Fill } from "react-icons/ri";
import "./sidebar.css";
import { ReactComponent as Logo } from "../../assests/logo.svg";
import DefaultProfilePic from "../../assests/B-5285.jpg";
import Ad from "../../assests/buymecoffeeAd.png";
export default function Sidebar() {
  const DefaultUserName = "aymendev1";
  const CurrentRoute = useLocation();
  const MenuNavItems = [
    {
      display: "Home",
      icon: <HiHome />,
      to: "/",
    },
    {
      display: "Messages",
      icon: <AiFillMessage />,
      to: "/messages",
    },
    {
      display: "Profile",
      icon: <RiUserFill />,
      to: "/profile",
    },
    {
      display: "Settings",
      icon: <RiSettings5Fill />,
      to: "/settings",
    },
  ];
  return (
    <div className="sidebar">
      <div className="logoBox">
        <div>
          <Logo />
        </div>

        <span>DevTalk</span>
      </div>

      <div className="menuBox">
        <span>Menu</span>
        <ul>
          {MenuNavItems.map((item, index) => {
            let ActiveTabClass;
            if (CurrentRoute.pathname === item.to) {
              ActiveTabClass = "activeMenu";
            }
            return (
              <li className={ActiveTabClass}>
                <Link to={item.to} key={index}>
                  {item.icon}
                  {item.display}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="accountBox">
        <span>Account</span>
        <div className="accountBoxItem">
          <img src={DefaultProfilePic} alt="" />
          <div>
            <span>Aymendev</span>
            <span>{"@" + DefaultUserName}</span>
          </div>
        </div>
      </div>
      <div className="adBox">
        <span>Advertisement</span>
        <img src={Ad} alt="" />
      </div>
    </div>
  );
}
