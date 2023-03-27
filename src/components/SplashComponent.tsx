import React from "react";
import Image from "next/image";
import Logo from "@/assets/logo.svg";

const SplashComponent: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden ">
      {/* 상단 빨간 박스 */}
      <div className="absolute bottom-1/3 right-[70%] rotate-[38deg] bg-[var(--splash-color)] w-full h-full animation bottom-animation" />

      {/* 로고 */}
      <div className="logo-animation opacity-0">
        <Image src={Logo} alt="tok tok logo" className="z-10" />
      </div>

      {/* 하단 빨간 박스 */}
      <div className="absolute top-1/3 left-[70%] rotate-[38deg] bg-[var(--splash-color)] w-full h-full animation top-animation" />

      {/* 애니메이션 로직 */}
      <style jsx>{`
        .animation {
          animation-duration: 2s;
          animation-fill-mode: both;
        }

        .top-animation {
          animation-name: slide-in-top;
        }
        .bottom-animation {
          animation-name: slide-in-bottom;
          transform: rotate(-38deg);
        }
        .logo-animation {
          animation-duration: 2s;
          animation-delay: 1s;
          animation-fill-mode: forwards;
          animation-name: fade-in;
        }

        @keyframes slide-in-top {
          from {
            transform: translateY(100%) translateX(-150%) rotate(38deg);
          }
          to {
            transform: translateY(0) translateX(0) rotate(38deg);
          }
        }

        @keyframes slide-in-bottom {
          from {
            transform: translateY(-100%) translateX(150%) rotate(38deg);
          }
          to {
            transform: translateY(0) translateX(0) rotate(38deg);
          }
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

export default SplashComponent;
