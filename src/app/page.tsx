"use client";

import TestComponent from "@/components/TestComponent";

const Page = () => {
  return (
    <div className="h-screen bg-blue flex justify-center items-center flex-col">
      <h1 className="example m-10">리액트 쿼리로 가져온 데이터 입니다</h1>
      <TestComponent />
    </div>
  );
};

export default Page;
