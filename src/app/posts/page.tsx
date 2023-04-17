"use client";
import Image from "next/image";
import Logo_H_W from "@/assets/logo_horizontal_white.svg";
import AddPostComponent from "@/components/Common/AddPostComponent";
import SearchIcon from "@/assets/search.svg";
import { useState } from "react";

type Category = "전체" | "건강" | "IT" | "유머" | "취미";
type Sorting = "조회순" | "최신순";
const categories: Category[] = ["전체", "건강", "IT", "유머", "취미"];
const sorts: Sorting[] = ["조회순", "최신순"];

const Page = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("전체");
  const [selectedSort, setSelectedSort] = useState<string>("조회순");
  const renderFunction = (value: string, type: "category" | "sort") => {
    const isSelected =
      type === "category" ? selectedCategory === value : selectedSort === value;
    const className = `py-1 px-${
      type === "category" ? 2 : 1
    } rounded-lg cursor-pointer transition-colors xxsm:w-${
      type === "category" ? `[35px]` : ""
    } ${
      isSelected
        ? type === "category"
          ? "text-white"
          : "text-black text-[13px]"
        : type === "category"
        ? "text-black"
        : "text-gray-400 text-[13px]"
    }`;
    const clickHandler =
      type === "category"
        ? () => setSelectedCategory(value)
        : () => setSelectedSort(value);
    return (
      <div key={value} className={className} onClick={clickHandler}>
        {value}
      </div>
    );
  };

  return (
    <div className="relative overflow-x-hidden h-full">
      <div className="absolute bottom-40 right-20">
        <AddPostComponent />
      </div>

      {/* Header */}
      <div className="flex flex-col items-center h-36 bg-[#FF6868]">
        <Image
          src={Logo_H_W}
          alt="tok tok logo"
          className="mt-2 cursor-pointer"
        />
        {/* Search DIV + Icon */}
        <div className="flex items-center justify-center px-4 bg-white rounded-3xl w-[calc(100%-2rem)] h-9 mt-3">
          <input
            type="text"
            className="w-full rounded-3xl px-2 focus:outline-none"
          />
          <Image src={SearchIcon} alt="search" className="cursor-pointer" />
        </div>
        {/* Categories */}
        <div className="flex justify-between w-[80%] items-center mt-4 text-[20px] font-bold font-BMHANNA">
          {categories.map((category) => renderFunction(category, "category"))}
        </div>
      </div>

      {/* Sorts */}
      <div className="w-[95%] flex justify-end mt-3 text-sm gap-1">
        {sorts.map((sort) => renderFunction(sort, "sort"))}
      </div>

      {/* Cards */}
      <div className=" w-[100%] flex flex-col items-center mb-[80px]">
        {/* Card */}
        <div className="w-[90%] flex flex-col w-30 border border-[#eceaea] rounded-2xl mt-3 shadow-postBox pb-3 cursor-pointer">
          {/* Category */}
          <div className="mx-4 mt-4">
            <span className="bg-[#E37070] text-white px-2 rounded-xl ">
              유머
            </span>
          </div>
          {/* Title */}
          <div className="text-sm font-bold mx-4 mt-2 mb-1">
            만약에 내 애인이 내 친구랑 몰래 바람피다 걸린다면?
          </div>
          {/* Subtitle */}
          <div className="text-xs text-[#918d8d] font-bold mx-4">
            죽인다 / 한번쯤 용서한다
          </div>
          {/* User Profile, Name         How many people joined */}
          <div className="flex justify-between mx-4 mt-2">
            <div className="flex gap-1 items-center">
              <div className="bg-[#B8B8B8] w-5 h-5 rounded-full" />
              <div className="text-xs">hanghae99</div>
            </div>
            <div className="flex gap-1 items-center">
              <div className="bg-[#6e6d6d] w-5 h-5 rounded-full" />
              <div className="text-[10px] text-[#B8B8B8]">14명 참여</div>
            </div>
          </div>
        </div>
        <div className="w-[90%] flex flex-col w-30 border border-[#eceaea] rounded-2xl mt-3 shadow-postBox pb-3 cursor-pointer">
          {/* Category */}
          <div className="mx-4 mt-4">
            <span className="bg-[#E37070] text-white px-2 rounded-xl ">
              유머
            </span>
          </div>
          {/* Title */}
          <div className="text-sm font-bold mx-4 mt-2 mb-1">
            만약에 내 애인이 내 친구랑 몰래 바람피다 걸린다면?
          </div>
          {/* Subtitle */}
          <div className="text-xs text-[#918d8d] font-bold mx-4">
            죽인다 / 한번쯤 용서한다
          </div>
          {/* User Profile, Name         How many people joined */}
          <div className="flex justify-between mx-4 mt-2">
            <div className="flex gap-1 items-center">
              <div className="bg-[#B8B8B8] w-5 h-5 rounded-full" />
              <div className="text-xs">hanghae99</div>
            </div>
            <div className="flex gap-1 items-center">
              <div className="bg-[#6e6d6d] w-5 h-5 rounded-full" />
              <div className="text-[10px] text-[#B8B8B8]">14명 참여</div>
            </div>
          </div>
        </div>
        <div className="w-[90%] flex flex-col w-30 border border-[#eceaea] rounded-2xl mt-3 shadow-postBox pb-3 cursor-pointer">
          {/* Category */}
          <div className="mx-4 mt-4">
            <span className="bg-[#E37070] text-white px-2 rounded-xl ">
              유머
            </span>
          </div>
          {/* Title */}
          <div className="text-sm font-bold mx-4 mt-2 mb-1">
            만약에 내 애인이 내 친구랑 몰래 바람피다 걸린다면?
          </div>
          {/* Subtitle */}
          <div className="text-xs text-[#918d8d] font-bold mx-4">
            죽인다 / 한번쯤 용서한다
          </div>
          {/* User Profile, Name         How many people joined */}
          <div className="flex justify-between mx-4 mt-2">
            <div className="flex gap-1 items-center">
              <div className="bg-[#B8B8B8] w-5 h-5 rounded-full" />
              <div className="text-xs">hanghae99</div>
            </div>
            <div className="flex gap-1 items-center">
              <div className="bg-[#6e6d6d] w-5 h-5 rounded-full" />
              <div className="text-[10px] text-[#B8B8B8]">14명 참여</div>
            </div>
          </div>
        </div>
        <div className="w-[90%] flex flex-col w-30 border border-[#eceaea] rounded-2xl mt-3 shadow-postBox pb-3 cursor-pointer">
          {/* Category */}
          <div className="mx-4 mt-4">
            <span className="bg-[#E37070] text-white px-2 rounded-xl ">
              유머
            </span>
          </div>
          {/* Title */}
          <div className="text-sm font-bold mx-4 mt-2 mb-1">
            만약에 내 애인이 내 친구랑 몰래 바람피다 걸린다면?
          </div>
          {/* Subtitle */}
          <div className="text-xs text-[#918d8d] font-bold mx-4">
            죽인다 / 한번쯤 용서한다
          </div>
          {/* User Profile, Name         How many people joined */}
          <div className="flex justify-between mx-4 mt-2">
            <div className="flex gap-1 items-center">
              <div className="bg-[#B8B8B8] w-5 h-5 rounded-full" />
              <div className="text-xs">hanghae99</div>
            </div>
            <div className="flex gap-1 items-center">
              <div className="bg-[#6e6d6d] w-5 h-5 rounded-full" />
              <div className="text-[10px] text-[#B8B8B8]">14명 참여</div>
            </div>
          </div>
        </div>
        <div className="w-[90%] flex flex-col w-30 border border-[#eceaea] rounded-2xl mt-3 shadow-postBox pb-3 cursor-pointer">
          {/* Category */}
          <div className="mx-4 mt-4">
            <span className="bg-[#E37070] text-white px-2 rounded-xl ">
              유머
            </span>
          </div>
          {/* Title */}
          <div className="text-sm font-bold mx-4 mt-2 mb-1">
            만약에 내 애인이 내 친구랑 몰래 바람피다 걸린다면?
          </div>
          {/* Subtitle */}
          <div className="text-xs text-[#918d8d] font-bold mx-4">
            죽인다 / 한번쯤 용서한다
          </div>
          {/* User Profile, Name         How many people joined */}
          <div className="flex justify-between mx-4 mt-2">
            <div className="flex gap-1 items-center">
              <div className="bg-[#B8B8B8] w-5 h-5 rounded-full" />
              <div className="text-xs">hanghae99</div>
            </div>
            <div className="flex gap-1 items-center">
              <div className="bg-[#6e6d6d] w-5 h-5 rounded-full" />
              <div className="text-[10px] text-[#B8B8B8]">14명 참여</div>
            </div>
          </div>
        </div>
        <div className="w-[90%] flex flex-col w-30 border border-[#eceaea] rounded-2xl mt-3 shadow-postBox pb-3 cursor-pointer">
          {/* Category */}
          <div className="mx-4 mt-4">
            <span className="bg-[#E37070] text-white px-2 rounded-xl ">
              유머
            </span>
          </div>
          {/* Title */}
          <div className="text-sm font-bold mx-4 mt-2 mb-1">
            만약에 내 애인이 내 친구랑 몰래 바람피다 걸린다면?
          </div>
          {/* Subtitle */}
          <div className="text-xs text-[#918d8d] font-bold mx-4">
            죽인다 / 한번쯤 용서한다
          </div>
          {/* User Profile, Name         How many people joined */}
          <div className="flex justify-between mx-4 mt-2">
            <div className="flex gap-1 items-center">
              <div className="bg-[#B8B8B8] w-5 h-5 rounded-full" />
              <div className="text-xs">hanghae99</div>
            </div>
            <div className="flex gap-1 items-center">
              <div className="bg-[#6e6d6d] w-5 h-5 rounded-full" />
              <div className="text-[10px] text-[#B8B8B8]">14명 참여</div>
            </div>
          </div>
        </div>
        <div className="w-[90%] flex flex-col w-30 border border-[#eceaea] rounded-2xl mt-3 shadow-postBox pb-3 cursor-pointer">
          {/* Category */}
          <div className="mx-4 mt-4">
            <span className="bg-[#E37070] text-white px-2 rounded-xl ">
              유머
            </span>
          </div>
          {/* Title */}
          <div className="text-sm font-bold mx-4 mt-2 mb-1">
            만약에 내 애인이 내 친구랑 몰래 바람피다 걸린다면?
          </div>
          {/* Subtitle */}
          <div className="text-xs text-[#918d8d] font-bold mx-4">
            죽인다 / 한번쯤 용서한다
          </div>
          {/* User Profile, Name         How many people joined */}
          <div className="flex justify-between mx-4 mt-2">
            <div className="flex gap-1 items-center">
              <div className="bg-[#B8B8B8] w-5 h-5 rounded-full" />
              <div className="text-xs">hanghae99</div>
            </div>
            <div className="flex gap-1 items-center">
              <div className="bg-[#6e6d6d] w-5 h-5 rounded-full" />
              <div className="text-[10px] text-[#B8B8B8]">14명 참여</div>
            </div>
          </div>
        </div>
        <div className="w-[90%] flex flex-col w-30 border border-[#eceaea] rounded-2xl mt-3 shadow-postBox pb-3 cursor-pointer">
          {/* Category */}
          <div className="mx-4 mt-4">
            <span className="bg-[#E37070] text-white px-2 rounded-xl ">
              유머
            </span>
          </div>
          {/* Title */}
          <div className="text-sm font-bold mx-4 mt-2 mb-1">
            만약에 내 애인이 내 친구랑 몰래 바람피다 걸린다면?
          </div>
          {/* Subtitle */}
          <div className="text-xs text-[#918d8d] font-bold mx-4">
            죽인다 / 한번쯤 용서한다
          </div>
          {/* User Profile, Name         How many people joined */}
          <div className="flex justify-between mx-4 mt-2">
            <div className="flex gap-1 items-center">
              <div className="bg-[#B8B8B8] w-5 h-5 rounded-full" />
              <div className="text-xs">hanghae99</div>
            </div>
            <div className="flex gap-1 items-center">
              <div className="bg-[#6e6d6d] w-5 h-5 rounded-full" />
              <div className="text-[10px] text-[#B8B8B8]">14명 참여</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
