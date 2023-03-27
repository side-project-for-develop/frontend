import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Back from "@/assets/backButton_red.svg";
import { RegisterFormType } from "./AuthTypes";

interface RegisterComponentProps {
  toggleHandler: () => void;
  registerForm: RegisterFormType;
  setRegisterForm: React.Dispatch<React.SetStateAction<RegisterFormType>>;
}

const RegisterComponent = ({
  toggleHandler,
  registerForm,
  setRegisterForm,
}: RegisterComponentProps) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
  const onChangeId = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setRegisterForm({ ...registerForm, id: e.target.value });
    },
    [registerForm, setRegisterForm]
  );

  const onChangePw = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setRegisterForm({ ...registerForm, pw: e.target.value });
    },
    [registerForm, setRegisterForm]
  );

  const onChangePwTwo = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setRegisterForm({ ...registerForm, pwTwo: e.target.value });
    },
    [registerForm, setRegisterForm]
  );

  useEffect(() => {
    if (
      registerForm.id !== "" &&
      registerForm.pw !== "" &&
      registerForm.pwTwo !== ""
    ) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [registerForm]);

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
            onChange={onChangeId}
          />
          <input
            type="password"
            placeholder="패스워드를 입력해주세요"
            className="h-[54px] rounded-lg border border-gray-300 text-sm pl-3 focus:outline-red-500"
            onChange={onChangePw}
          />
          <input
            type="password"
            placeholder="패스워드를 다시한번 입력해주세요"
            className="h-[54px] rounded-lg border border-gray-300 text-sm pl-3 focus:outline-red-500"
            onChange={onChangePwTwo}
          />
        </div>

        {/*  buttons */}
        <div className="flex gap-[16px] w-[calc(100%-64px)] mt-[34px] text-xl font-bold font-BMHANNA ml-auto mr-auto">
          <button
            className="bg-[#F52E2E] w-full h-[52px] rounded-lg text-white"
            disabled={isButtonDisabled}
          >
            회원가입
          </button>
        </div>
      </div>
    </>
  );
};

export default React.memo(RegisterComponent);
