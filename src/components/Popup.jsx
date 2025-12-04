import Chart from "./BarChart";

export default function Popup({ info, onClose }) {
  return (
    <div className="popup-container">
      <div className="popup-box">
        <h3>Selected Date: {info.date}</h3>

        {info.values ? (
          <Chart data={info.values} />
        ) : (
          <p style={{ color: "red" }}>
            No data found for the selected date ({info.date})
          </p>
        )}

        <button style={{ marginTop: "20px" }} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
