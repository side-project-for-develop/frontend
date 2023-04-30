"use client";

import BackBtnComponent from "@/components/Common/BackBtnComponent";
import DotMenuComponent from "@/components/Common/DotMenuComponent";

const Page = () => {
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
      <div className="flex flex-col items-center gap-3 mt-7 xsm:mt-3">
        <div className="flex items-center justify-center bg-[#E37070] px-3 rounded-2xl text-white">
          유머
        </div>
        <span className="w-[80%] text-center text-lg whitespace-normal">
          만약에 내 애인이 내 친구랑 몰래 바람피다 걸린다면?
        </span>
      </div>
      {/* Selections */}
      <div className="flex flex-col items-center justify-center gap-8 bg-[#FADFDF] py-10 w-full">
        <div className="shadow w-[calc(100%-2rem)] flex justify-between items-center bg-white px-6 h-20 rounded-3xl cursor-pointer">
          <div>A. 죽인다</div>
          <div className="bg-[#FADFDF] h-full flex items-center justify-center max-w-[80px] w-full">
            칼
          </div>
        </div>
        <div className="shadow w-[calc(100%-2rem)] flex justify-between items-center bg-white px-6 h-20 rounded-3xl cursor-pointer">
          <div>B. 한번쯤은 살려줘야지 ㅎㅎ</div>
          <div className="bg-[#FADFDF] h-full flex items-center justify-center max-w-[80px] w-full">
            천사
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
    </div>
  );
};

export default Page;
