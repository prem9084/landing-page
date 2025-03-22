import React from "react";

const Pricicng = () => {
  const plans = [
    {
      id: 1,
      name: "Basic",
      price: "$49",
      period: "per month",
      features: [
        "Responsive Website",
        "5 Pages",
        "Basic SEO",
        "Contact Form",
        "Mobile Optimized",
      ],
      recommended: false,
    },
    {
      id: 2,
      name: "Professional",
      price: "$99",
      period: "per month",
      features: [
        "Responsive Website",
        "10 Pages",
        "Advanced SEO",
        "Contact Form",
        "Mobile Optimized",
        "Analytics Integration",
        "Priority Support",
      ],
      recommended: true,
    },
    {
      id: 3,
      name: "Enterprise",
      price: "$249",
      period: "per month",
      features: [
        "Responsive Website",
        "Unlimited Pages",
        "Advanced SEO",
        "Contact Form",
        "Mobile Optimized",
        "Analytics Integration",
        "Priority Support",
        "E-commerce Integration",
        "Custom Features",
      ],
      recommended: false,
    },
  ];
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <h2>Pricing Plans</h2>
        <div className="pricing-grid">
          {plans.map((plan) => (
            <div
              className={`pricing-card ${
                plan.recommended ? "recommended" : ""
              }`}
              key={plan.id}
            >
              {plan.recommended && (
                <div className="recommended-badge">Recommended</div>
              )}
              <h3>{plan.name}</h3>
              <div className="price">
                <span className="amount">{plan.price}</span>
                <span className="period">{plan.period}</span>
              </div>
              <ul className="features">
                {plan.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button
                className={`btn ${
                  plan.recommended ? "btn-primary" : "btn-secondary"
                }`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricicng;
