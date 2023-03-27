"use client";

import { useState, useEffect } from "react";
import SplashComponent from "@/components/SplashComponent";
import AuthComponent from "@/components/Auth/Index";

const Page = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return <> {showSplash ? <SplashComponent /> : <AuthComponent />} </>;
};

export default Page;
