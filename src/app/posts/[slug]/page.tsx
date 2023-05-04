"use client";

import BackBtnComponent from "@/components/Common/BackBtnComponent";
import DotMenuComponent from "@/components/Common/DotMenuComponent";
import { useRef } from "react";
import Image from "next/image";
import Angel from "@/assets/selections/angel.svg";
import Sword from "@/assets/selections/sword.svg";

const Page = () => {
  const iconRef = useRef<HTMLDivElement>(null);
  const iconRefTwo = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const textRefTwo = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const boxRefTwo = useRef<HTMLDivElement>(null);
  const width = "63.14%";
  const widthTwo = "36.86%";
  const animHandler = () => {
    const icon = iconRef.current;
    const iconTwo = iconRefTwo.current;
    const text = textRef.current;
    const textTwo = textRefTwo.current;
    const box = boxRef.current;
    const boxTwo = boxRefTwo.current;

    if (icon && iconTwo && text && textTwo && box && boxTwo) {
      icon.classList.add("animationIcon");
      iconTwo.classList.add("animationIcon");
      text.classList.add("animationText");
      textTwo.classList.add("animationText");
      box.classList.add("animationBox");
      boxTwo.classList.add("animationBoxTwo");
    }
  };

  return (
    <div className="relative flex flex-col items-center gap-6 min-h-screen overflow-hidden sm:gap-4 font-bold">
      <BackBtnComponent red={false} />
      {/* Profile */}
      <div className="flex flex-col items-center gap-3 mt-7">
        <div className="w-10 h-10 bg-[#D9D9D9] rounded-full" />
        <p className="text-sm font-bold">톡톡톡</p>
      </div>
      <DotMenuComponent />
      {/* Title */}
      <div className="flex flex-col items-center gap-3 mt-4 xsm:mt-2">
        <div className="flex items-center justify-center bg-[#E37070] px-3 rounded-2xl text-white">
          유머
        </div>
        <span className="w-[80%] text-center text-lg whitespace-normal">
          만약에 내 애인이 내 친구랑 몰래 바람피다 걸린다면?
        </span>
      </div>
      {/* Selections */}
      <div
        className="flex flex-col items-center justify-center gap-8 bg-[#FADFDF] py-10 w-full"
        onClick={animHandler}
      >
        <div className="relative shadow w-[calc(100%-2rem)] flex justify-between items-center bg-white h-20 rounded-3xl cursor-pointer">
          <div
            className="w-[100px] h-full bg-slate-400 rounded-l-3xl hidden"
            ref={boxRef}
          >
            <div className="absolute right-2 top-4 text-xl fade">{width}</div>
            <div className="absolute right-2 top-10 text-sm fade">34명</div>
          </div>
          <div ref={textRef} className="ml-4">
            A. 죽인다
          </div>
          <div
            className="bg-[#FADFDF] h-full flex items-center justify-center max-w-[80px] w-full mr-4"
            ref={iconRef}
          >
            <Image src={Sword} alt="" />
          </div>
        </div>
        <div className="relative shadow w-[calc(100%-2rem)] flex justify-between items-center bg-white h-20 rounded-3xl cursor-pointer">
          <div
            className="w-[100px] h-full bg-slate-400 rounded-l-3xl hidden"
            ref={boxRefTwo}
          >
            <div className="absolute right-2 top-4 text-xl fade">
              {widthTwo}
            </div>
            <div className="absolute right-2 top-10 text-sm fade">11명</div>
          </div>
          <div ref={textRefTwo} className="ml-4">
            B. 한번쯤은 살려줘야지 ㅎㅎ
          </div>
          <div
            className="bg-[#EDEDDD] h-full flex items-center justify-center max-w-[80px] w-full mr-4"
            ref={iconRefTwo}
          >
            <Image src={Angel} alt="" />
          </div>
        </div>
      </div>
      {/* Comments */}
      <div className="flex flex-col justify-start w-[calc(100%-2rem)] mb-[80px] ">
        <div>댓글</div>
        {/* Comment Cards */}
        <div className="flex items-start  gap-3 mt-3 ">
          <div className="w-10 h-10 bg-[#D9D9D9] rounded-full" />
          <div className="text-sm mt-2">
            <p>C반담매</p>
            <p className="font-normal">용서하고 복수해야지 ㅋㅋㅋㅋㅋㅋ</p>
          </div>
        </div>
        {/* Comment Cards */}
        <div className="flex items-start  gap-3 mt-3 ">
          <div className="w-10 h-10 bg-[#D9D9D9] rounded-full" />
          <div className="text-sm mt-2">
            <p>C반담매</p>
            <p className="font-normal">용서하고 복수해야지 ㅋㅋㅋㅋㅋㅋ</p>
          </div>
        </div>
        {/* Comment Cards */}
        <div className="flex items-start  gap-3 mt-3 ">
          <div className="w-10 h-10 bg-[#D9D9D9] rounded-full" />
          <div className="text-sm mt-2">
            <p>C반담매</p>
            <p className="font-normal">용서하고 복수해야지 ㅋㅋㅋㅋㅋㅋ</p>
          </div>
        </div>
        {/* Comment Cards */}
        <div className="flex items-start  gap-3 mt-3 ">
          <div className="w-10 h-10 bg-[#D9D9D9] rounded-full" />
          <div className="text-sm mt-2">
            <p>C반담매</p>
            <p className="font-normal">용서하고 복수해야지 ㅋㅋㅋㅋㅋㅋ</p>
          </div>
        </div>
        {/* Comment Cards */}
        <div className="flex items-start  gap-3 mt-3 ">
          <div className="w-10 h-10 bg-[#D9D9D9] rounded-full" />
          <div className="text-sm mt-2">
            <p>C반담매</p>
            <p className="font-normal">용서하고 복수해야지 ㅋㅋㅋㅋㅋㅋ</p>
          </div>
        </div>
        {/* Comment Cards */}
        <div className="flex items-start  gap-3 mt-3 ">
          <div className="w-10 h-10 bg-[#D9D9D9] rounded-full" />
          <div className="text-sm mt-2">
            <p>C반담매</p>
            <p className="font-normal">용서하고 복수해야지 ㅋㅋㅋㅋㅋㅋ</p>
          </div>
        </div>
        {/* Comment Cards */}
        <div className="flex items-start  gap-3 mt-3 ">
          <div className="w-10 h-10 bg-[#D9D9D9] rounded-full" />
          <div className="text-sm mt-2">
            <p>C반담매</p>
            <p className="font-normal">용서하고 복수해야지 ㅋㅋㅋㅋㅋㅋ</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .animationIcon {
          animation-duration: 2s;
          animation-fill-mode: both;
          animation-name: iconAnim;
          border-radius: 100%;
          position: absolute;
          right: 0;
        }
        .animationText {
          position: absolute;
          font-size: 0.8rem;
          top: -25%;
        }
        .animationBox {
          position: absolute;
          left: 0;
          width: 0;
          display: block;
          background-color: #fadfdf;
          animation: progress 2s ease-out;
          animation-fill-mode: forwards;
        }
        .animationBoxTwo {
          position: absolute;
          left: 0;
          width: 0;
          display: block;
          background-color: #ededdd;
          animation: progressTwo 2s ease-out;
          animation-fill-mode: forwards;
        }

        .fade {
          animation-duration: 2s;
          animation-fill-mode: forwards;
          animation-name: fade-in;
        }

        @keyframes iconAnim {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(0.5);
          }
        }
        @keyframes progress {
          from {
            width: 0;
          }
          to {
            width: ${width};
          }
        }
        @keyframes progressTwo {
          from {
            width: 0;
          }
          to {
            width: ${widthTwo};
          }
        }
        @keyframes fade-in {
          0% {
            opacity: 0;
          }
          70% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Page;
