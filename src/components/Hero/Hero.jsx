import { useEffect, useState } from 'react';
import VideoModal from '../Watch/Model';
import './hero.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <section className="hero">
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          <div className="hero-text">
            <h1>
              Master Coding with
              <span className="gradient-text"> Professional Bootcamps</span>
            </h1>
            <p className="hero-description">
              Transform your career with intensive, industry-driven coding bootcamps. 
              Learn from experts and build real-world projects.
            </p>
            <div className="hero-cta">
              <button className="primary-btn">Explore Courses</button>
              <button 
                className="secondary-btn"
                onClick={() => setIsModalOpen(true)}
              >
                Watch Demo
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="code-window">
              <div className="code-header">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
              <div className="code-content">
                <pre>
                  <code>
                    <span className="code-keyword">function</span>{" "}
                    <span className="code-function">startCoding</span>() {"{"}
                    <br />
                    {"  "}const <span className="code-variable">future</span> = 
                    <span className="code-string">"bright"</span>;
                    <br />
                    {"  "}
                    <span className="code-keyword">return</span> {"{"}
                    <br />
                    {"    "}success: <span className="code-boolean">true</span>
                    <br />
                    {"  }"};
                    <br />
                    {"}"}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>
      <VideoModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoUrl="https://www.youtube.com/embed/your-video-id"
      />
    </>
  );
};

export default Hero;

