import React from "react";
import Image from "next/image";
import Back from "@/assets/backButton_red.svg";
import { RegisterFormType } from "./AuthTypes";

interface RegisterComponentProps {
  toggleHandler: () => void;
  registerForm: RegisterFormType;
  setRegisterForm: React.Dispatch<React.SetStateAction<RegisterFormType>>;
}

const RegisterComponent: React.FC<RegisterComponentProps> = ({
  toggleHandler,
  registerForm,
  setRegisterForm,
}) => {
  return (
    <>
      <div className="flex flex-col">
        {/* 뒤로가기 */}
        <div
          className="absolute top-4 left-4 cursor-pointer"
          onClick={toggleHandler}
        >
          <Image src={Back} alt="" />
        </div>
        {/*  inputs */}
        <div className="flex flex-col gap-[30px] mt-[98px] w-[calc(100%-64px)] ml-auto mr-auto">
          <input
            type="text"
            placeholder="이메일을 입력해주세요"
            className="h-[54px] rounded-lg border border-gray-300 text-sm pl-3 focus:outline-red-500"
            onChange={(e) =>
              setRegisterForm({ ...registerForm, id: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="패스워드를 입력해주세요"
            className="h-[54px] rounded-lg border border-gray-300 text-sm pl-3 focus:outline-red-500"
            onChange={(e) =>
              setRegisterForm({ ...registerForm, pw: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="패스워드를 다시한번 입력해주세요"
            className="h-[54px] rounded-lg border border-gray-300 text-sm pl-3 focus:outline-red-500"
            onChange={(e) =>
              setRegisterForm({ ...registerForm, pwTwo: e.target.value })
            }
          />
        </div>

        {/*  buttons */}
        <div className="flex gap-[16px] w-[calc(100%-64px)] mt-[34px] text-xl font-bold font-BMHANNA ml-auto mr-auto">
          <button className="bg-[#F52E2E] w-full h-[52px] rounded-lg text-white">
            회원가입
          </button>
        </div>
      </div>
    </>
  );
};

export default RegisterComponent;
