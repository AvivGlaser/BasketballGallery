import React from "react";
import "./About.css";
import aboutData from "../About/AboutData";
import { ICareerTimeline } from "../../../Helpers/Interfaces";

export default function About() {

  return (
    <div className="about-container">
      <ul className="timeline">
        {(aboutData as ICareerTimeline[]).map((a) => {
          return (
              <li className="timeline-event" key={a.id}>
                <label className="timeline-event-icon"></label>
                <div className="timeline-event-copy">
                  <p className="timeline-event-thumbnail">
                    {a.date.day} 
                    {a.date.month}
                    {a.date.year}
                  </p>
                  <h4>{a.timelineTitle}</h4>
                  <img src={a.img} alt={a.alt} className="timeline-image"></img>
                  <p>
                    <br />
                    {a.description}
                  </p>
                </div>
              </li>
          );
        })}
      </ul>
    </div>
  );
}
