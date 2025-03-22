import React from "react";
import "./Styles/Services.css";
const Services = () => {
  const services = [
    {
      id: 1,
      icon: "🚀",
      title: "Fast Performance",
      description:
        "Optimized websites that load quickly and provide a smooth user experience.",
    },
    {
      id: 2,
      icon: "📱",
      title: "Responsive Design",
      description:
        "Websites that look great on all devices, from desktop to mobile.",
    },
    {
      id: 3,
      icon: "🔒",
      title: "Security First",
      description:
        "Built with security in mind to protect your data and your users.",
    },
    {
      id: 4,
      icon: "🔍",
      title: "SEO Optimized",
      description:
        "Improve your search engine rankings with our SEO best practices.",
    },
  ];
  return (
    <section className="services" id="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
