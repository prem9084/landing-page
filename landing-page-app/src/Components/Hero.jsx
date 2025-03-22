import React from "react";
import "./Styles/Hero.css";
const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-video-container">
        {/* Background video with poster fallback */}
        <video
          autoPlay
          muted
          loop
          poster="/images/hero-poster.jpg"
          className="hero-video"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="hero-content">
        <div className="container">
          <h1>Transform Your Digital Experience</h1>
          <p>Innovative solutions for the modern web</p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
