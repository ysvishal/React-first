import React from 'react'
import './Card.css'
import { Bookmark } from "lucide-react";

export default function Card(props) {
  return (
    <div id="box">
      <div className="card">
        <div className="top">
          <img
            src={props.image}
            alt="logo"
          />
          <button>
            Save <Bookmark size={16} />
          </button>
        </div>
        <div className="main">
          <h3>
            {props.company} <span>{props.days} days ago</span>
          </h3>
          <h2>{props.job}</h2>
          <div className="desc">
            {props.arr.map((ele) => {
                return <span>{ele}</span>
            })
}
          </div>
        </div>
        <div id="lineParent">
          <div id="line"></div>
        </div>
        <div className="footer">
          <div>
            <h3>{props.price}</h3>
            <h4>{props.place}</h4>
          </div>
          <button>Apply now</button>
        </div>
      </div>
    </div>
  );
}
