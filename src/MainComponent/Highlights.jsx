import React from "react";

const highlights = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2"/>
        <circle cx="12" cy="12" r="7" strokeDasharray="2 2"/>
      </svg>
    ),
    title: "Adaptable performance",
    description: "Our product effortlessly adjusts to your needs, boosting efficiency and simplifying your tasks.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    title: "Built to last",
    description: "Experience unmatched durability that goes above and beyond with lasting investment.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"/>
        <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
      </svg>
    ),
    title: "Great user experience",
    description: "Integrate our product into your routine with an intuitive and easy-to-use interface.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 3l14 9-14 9V3z"/>
        <path d="M19 12H5"/>
        <circle cx="19" cy="12" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
    title: "Innovative functionality",
    description: "Stay ahead with features that set new standards, addressing your evolving needs better than the rest.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    title: "Reliable support",
    description: "Count on our responsive customer support, offering assistance that goes beyond the purchase.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: "Precision in every detail",
    description: "Enjoy a meticulously crafted product where small touches make a significant impact on your overall experience.",
  },
];

export default function Highlights() {
  return (
    <div className="highlights-wrapper">
      <h2 className="highlights-title">Highlights</h2>
      <p className="highlights-subtitle">
        Explore why our product stands out: adaptability, durability, user-friendly design, and innovation.
        <br />
        Enjoy reliable customer support and precision in every detail.
      </p>
      <div className="highlights-grid">
        {highlights.map((item, index) => (
          <div key={index} className="highlights-card">
            <div className="highlights-card-icon">
              {item.icon}
            </div>
            <h3 className="highlights-card-title">{item.title}</h3>
            <p className="highlights-card-desc">{item.description}</p>

          </div>
        ))}
      </div>

    </div>
  );
}