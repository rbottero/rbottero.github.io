import { FaRegUser } from "react-icons/fa6";
import ReactDOM from "react-dom";
import Countdown from "react-countdown";

import "./reservation.css";

const Reservation = () => {
  // Obtén la fecha del viernes 25 de este mes
  const targetDate = new Date(2025, 3, 25).getTime() + 30 * 24 * 60 * 60 * 1000;

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span className="completed-text">¡Tiempo terminado!</span>;
    } else {
      return (
        <div className="countdown-display">
          <div className="time-box">{String(days).padStart(2, "0")}d</div>
          <div className="time-box">{String(hours).padStart(2, "0")}h</div>
          <div className="time-box">{String(minutes).padStart(2, "0")}m</div>
          <div className="time-box">{String(seconds).padStart(2, "0")}s</div>
        </div>
      );
    }
  };

  return (
    <div className="reservation-container">
      <Countdown date={targetDate} renderer={renderer} />
      <div className="counter-header">
        <span>Nuevo drop</span>
      </div>
    </div>
  );
};

export default Reservation;
