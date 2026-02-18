import React, { useState, useRef } from "react";
import "./Timeline.css";

import engagementImg from "../../assets/engagement.png";
import haldiImg from "../../assets/haldi.png";
import mehendiImg from "../../assets/mehendi.png";
import weddingImg from "../../assets/wedding.png";
import receptionImg from "../../assets/reception.png";

const Timeline = () => {
  const bookingRef = useRef(null);

  const [events, setEvents] = useState([
    { title: "Engagement Ceremony", image: engagementImg },
    { title: "Haldi Function", image: haldiImg },
    { title: "Mehendi Night", image: mehendiImg },
    { title: "Wedding Ceremony", image: weddingImg },
    { title: "Reception", image: receptionImg },
  ]);

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    venue: "",
  });

  const [currentDate, setCurrentDate] = useState(new Date());

  const handleClick = (title) => {
    setSelectedEvent(title);
    setFormData({ date: "", time: "", venue: "" });

    setTimeout(() => {
      bookingRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedEvents = events.map((event) =>
      event.title === selectedEvent
        ? { ...event, ...formData }
        : event
    );

    setEvents(updatedEvents);

    // Auto move calendar to selected month
    const selected = new Date(formData.date);
    setCurrentDate(
      new Date(selected.getFullYear(), selected.getMonth(), 1)
    );

    setSelectedEvent(null);
  };

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayIndex = new Date(year, month, 1).getDay();

  return (
    <div className="timeline-container">
      <h2>Wedding Timeline</h2>

      {/* Timeline */}
      <div className="timeline">
        <div className="line"></div>

        {events.map((event, index) => (
          <div
            key={index}
            className={`timeline-item ${
              index % 2 === 0 ? "left" : "right"
            }`}
          >
            <div
              className="content"
              onClick={() => handleClick(event.title)}
            >
              <div className="event-header">
                <img src={event.image} alt="icon" />
                <h3>{event.title}</h3>
              </div>

              {event.date ? (
                <>
                  <p><strong>Date:</strong> {event.date}</p>
                  <p><strong>Time:</strong> {event.time}</p>
                  <p><strong>Venue:</strong> {event.venue}</p>
                </>
              ) : (
                <p className="click-text">
                  Click to Schedule Event
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Booking */}
      {selectedEvent && (
        <div className="booking-box" ref={bookingRef}>
          <h3>Schedule: {selectedEvent}</h3>

          <form onSubmit={handleSubmit}>
            <input
              type="date"
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
              required
            />

            <input
              type="time"
              value={formData.time}
              onChange={(e) =>
                setFormData({ ...formData, time: e.target.value })
              }
              required
            />

            <input
              type="text"
              placeholder="Enter Venue"
              value={formData.venue}
              onChange={(e) =>
                setFormData({ ...formData, venue: e.target.value })
              }
              required
            />

            <button type="submit">Confirm</button>
            <button
              type="button"
              className="cancel"
              onClick={() => setSelectedEvent(null)}
            >
              Cancel
            </button>
          </form>
        </div>
      )}

      {/* Calendar */}
      <div className="calendar-section">
        <h3>Event Calendar</h3>

        <div className="calendar">
          <div className="calendar-header">
            <button
              onClick={() =>
                setCurrentDate(new Date(year, month - 1, 1))
              }
            >
              {"<"}
            </button>

            <h4>
              {currentDate.toLocaleString("default", {
                month: "long",
              })}{" "}
              {year}
            </h4>

            <button
              onClick={() =>
                setCurrentDate(new Date(year, month + 1, 1))
              }
            >
              {">"}
            </button>
          </div>

          <div className="calendar-grid">
            {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
              <div key={d} className="day-name">{d}</div>
            ))}

            {Array.from({ length: firstDayIndex }).map((_, i) => (
              <div key={"empty" + i}></div>
            ))}

            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const formatted = `${year}-${(month + 1)
                .toString()
                .padStart(2, "0")}-${day
                .toString()
                .padStart(2, "0")}`;

              const isBooked = events.some(
                (event) => event.date === formatted
              );

              return (
                <div
                  key={day}
                  className={`day ${isBooked ? "booked" : ""}`}
                >
                  {day}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
