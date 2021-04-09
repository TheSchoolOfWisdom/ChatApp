import React from "react";
import "./Contact.css";

function Contact(props) {
  return (
    <div className="Contact">
      <img className="avatar" src={props.avatar} alt={props.name} />

      <div>
        <h4 className="name">{props.name}</h4>

        <div className="status">
          <span className={props.online ? "status-online" : "status-offline"} />
          {props.online ? "online" : "offline"}
        </div>
      </div>
    </div>
  );
}

export default Contact;
