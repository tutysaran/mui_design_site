import { useState } from "react";

const pricingData = {
  title: "Pricing",
  subtitle:
    "Quickly build an effective pricing table for your potential customers with this layout.\nIt's built with default Material UI components with little customization.",
  plans: [
    {
      name: "Free",
      price: 0,
      highlight: false,
      badge: null,
      features: ["10 users included", "2 GB of storage", "Help center access", "Email support"],
      buttonText: "Sign up for free",
    },
    {
      name: "Professional",
      price: 15,
      highlight: true,
      badge: "Recommended",
      features: ["20 users included", "10 GB of storage", "Help center access", "Priority email support", "Dedicated team", "Best deals"],
      buttonText: "Start now",
    },
    {
      name: "Enterprise",
      price: 30,
      highlight: false,
      badge: null,
      features: ["50 users included", "30 GB of storage", "Help center access", "Phone & email support"],
      buttonText: "Contact us",
    },
  ],
};

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="pricing-check-icon">
    <circle cx="10" cy="10" r="10" fill="#1976d2" />
    <path d="M6 10.5l2.5 2.5 5-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Pricing() {
  return (
    <div className="pricing-wrapper">
      <h1 className="pricing-title">{pricingData.title}</h1>
      <p className="pricing-subtitle">{pricingData.subtitle}</p>
      <div className="pricing-cards-row">
        {pricingData.plans.map((plan, index) => {
          const isHighlight = plan.highlight;

          return (
            <div key={index} className={`pricing-card ${isHighlight ? "pricing-card--highlight" : "pricing-card--default"}`}>
              <div className="pricing-card-header">
                <span className="pricing-plan-name">{plan.name}</span>
                {plan.badge && (
                  <span className="pricing-badge">
                    <span className="pricing-badge-icon">✦</span>
                    {plan.badge}
                  </span>
                )}
              </div>
              <div className="pricing-price-row">
                <span className="pricing-price-amount">${plan.price}</span>
                <span className="pricing-price-period">per month</span>
              </div>
              <hr className="pricing-divider" />
              <div className="pricing-features">
                {plan.features.map((feature, i) => (
                  <div key={i} className="pricing-feature-item">
                    <CheckIcon />
                    <span className="pricing-feature-text">{feature}</span>
                  </div>
                ))}
              </div>
              <button className={`pricing-btn ${isHighlight ? "pricing-btn--highlight" : "pricing-btn--default"}`}>
                {plan.buttonText}
              </button>

            </div>
          );
        })}
      </div>
    </div>
  );
}