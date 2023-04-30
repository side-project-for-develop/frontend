"use client";

import BackBtnComponent from "@/components/Common/BackBtnComponent";
import DotMenuComponent from "@/components/Common/DotMenuComponent";

const Page = () => {
  return (
    <div className="relative flex flex-col items-center gap-6 min-h-screen overflow-hidden sm:gap-4">
      <BackBtnComponent red={false} />
      {/* Profile */}
      <div className="flex flex-col items-center gap-3 mt-7">
        <div className="w-10 h-10 bg-[#D9D9D9] rounded-full" />
        <p className="text-sm font-bold">톡톡톡</p>
      </div>
      <DotMenuComponent />
    </div>
  );
};

export default Page;
