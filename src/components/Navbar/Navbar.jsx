import { useState, useEffect } from 'react';
import './navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Check which section is in viewport
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const offset = 100; // Adjust this value based on your needs
        
        if (rect.top <= offset && rect.bottom >= offset) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of your fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <a href="/" onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}>
            CodeVertex
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-links">
          <a 
            href="#home" 
            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
          >
            Home
          </a>
          <a 
            href="#bootcamps" 
            className={`nav-link ${activeSection === 'bootcamps' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('bootcamps');
            }}
          >
            Bootcamps
          </a>
          <a href="/blog" className="nav-link">Blog</a>
          <a href="/about" className="nav-link">About Us</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <a 
            href="#home"
            className={`mobile-nav-link ${activeSection === 'home' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
          >
            Home
          </a>
          <a 
            href="#bootcamps"
            className={`mobile-nav-link ${activeSection === 'bootcamps' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('bootcamps');
            }}
          >
            Bootcamps
          </a>
          <a href="/blog" className="mobile-nav-link">Blog</a>
          <a href="/about" className="mobile-nav-link">About Us</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
