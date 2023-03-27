"use client";

import React, { useCallback } from "react";
import { LoginFormType } from "./AuthTypes";

interface LoginComponentProps {
  toggleHandler: () => void;
  loginForm: LoginFormType;
  setLoginForm: React.Dispatch<React.SetStateAction<LoginFormType>>;
}

const LoginComponent = ({
  toggleHandler,
  loginForm,
  setLoginForm,
}: LoginComponentProps) => {
  const onChangeId = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setLoginForm({ ...loginForm, id: e.target.value });
    },
    [loginForm, setLoginForm]
  );

  const onChangePw = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setLoginForm({ ...loginForm, pw: e.target.value });
    },
    [loginForm, setLoginForm]
  );

  return (
    <>
      <div className="flex flex-col">
        {/*  inputs */}
        <div className="flex flex-col gap-[30px] mt-[98px] w-[calc(100%-64px)] ml-auto mr-auto">
          <input
            type="text"
            placeholder="이메일을 입력해주세요"
            className="h-[54px] rounded-lg border border-gray-300 text-sm pl-3 focus:outline-red-500"
            onChange={onChangeId}
          />
          <input
            type="password"
            placeholder="패스워드를 입력해주세요"
            className="h-[54px] rounded-lg border border-gray-300 text-sm pl-3 focus:outline-red-500"
            onChange={onChangePw}
          />
        </div>

        {/*  buttons */}
        <div className="flex gap-[16px] w-[calc(100%-64px)] mt-[34px] text-xl font-bold font-BMHANNA ml-auto mr-auto">
          <button className="bg-[#F52E2E] w-full h-[52px] rounded-lg text-white">
            로그인
          </button>
          <button className="bg-[#EDF117] w-full h-[52px] rounded-lg">
            카카오 로그인
          </button>
        </div>

        {/*  direction */}
        <div
          className="mt-[48px] ml-[32px] text-sm cursor-pointer"
          onClick={toggleHandler}
        >
          아직 회원이 아니십니까?
          <span className="text-[#F52E2E] font-extrabold"> 회원가입</span>
        </div>
      </div>
    </>
  );
};

export default React.memo(LoginComponent);
