import React, { useCallback, useEffect, useState } from "react";
import { LoginFormType } from "./AuthTypes";
import { Button } from "../_Materials/Button";

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
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
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

  useEffect(() => {
    if (loginForm.id !== "" && loginForm.pw !== "") {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [loginForm]);

  return (
    <>
      <div className="flex flex-col xsm:text-[10px]">
        {/*  inputs */}
        <div className="flex flex-col gap-7 mt-24 w-[calc(100%-4rem)] ml-auto mr-auto">
          <input
            type="text"
            placeholder="이메일을 입력해주세요"
            className="h-14 rounded-lg border border-gray-300 text-sm pl-3 focus:outline-red-500"
            onChange={onChangeId}
          />
          <input
            type="password"
            placeholder="패스워드를 입력해주세요"
            className="h-14  rounded-lg border border-gray-300 text-sm pl-3 focus:outline-red-500"
            onChange={onChangePw}
          />
        </div>

        {/*  buttons */}
        <div className="flex gap-4 w-[calc(100%-4rem)] mt-8 text-xl font-bold font-BMHANNA ml-auto mr-auto">
          <Button type="red" disabled={isButtonDisabled}>
            로그인
          </Button>
          <Button type="yellow">카카오 로그인</Button>
        </div>

        {/*  direction */}
        <div
          className="mt-12 ml-8 text-sm cursor-pointer"
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
