import { FaRegClock, FaMapMarkerAlt, FaUserTie } from 'react-icons/fa';
import './bootcamp.css';

const Bootcamp = ({ course }) => {
  return (
    <div className="bootcamp-card">
      <div className="bootcamp-thumbnail" style={{ backgroundImage: `url(${course.thumbnail})` }}>
        <span className="bootcamp-duration">{course.duration} Days</span>
      </div>
      <div className="bootcamp-content">
        <h3 className="bootcamp-title">{course.title}</h3>
        <div className="bootcamp-details">
          <div className="detail-item">
            <FaUserTie className="detail-icon" />
            <span>{course.instructor}</span>
          </div>
          <div className="detail-item">
            <FaRegClock className="detail-icon" />
            <span>{course.time}</span>
          </div>
          <div className="detail-item">
            <FaMapMarkerAlt className="detail-icon" />
            <span>{course.venue}</span>
          </div>
        </div>
        <div className="bootcamp-footer">
          <span className="bootcamp-price">${course.price}</span>
          <button className="enroll-btn">
            <span>Enroll Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bootcamp;
