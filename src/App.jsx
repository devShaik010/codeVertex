import { useState, useEffect } from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/hero'
import BootcampList from './components/Bootcamps/BootcampList'
import TestimonialList from './components/Testimonials/TestimonialList'
import Footer from './components/Footer/Footer'
import Loader from './components/Loader/Loader'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Function to handle when content is loaded
    const handleLoad = () => {
      setIsLoading(false);
    };

    // Check if document is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    // Prevent scrolling while loading
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => window.removeEventListener('load', handleLoad);
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar/>
          <section id="home">
            <Hero/>
          </section>
          <section id="bootcamps">
            <BootcampList/>
          </section>
          <section id="testimonials">
            <TestimonialList/>
          </section>
          <Footer/>
        </>
      )}
    </>
  );
}

export default App;
