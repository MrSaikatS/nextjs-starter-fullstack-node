"use client";

import { ReactNode, useEffect, useState } from "react";

type ResponsiveToggleNavProps = {
  children: [ReactNode, ReactNode]; // [MobileNav, DesktopNav]
};

const ResponsiveToggleNav = ({ children }: ResponsiveToggleNavProps) => {
  // Initialize with null to indicate "not yet determined"
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const screenQuery = window.matchMedia("(max-width: 768px)");

    const handleScreenChange = () => {
      setIsMobile(screenQuery.matches);
    };

    // Set initial value
    handleScreenChange();

    screenQuery.addEventListener("change", handleScreenChange);

    return () => screenQuery.removeEventListener("change", handleScreenChange);
  }, []);

  // During SSR and initial hydration, render mobile nav (default)
  // This prevents hydration mismatch
  if (isMobile === null) {
    return children[0]; // Mobile nav as default
  }

  // After hydration, show correct nav based on screen size
  return isMobile ? children[0] : children[1];
};

export default ResponsiveToggleNav;
