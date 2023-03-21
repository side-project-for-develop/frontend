import useGetDummy from "@/hooks/useGetDummy";
import React from "react";

const TestComponent: React.FC = () => {
  const dummy = useGetDummy();
  const listing = dummy.data?.products.map(
    (v: Record<string, string | number>, i: number) => {
      return (
        <div key={i}>
          <div className="flex gap-8">
            <div className="min-w-[300px]">{v.title}</div>
            <div className="min-w-[300px]">{v.category}</div>
            <div className="min-w-[300px]">${v.price}.00</div>
            <div className="min-w-[300px]">{v.rating}</div>
          </div>
        </div>
      );
    }
  );
  return <div>{listing}</div>;
};

export default TestComponent;
