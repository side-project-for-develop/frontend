const Page = () => {
  return (
    <div className="relative flex flex-col items-center gap-12 min-h-screen overflow-hidden">
      {/* back button => component with actual link*/}

      <div className="font-semibold mt-8">게시글작성</div>

      <div className="w-[calc(100%-4rem)] p-10 flex flex-col gap-4 items-center bg-[#DF7272] rounded-lg">
        <div className="flex flex-col w-full">
          <span className="text-white">글작성</span>
          <input type="text" placeholder="something" />
        </div>
        <div className="flex flex-col w-full">
          <span className="text-white">카테고리</span>
          <select name="" id="">
            <option>dd</option>
            <option>dd</option>
            <option>dd</option>
          </select>
        </div>
      </div>

      <div className="w-[calc(100%-4rem)] p-10 flex flex-col gap-4 bg-[#DF7272] rounded-lg">
        <span className="text-white">선택지 작성</span>
        <div className="flex flex-col w-full">
          <span className="text-white">선택지 1</span>
          <input type="text" placeholder="something" />
          <input type="file" />
        </div>
        <div className="flex flex-col w-full">
          <span className="text-white">선택지 2</span>
          <input type="text" placeholder="something" />
          <input type="file" />
        </div>
      </div>

      <button className="w-[calc(100%-4rem)] h-14 flex items-center justify-center bg-white border border-[#DF7272] rounded-md mb-[70px] text-[#DF7272] font-semibold">
        게시하기
      </button>
    </div>
  );
};

export default Page;
