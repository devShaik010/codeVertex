import { FaStar } from 'react-icons/fa';
import './testimonial.css';

const Testimonial = ({ testimonial }) => {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaStar 
        key={index} 
        className={`star ${index < rating ? 'filled' : ''}`}
      />
    ));
  };

  return (
    <div className="testimonial-card">
      <div className="testimonial-content">
        {/* <div className="quote-icon">"</div> */}
        <p className="testimonial-text">{testimonial.review}</p>
        <div className="rating">
          {renderStars(testimonial.rating)}
        </div>
      </div>
      <div className="testimonial-author">
        <img 
          src={testimonial.image} 
          alt={testimonial.name} 
          className="author-image"
        />
        <div className="author-info">
          <h4 className="author-name">{testimonial.name}</h4>
          <p className="author-title">{testimonial.title}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
