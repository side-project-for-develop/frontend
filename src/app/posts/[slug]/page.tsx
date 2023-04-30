"use client";

import BackBtnComponent from "@/components/Common/BackBtnComponent";

const Page = () => {
  return (
    <div className="relative flex flex-col items-center gap-6 min-h-screen overflow-hidden sm:gap-4">
      <BackBtnComponent red={false} />
    </div>
  );
};

export default Page;
