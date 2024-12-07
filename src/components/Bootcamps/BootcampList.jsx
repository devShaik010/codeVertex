import Bootcamp from './Bootcamp';
import './bootcamp.css';

const BootcampList = () => {
  const bootcamps = [
    {
      id: 1,
      title: "Git & GitHub Mastery",
      instructor: "SHAIK ABRAR",
      duration: 7,
      time: "10:00 AM - 2:00 PM",
      venue: "Online",
      price: 199,
      thumbnail: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=400"
    },
    {
      id: 2,
      title: "Java Programming Fundamentals",
      instructor: "SHAIK ABRAR",
      duration: 7,
      time: "2:00 PM - 6:00 PM",
      venue: "Google Meet",
      price: 299,
      thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=400"
    },
    {
      id: 3,
      title: "Advanced OOP with Java",
      instructor: "ShahNawaz Alam",
      duration:9,
      time: "9:00 AM - 1:00 PM",
      venue: "Online",
      price: 249,
      thumbnail: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=400"
    },
    {
      id: 4,
      title: "Python for Beginners",
      instructor: "Ahmad Rafi",
      duration: 12,
      time: "3:00 PM - 7:00 PM",
      venue: "Zoom",
      price: 199,
      thumbnail: "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?q=80&w=400"
    }
  ];

  return (
    <section className="bootcamps-section">
      <div className="bootcamps-container">
        <div className="section-header">
          <h2>Available Bootcamps</h2>
          <p>Choose from our intensive 7-day bootcamps to accelerate your coding journey</p>
        </div>
        <div className="bootcamps-grid">
          {bootcamps.map(bootcamp => (
            <Bootcamp key={bootcamp.id} course={bootcamp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BootcampList;
