"use client";

import { useState, useEffect } from "react";
import SplashComponent from "@/components/SplashComponent";
import LoginComponent from "@/components/Auth/LoginComponent";

const Page = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return <>{showSplash ? <SplashComponent /> : <LoginComponent />}</>;
};

export default Page;
