"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/assets/logo.svg";
import LoginComponent from "./LoginComponent";
import RegisterComponent from "./RegisterComponent";

const AuthComponent: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const toggleBtnHandler = () => {
    setToggle(!toggle);
  };
  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden fade-animation">
      {/* 로고 */}
      <Image
        src={Logo}
        alt="tok tok logo"
        className="z-10 mt-[107px] ml-auto mr-auto "
      />

      {/* 로그인 - 회원가입  toggle */}
      {toggle ? (
        <RegisterComponent toggleHandler={toggleBtnHandler} />
      ) : (
        <LoginComponent toggleHandler={toggleBtnHandler} />
      )}

      {/* 애니메이션 */}
      <style jsx>{`
        .fade-animation {
          animation-duration: 1s;
          animation-timing-function: ease-in-out;
          animation-name: fade-in;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default AuthComponent;
