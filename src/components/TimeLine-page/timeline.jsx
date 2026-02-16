import React from 'react';
import './Timeline.css';

const Timeline = () => {

  const events = [
    {
      title: "Engagement Ceremony",
      date: "12 Feb 2026",
      desc: "Exchange of rings and family gathering celebration."
    },
    {
      title: "Haldi Function",
      date: "18 Feb 2026",
      desc: "Traditional haldi ceremony with music & joy."
    },
    {
      title: "Mehendi Night",
      date: "19 Feb 2026",
      desc: "Mehendi designs, dance and celebration."
    },
    {
      title: "Wedding Ceremony",
      date: "20 Feb 2026",
      desc: "Main wedding with rituals and vows."
    },
    {
      title: "Reception",
      date: "21 Feb 2026",
      desc: "Grand reception and dinner celebration."
    }
  ];

  return (
    <div className="timeline-page">

      <h1 className="timeline-title">Wedding Timeline</h1>
      <p className="timeline-subtitle">Our beautiful journey</p>

      <div className="timeline-container">
        {events.map((event, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="timeline-content">
              <h3>{event.title}</h3>
              <span className="date">{event.date}</span>
              <p>{event.desc}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Timeline;
