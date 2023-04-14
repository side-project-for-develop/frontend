"use client";

import { Input } from "@/components/_Materials/Input";
import { useCallback } from "react";

const Page = () => {
  const onChangeId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {},
  []);
  return (
    <div className="relative flex flex-col items-center gap-12 min-h-screen overflow-hidden sm:gap-4 xsm:gap-2">
      {/* back button => component with actual link*/}

      <div className="font-bold mt-8 text-lg xsm:mt-4">게시글작성</div>

      <div className="w-[calc(100%-4rem)] p-10 flex flex-col gap-4 items-center bg-[#DF7272] rounded-3xl sm:p-5 xsm:p-3">
        <div className="flex flex-col w-full">
          <span>글작성</span>
          <Input
            placeholder="ddd"
            type="text"
            onChange={onChangeId}
            height="h-11"
          />
        </div>
        <div className="flex flex-col w-full">
          <span>카테고리</span>
          <select name="" id="">
            <option>dd</option>
            <option>dd</option>
            <option>dd</option>
          </select>
        </div>
      </div>

      <div className="w-[calc(100%-4rem)] p-10 flex flex-col gap-4 bg-[#DF7272] rounded-3xl sm:p-5 xsm:p-3">
        <span className="text-lg">선택지 작성</span>
        <div className="flex flex-col w-full">
          <span>선택지 1</span>
          <Input
            placeholder="ddd"
            type="text"
            onChange={onChangeId}
            height="h-11"
            round="rounded-t-lg"
            border="border-none"
          />
          <label className="bg-white py-2 px-4 rounded-b-lg  cursor-pointer hover:bg-gray-100  text-xs">
            이미지 첨부(선택)
            <input type="file" className="hidden" />
          </label>
        </div>
        <div className="flex flex-col w-full">
          <span>선택지 2</span>
          <Input
            placeholder="ddd"
            type="text"
            onChange={onChangeId}
            height="h-11"
            round="rounded-t-lg"
            border="border-none"
          />
          <label className="bg-white py-2 px-4 rounded-b-lg  cursor-pointer hover:bg-gray-100 text-xs">
            이미지 첨부(선택)
            <input type="file" className="hidden" />
          </label>
        </div>
      </div>

      <button className="w-[calc(100%-4rem)] h-14 flex items-center justify-center bg-white border-2 border-[#DF7272] rounded-md mb-[70px] text-[#DF7272] font-semibold xsm:h-8">
        게시하기
      </button>
      <style jsx>{`
        span {
          color: white;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
      `}</style>
    </div>
  );
};

export default Page;