import { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { format, parse, startOfWeek, getDay } from "date-fns";
import enUS from "date-fns/locale/en-US";

import { sampleData } from "../data/calendarData";
import Popup from "./Popup";

const locales = { "en-US": enUS };

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
  getDay,
  locales,
});

function convert(dateStr) {
  const [d, m, y] = dateStr.split("-");
  return new Date(`${y}-${m}-${d}`);
}

export default function CalendarView() {
  const [popupInfo, setPopupInfo] = useState(null);

  const events = Object.keys(sampleData).map((date) => ({
    title: "Data Available",
    start: convert(date),
    end: convert(date),
  }));

  const handleSelectSlot = ({ start }) => {
    const day = String(start.getDate()).padStart(2, "0");
    const month = String(start.getMonth() + 1).padStart(2, "0");
    const year = start.getFullYear();

    const key = `${day}-${month}-${year}`;

    if (sampleData[key]) {
      setPopupInfo({
        date: key,
        values: sampleData[key],
      });
    } else {
      setPopupInfo({
        date: key,
        values: null,
      });
    }
  };

  return (
    <>
      <div style={{ height: "600px", margin: "20px" }}>
        <Calendar
          localizer={localizer}
          events={events}
          views={["month", "week", "day"]}
          selectable
          onSelectSlot={handleSelectSlot}
          popup
        />
      </div>

      {popupInfo && (
        <Popup info={popupInfo} onClose={() => setPopupInfo(null)} />
      )}
    </>
  );
}
