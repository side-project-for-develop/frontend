import React from "react";
import Image from "next/image";
import Logo from "@/assets/logo.svg";

const LoginComponent: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden fade-animation">
      <div className="flex flex-col items-center">
        {/* 로고 */}
        <Image src={Logo} alt="tok tok logo" className="z-10 mt-[107px]" />

        {/* 로그인 inputs */}
        <div className="flex flex-col gap-[30px] mt-[98px] w-[calc(100%-64px)]">
          <input
            type="text"
            placeholder="이메일을 입력해주세요"
            className="h-[54px] rounded-lg border border-gray-300 text-sm pl-3 focus:outline-red-500"
          />
          <input
            type="password"
            placeholder="패스워드를 입력해주세요"
            className="h-[54px] rounded-lg border border-gray-300 text-sm pl-3 focus:outline-red-500"
          />
        </div>

        {/* 로그인 buttons */}
        <div className="flex gap-[16px] w-[calc(100%-64px)] mt-[34px] text-xl font-bold font-BMHANNA">
          <button className="bg-[#F52E2E] w-full h-[52px] rounded-lg text-white">
            로그인
          </button>
          <button className="bg-[#EDF117] w-full h-[52px] rounded-lg">
            카카오 로그인
          </button>
        </div>
      </div>

      {/* 회원가입 direction */}
      <p className="mt-[48px] ml-[32px] text-sm">
        아직 회원이 아니십니까?
        <span className="text-[#F52E2E] font-extrabold"> 회원가입</span>
      </p>

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

export default LoginComponent;
