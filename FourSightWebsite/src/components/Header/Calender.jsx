import React, { useState, useEffect } from "react";
import "../Header/Calender.css";

const sectors = ["Education", "Business", "Corporate", "Government"];

const Calendar = () => {
  const todayDate = new Date();
  const [today] = useState(todayDate);
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());
  const [activeDay, setActiveDay] = useState(today.getDate());
  const [events, setEvents] = useState([]);
  const [showAddEvent, setShowAddEvent] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: "", from: "", to: "" });
  const [appointment, setAppointment] = useState({ sector: sectors[0], email: "", time: "" });

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem("compactEvents")) || [];
    setEvents(savedEvents);
  }, []);

  useEffect(() => {
    localStorage.setItem("compactEvents", JSON.stringify(events));
  }, [events]);

  const daysArray = () => {
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();
    const prevLastDate = new Date(year, month, 0).getDate();
    const nextDays = 7 - new Date(year, month + 1, 0).getDay() - 1;

    const arr = [];
    for (let x = firstDay; x > 0; x--) arr.push({ day: prevLastDate - x + 1, type: "prev" });
    for (let i = 1; i <= lastDate; i++) {
      const hasEvent = events.some(e => e.day === i && e.month === month + 1 && e.year === year);
      arr.push({ day: i, type: "current", active: i === activeDay, event: hasEvent });
    }
    for (let j = 1; j <= nextDays; j++) arr.push({ day: j, type: "next" });
    return arr;
  };

  const prevMonth = () => month === 0 ? (setMonth(11), setYear(year - 1)) : setMonth(month - 1);
  const nextMonth = () => month === 11 ? (setMonth(0), setYear(year + 1)) : setMonth(month + 1);

  const addEvent = () => {
    if (!newEvent.title || !newEvent.from || !newEvent.to) return alert("Fill all fields");
    const updated = [...events];
    const index = updated.findIndex(e => e.day === activeDay && e.month === month + 1 && e.year === year);
    if (index >= 0) updated[index].events.push({ ...newEvent });
    else updated.push({ day: activeDay, month: month + 1, year, events: [{ ...newEvent }] });
    setEvents(updated);
    setNewEvent({ title: "", from: "", to: "" });
    setShowAddEvent(false);
  };

  const submitAppointment = () => {
    if (!appointment.email || !appointment.time) return alert("Fill all fields");
    const mailto = `mailto:info@foursightlearning.com?subject=Appointment Booking&body=Sector: ${appointment.sector}%0ADate: ${activeDay} ${months[month]} ${year}%0ATime: ${appointment.time}%0AEmail: ${appointment.email}`;
    window.location.href = mailto;
  };

  return (
    <div className="compact-calendar-container">
      {/* Calendar */}
      <div className="compact-calendar-left">
        <div className="compact-calendar-header">
          <span className="compact-prev" onClick={prevMonth}>&lt;</span>
          <span className="compact-date">{months[month]} {year}</span>
          <span className="compact-next" onClick={nextMonth}>&gt;</span>
        </div>
        <div className="compact-weekdays">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(d => <div key={d}>{d}</div>)}
        </div>
        <div className="compact-days">
          {daysArray().map((d, idx) => (
            <div
              key={idx}
              className={`compact-day ${d.type === "prev" ? "prev-date" : ""} ${d.type === "next" ? "next-date" : ""} ${d.active ? "active" : ""} ${d.event ? "event" : ""}`}
              onClick={() => setActiveDay(d.day)}
            >
              {d.day}
            </div>
          ))}
        </div>
      </div>

      {/* Appointment & Add Event Form */}
      <div className="compact-calendar-right">
        <div className="compact-today">
          <h3>{["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][new Date(year, month, activeDay).getDay()]}</h3>
          <p>{activeDay} {months[month]} {year}</p>
        </div>

        {/* Appointment Form */}
        <div className="compact-appointment-form">
          <h4>Book Appointment</h4>
          <select value={appointment.sector} onChange={e => setAppointment({ ...appointment, sector: e.target.value })}>
            {sectors.map((s, i) => <option key={i} value={s}>{s}</option>)}
          </select>
          <input type="time" value={appointment.time} onChange={e => setAppointment({ ...appointment, time: e.target.value })} />
          <input type="email" placeholder="Email" value={appointment.email} onChange={e => setAppointment({ ...appointment, email: e.target.value })} />
          <button onClick={submitAppointment}>Submit</button>
        </div>

        {/* Add Event Form */}
        {showAddEvent && (
          <div className="compact-add-event-wrapper active">
            <input
              type="text"
              placeholder="Event Name"
              value={newEvent.title}
              onChange={e => setNewEvent({ ...newEvent, title: e.target.value })}
            />
            <div className="event-row">
              <input
                type="text"
                placeholder="From"
                value={newEvent.from}
                onChange={e => setNewEvent({ ...newEvent, from: e.target.value })}
              />
              <input
                type="text"
                placeholder="To"
                value={newEvent.to}
                onChange={e => setNewEvent({ ...newEvent, to: e.target.value })}
              />
              <button onClick={addEvent}>Add</button>
            </div>
          </div>
        )}
        <button className="compact-add-event-btn" onClick={() => setShowAddEvent(!showAddEvent)}>
          {showAddEvent ? "×" : "+"}
        </button>
      </div>
    </div>
  );
};

export default Calendar;
