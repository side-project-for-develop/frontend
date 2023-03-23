"use client";

import { increment } from "@/Redux/Features/exampleSlice";
import { RootState } from "@/Redux/store";
import TestComponent from "@/components/TestComponent";
import { useDispatch, useSelector } from "react-redux";

const Page = () => {
  const count = useSelector((state: RootState) => state.example.value);
  const dispatch = useDispatch();

  return (
    // <div className="h-screen bg-blue flex justify-center items-center flex-col">

    //   <h1 className="example m-10">리액트 쿼리로 가져온 데이터 입니다</h1>
    //   <TestComponent />
    // </div>

    <h1 className="text-lg">hello</h1>
  );
};

export default Page;
