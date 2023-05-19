"use client";
import Image from "next/image";
import Logo_H_W from "@/assets/logo_horizontal_white.svg";
import Arrow_Right from "@/assets/arrow_right.svg";
import useDeleteUser from "@/hooks/query/userDelete";

const Page = () => {
  const deleteUserAPI = useDeleteUser();

  const deleteUserHandler = () => {
    deleteUserAPI.mutate({ memberId: "kjunho.dev@gmail.com" });
  };

  return (
    <div className="relative overflow-x-hidden h-full bg-[#F7F7F7]">
      {/* Header */}
      <div className="flex flex-col items-center h-60 bg-[#DF7272]">
        <Image
          src={Logo_H_W}
          alt="tok tok logo"
          className="mt-2 cursor-pointer"
        />
        {/* Profile */}
        <div className="flex items-center gap-5 mt-20">
          <div className="w-24 h-24 bg-[#D9D9D9] rounded-full" />
          <p className="text-white text-3xl font-bold">톡톡톡</p>
        </div>
      </div>
      {/* Contents */}
      <div className="flex flex-col items-center font-bold">
        {/* Functions */}
        <div className="w-[calc(100%-2rem)] flex flex-col items-center justify-center gap-4 h-32 bg-white mt-16 rounded-2xl text-[0.8rem]">
          <div className="flex w-full items-center justify-between px-9 cursor-pointer">
            <div>회원정보 수정</div>
            <Image
              src={Arrow_Right}
              alt="tok tok logo"
              className="cursor-pointer"
            />
          </div>
          <div className="w-[calc(100%-70px)] h-1 border-t-2 " />
          <div
            className="flex w-full items-center justify-between px-9 cursor-pointer"
            onClick={deleteUserHandler}
          >
            <div>회원탈퇴</div>
            <Image
              src={Arrow_Right}
              alt="tok tok logo"
              className="cursor-pointer"
            />
          </div>
        </div>
        {/* Button */}
        <div className="w-[calc(100%-2rem)] flex flex-col items-center justify-center h-16 bg-[#DF7272] mt-[20%] rounded-2xl text-white text-xl cursor-pointer">
          로그아웃
        </div>
      </div>
    </div>
  );
};

export default Page;
