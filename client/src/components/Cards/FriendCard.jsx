import react from "react";
import "./Cards.css";
export default function FriendsCard(props) {
  const SHortName = props.name.split(" ");
  return (
    <div className="FriendsCard">
      <img src={props.img} alt="" />
      <span>{SHortName[0]}</span>
    </div>
  );
}
