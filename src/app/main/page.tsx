"use client";
import Image from "next/image";
import Logo_H from "@/assets/logo_horizontal.svg";
import BottomNav from "@/components/BottomNav";
import PostInfoCard from "@/components/Common/PostInfoCard";
import ImageCarousel from "@/components/Main/ImageCarousel";
import TodaysHotItemCarousel from "@/components/Main/TodaysHotItemCarousel";
import { useAppSelector } from "@/Redux/store";
import { useSelector } from "react-redux";

const MainPage = () => {
  const { token, email } = useAppSelector((state) => state.user);
  return (
    <main className="overflow-x-hidden h-full">
      {/* TODO: 컴포넌트 분리 */}
      <header className="w-full h-[48px] flex justify-items-center justify-center">
        <Image src={Logo_H} alt="tok tok logo" />
      </header>

      {/* 이미지 캐러셀 영역 */}
      <ImageCarousel />
      {/* 오늘의 키워드 */}
      <div className="mt-6 overflow-x-scroll">
        <h3 className="font-BMHANNA ml-4">오늘의 키워드</h3>
        <div className="mt-6 px-2 flex flex-row gap-x-4 ">
          {/*TODO: element로 분리 */}
          <span className="bg-[#71E3BA] text-white px-3 py-[3px] rounded-2xl font-semibold flex-shrink-0">
            #연애
          </span>
          <span className="bg-[#71A5E3] text-white px-3 py-[3px] rounded-2xl font-semibold flex-shrink-0">
            #건강
          </span>
          <span className="bg-[#E171E3] text-white px-3 py-[3px] rounded-2xl font-semibold flex-shrink-0">
            #자취
          </span>
          <span className="bg-[#71A5E3] text-white px-3 py-[3px] rounded-2xl font-semibold flex-shrink-0">
            #반려동물
          </span>
          <span className="bg-[#E3AF71] text-white px-3 py-[3px] rounded-2xl font-semibold flex-shrink-0">
            #예시
          </span>
        </div>
        <div className="mt-2 px-6 flex flex-row gap-x-4 ">
          {/*TODO: element로 분리 */}
          <span className="bg-[#71E3BA] text-white px-3 py-[3px] rounded-2xl font-semibold flex-shrink-0">
            #연애
          </span>
          <span className="bg-[#71A5E3] text-white px-3 py-[3px] rounded-2xl font-semibold flex-shrink-0">
            #건강
          </span>
          <span className="bg-[#E171E3] text-white px-3 py-[3px] rounded-2xl font-semibold flex-shrink-0">
            #자취
          </span>
          <span className="bg-[#71A5E3] text-white px-3 py-[3px] rounded-2xl font-semibold flex-shrink-0">
            #반려동물
          </span>
          <span className="bg-[#E3AF71] text-white px-3 py-[3px] rounded-2xl font-semibold flex-shrink-0">
            #예시
          </span>
        </div>
      </div>

      {/* 오늘의 인기있는 토픽 */}

      <TodaysHotItemCarousel />

      <BottomNav />
    </main>
  );
};

export default MainPage;
