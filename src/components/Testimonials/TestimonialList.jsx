import { useState, useEffect, useRef } from 'react';
import Testimonial from './Testimonial';
import './testimonial.css';

const TestimonialList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "MD RAFI UDDIN",
      title: "CSE Student",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      rating: 5,
      review: "The Git & GitHub bootcamp was exactly what I needed. The instructor's expertise and hands-on approach made version control concepts crystal clear. Highly recommended!"
    },
    {
      id: 2,
      name: "Amer Shaik",
      title: "CS Student",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      rating: 5,
      review: "I took the Java Programming bootcamp and it exceeded my expectations. The curriculum was well-structured and the practical projects helped cement my understanding."
    },
    {
      id: 3,
      name: "Nabeela Fatima",
      title: "Web Developer",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      rating: 4,
      review: "The Python bootcamp was fantastic! The instructor broke down complex concepts into digestible pieces. I'm now confident in my Python skills."
    },
    {
      id: 4,
      name: "David Kim",
      title: "Junior Developer",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      rating: 5,
      review: "The OOP with Java bootcamp was intense but incredibly rewarding. The real-world examples and projects were particularly valuable."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-container">
        <div className="section-header">
          <h2>Student Testimonials</h2>
          <p>Hear what our graduates have to say about their journey</p>
        </div>
        
        <div className="testimonials-slider" ref={sliderRef}>
          <div 
            className="testimonials-track"
            style={{ 
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {testimonials.map((testimonial) => (
              <div className="testimonial-slide" key={testimonial.id}>
                <Testimonial testimonial={testimonial} />
              </div>
            ))}
          </div>

          <button className="slider-btn prev" onClick={prevSlide}>
            <span>‹</span>
          </button>
          <button className="slider-btn next" onClick={nextSlide}>
            <span>›</span>
          </button>

          <div className="slider-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialList;
