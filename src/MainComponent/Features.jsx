import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import featuresData from "./featuresData.json";

/* ── Icons ─────────────────────────────────────────────── */
const DashboardIcon = ({ active }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? "#1e293b" : "#64748b"}>
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
);

const MobileIcon = ({ active }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? "#1e293b" : "#64748b"} strokeWidth="1.8" strokeLinecap="round">
    <rect x="5" y="2" width="14" height="20" rx="2" />
    <rect x="9" y="2" width="6" height="3" rx="1" fill={active ? "#1e293b" : "#64748b"} stroke="none" />
    <line x1="8" y1="18" x2="16" y2="18" />
  </svg>
);

const PlatformsIcon = ({ active }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? "#1e293b" : "#64748b"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="14" height="10" rx="1.5" />
    <path d="M8 14v3M5 17h6" />
    <rect x="16" y="10" width="6" height="8" rx="1" />
    <line x1="19" y1="18" x2="19" y2="20" />
    <line x1="17" y1="20" x2="21" y2="20" />
  </svg>
);

const iconMap = {
  dashboard: DashboardIcon,
  mobile: MobileIcon,
  platforms: PlatformsIcon,
};

/* ── Component ──────────────────────────────────────────── */
export default function Features() {
  const [activeId, setActiveId] = useState(null);
  const activeFeature = featuresData.features.find((f) => f.id === activeId);

  return (
    <Box className="features-fullbleed">
      <Box className="features-inner">
        <Typography className="features-title" variant="h4">
          {featuresData.title}
        </Typography>
        <Typography className="features-subtitle" variant="body1">
          {featuresData.subtitle}
        </Typography>
        <Box className="features-layout">
          <Box className="features-image-panel">
            {activeFeature ? (
              <img
                key={activeFeature.image}
                src={activeFeature.image}
                alt={activeFeature.title}
                className="features-preview-img"
              />
            ) : (
              <Box className="features-placeholder">
                <Typography className="features-placeholder-text">
                  Select a feature to preview
                </Typography>
              </Box>
            )}
          </Box>
          <Box className="features-list">
            {featuresData.features.map((feature) => {
              const isActive = feature.id === activeId;
              const Icon = iconMap[feature.icon];

              return (
                <Box
                  key={feature.id}
                  onClick={() => setActiveId(feature.id)}
                  className={`features-item ${isActive ? "features-item--active" : "features-item--default"}`}
                >
                  <Box className="features-item-icon">
                    <Icon active={isActive} />
                  </Box>
                  <Typography className={`features-item-title ${isActive ? "features-item-title--active" : ""}`}>
                    {feature.title}
                  </Typography>
                  <Typography className="features-item-desc">
                    {feature.description}
                  </Typography>
                </Box>
              );
            })}
          </Box>

        </Box>
      </Box>
    </Box>
  );
}