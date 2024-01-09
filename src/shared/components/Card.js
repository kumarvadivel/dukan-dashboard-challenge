import React from "react";

export default function Card(props) {
    return (
      <div className="card">
        <span className="cardTitle">{props.config.label}</span>
        <span className="cardVal">{props.config.val}</span>
      </div>
    );
}