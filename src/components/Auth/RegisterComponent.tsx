import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Back from "@/assets/backButton_red.svg";
import { RegisterFormType } from "./AuthTypes";
import { emailCheck, nickNameCheck, passwordCheck } from "@/shared/reg";
import { Button, FoldButton } from "../_Materials/Button";
import { Input } from "../_Materials/Input";

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
  const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(true);
  const [isNameDisabled, setIsNameDisabled] = useState<boolean>(true);
  const [isEmailDisabled, setIsEmailDisabled] = useState<boolean>(true);
  const [previewImage, setPreviewImage] = useState<string>(
    "https://cdn-icons-png.flaticon.com/512/338/338864.png"
  );

  const onChangeName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setRegisterForm({ ...registerForm, nickName: e.target.value });
    },
    [registerForm, setRegisterForm]
  );
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
  const onChangeImg = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files !== null) {
        const newFile = e.target.files?.[0];
        const formData = new FormData();
        formData.append("file", newFile);
        // get url from the server and give the img
        if (newFile) {
          setRegisterForm({
            ...registerForm,
            img: "dd",
          });
          setPreviewImage(URL.createObjectURL(e.target.files[0]));
        }
      }
    },
    [registerForm, setRegisterForm]
  );

  useEffect(() => {
    if (
      registerForm.id !== "" &&
      registerForm.pw !== "" &&
      registerForm.pwTwo !== "" &&
      registerForm.nickName !== "" &&
      registerForm.img !== "" &&
      emailCheck(registerForm.id) &&
      passwordCheck(registerForm.pw) &&
      passwordCheck(registerForm.pwTwo) &&
      nickNameCheck(registerForm.nickName) &&
      registerForm.pw === registerForm.pwTwo
    ) {
      setIsSubmitDisabled(false);
    } else {
      setIsSubmitDisabled(true);
    }
    if (registerForm.id !== "") {
      setIsEmailDisabled(false);
    } else {
      setIsEmailDisabled(true);
    }
    if (registerForm.nickName !== "") {
      setIsNameDisabled(false);
    } else {
      setIsNameDisabled(true);
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
        <div className="flex flex-col gap-7 mt-4 w-[calc(100%-4rem)] ml-auto mr-auto xsm:gap-4 xsm:mt-2">
          <div className="w-full flex flex-col">
            {/* 이미지 */}
            <div className="flex flex-col items-center">
              <label htmlFor="imgInput">
                {previewImage ? (
                  <Image
                    src={previewImage}
                    alt="Preview Image"
                    width={100}
                    height={100}
                    className="rounded-full w-52 h-52 border border-gray-300 mb-4 cursor-pointer sm:w-24 sm:h-24"
                  />
                ) : (
                  <div className="w-52 h-52 rounded-full border border-gray-300 mb-4 cursor-pointer sm:w-auto sm:h-auto"></div>
                )}
              </label>
              <input
                type="file"
                id="imgInput"
                className="sr-only"
                accept=".jpg, .jpeg, .png, .gif, .bmp"
                onChange={onChangeImg}
              />
            </div>
            {/* 닉네임 */}
            <div className="w-full flex flex-col">
              <div className="flex justify-between xsm:h-10 h-14">
                <Input
                  placeholder="닉네임을 입력해주세요"
                  type="text"
                  style="sub"
                  width="w-[70%]"
                  onChange={onChangeName}
                />
                <FoldButton
                  type="red"
                  width="w-[25%]"
                  disabled={isNameDisabled}
                >
                  중복확인
                </FoldButton>
              </div>
              {!nickNameCheck(registerForm.nickName) &&
                registerForm.nickName !== "" && (
                  <p className="text-xs text-red-500">
                    2~10글자의 영문 대/소문자, 한글, 숫자만 허용합니다.
                  </p>
                )}
            </div>
          </div>
          {/* 이메일 */}
          <div className="w-full flex flex-col">
            <div className="flex justify-between  xsm:h-10 h-14">
              <Input
                placeholder="이메일을 입력해주세요"
                type="text"
                style="sub"
                width="w-[70%]"
                onChange={onChangeId}
              />
              <FoldButton type="red" width="w-[25%]" disabled={isNameDisabled}>
                중복확인
              </FoldButton>
            </div>
            {!emailCheck(registerForm.id) && registerForm.id !== "" && (
              <p className="text-xs text-red-500">이메일 형식만 허용합니다.</p>
            )}
          </div>
          {/* 비밀번호 1 */}
          <div className="flex flex-col">
            <Input
              placeholder="패스워드를 입력해주세요"
              type="password"
              style="sub"
              height="xsm:h-10 h-14"
              onChange={onChangePw}
            />
            {!passwordCheck(registerForm.pw) && registerForm.pw !== "" && (
              <p className="text-xs text-red-500">
                4~20글자의 영문, 숫자, 특수문자를 모두 포함해야합니다.
              </p>
            )}
          </div>
          {/* 비밀번호 2 */}
          <div className="w-full flex flex-col">
            <Input
              placeholder="패스워드를 다시한번 입력해주세요"
              type="password"
              style="sub"
              height="xsm:h-10 h-14"
              onChange={onChangePwTwo}
            />
            {!passwordCheck(registerForm.pwTwo) &&
              registerForm.pwTwo !== "" && (
                <p className="text-xs text-red-500">
                  4~20글자의 영문, 숫자, 특수문자를 모두 포함해야합니다.
                </p>
              )}
            {registerForm.pw !== registerForm.pwTwo && (
              <p className="text-xs text-red-500">두 비밀번호가 다릅니다.</p>
            )}
          </div>
        </div>
        {/*  buttons */}
        <div className="flex gap-4 w-[calc(100%-64px)] mt-8 text-xl font-bold font-BMHANNA ml-auto mr-auto xsm:mt-4">
          <Button type="red" disabled={isSubmitDisabled}>
            회원가입
          </Button>
        </div>
      </div>
    </>
  );
};

export default React.memo(RegisterComponent);
