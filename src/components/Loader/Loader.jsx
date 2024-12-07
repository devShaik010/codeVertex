import { useEffect, useState } from 'react';
import './loader.css';

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Function to update progress based on document loading
    const updateProgress = () => {
      const totalResources = document.images.length + document.scripts.length + document.styleSheets.length;
      let loadedResources = 0;

      // Count loaded images
      Array.from(document.images).forEach(img => {
        if (img.complete) loadedResources++;
      });

      // Count loaded scripts
      Array.from(document.scripts).forEach(script => {
        if (script.loaded) loadedResources++;
      });

      // Count loaded stylesheets
      Array.from(document.styleSheets).forEach(stylesheet => {
        if (stylesheet.loaded) loadedResources++;
      });

      const currentProgress = Math.min(
        Math.round((loadedResources / totalResources) * 100),
        100
      );
      setProgress(currentProgress);
    };

    // Initial progress update
    updateProgress();

    // Listen for resource load events
    window.addEventListener('load', updateProgress);
    document.addEventListener('readystatechange', updateProgress);

    return () => {
      window.removeEventListener('load', updateProgress);
      document.removeEventListener('readystatechange', updateProgress);
    };
  }, []);

  return (
    <div className="loader-container">
      <div className="loader-content">
        <h1 className="loader-title">CodeVertex</h1>
        <div className="loader-bar-container">
          <div 
            className="loader-bar" 
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="loader-percentage">{progress}%</div>
      </div>
    </div>
  );
};

export default Loader; 