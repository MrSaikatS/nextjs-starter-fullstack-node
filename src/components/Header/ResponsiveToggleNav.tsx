"use client";

import { ReactNode, useSyncExternalStore } from "react";

type ResponsiveToggleNavProps = {
  children: [ReactNode, ReactNode]; // [MobileNav, DesktopNav]
};

const subscribe = (callback: () => void) => {
  const screenQuery = window.matchMedia("(max-width: 768px)");
  screenQuery.addEventListener("change", callback);
  return () => screenQuery.removeEventListener("change", callback);
};

const getSnapshot = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(max-width: 768px)").matches;
};

const getServerSnapshot = () => false;

const ResponsiveToggleNav = ({ children }: ResponsiveToggleNavProps) => {
  const isMobile = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  if (isMobile) {
    return <div className="block md:hidden">{children[0]}</div>;
  }

  return <div className="hidden md:block">{children[1]}</div>;
};

export default ResponsiveToggleNav;
