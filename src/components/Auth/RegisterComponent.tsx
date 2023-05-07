import React, { use, useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Back from "@/assets/backButton_red.svg";
import { RegisterFormType } from "./AuthTypes";
import { emailCheck, nickNameCheck, passwordCheck } from "@/shared/reg";
import { Button, FoldButton } from "../_Materials/Button";
import { Input } from "../_Materials/Input";
import Str from "@/data/string.json";
import { useInput } from "@/hooks/useInput";
import usePostNameDupCheck from "@/hooks/query/userPostNameCheck";
import { ENUM } from "@/data/Enum";
import usePostEmailDupCheck from "@/hooks/query/userPostEmailCheck copy";
import usePostImageUpload from "@/hooks/query/commonPostImageUpload";
import usePostSignUp from "@/hooks/query/userPostSignUp";
import { useRouter } from "next/navigation";

interface RegisterComponentProps {
  toggleHandler: () => void;
  regiForm: RegisterFormType;
  setRegisterForm: React.Dispatch<React.SetStateAction<RegisterFormType>>;
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const RegisterComponent = ({
  toggleHandler,
  regiForm,
  setRegisterForm,
  toggle,
  setToggle,
}: RegisterComponentProps) => {
  const [id, onChangeId, isIdDisabled] = useInput(regiForm.id, emailCheck);
  const [pw, onChangePw, isPwDisabled] = useInput(regiForm.pw, passwordCheck);
  const [pwTwo, onChangePwTwo, isPwTwoDisabled] = useInput("", passwordCheck);
  const [nickName, onChangeNickname, isNicknameDisabled] = useInput(
    regiForm.nickName,
    nickNameCheck
  );
  const [dupNameCheck, setDupNameCheck] = useState(false);
  const [dupEmailCheck, setDupEmailCheck] = useState(false);
  const [previewImage, setPreviewImage] = useState<string>(
    "https://cdn-icons-png.flaticon.com/512/338/338864.png"
  );
  const router = useRouter();
  const nameDupCheckAPI = usePostNameDupCheck();
  const emailDupCheckAPI = usePostEmailDupCheck();
  const imageAPI = usePostImageUpload();
  const signupAPI = usePostSignUp();

  const onNameDupCheckHandler = () => {
    nameDupCheckAPI.mutate({ nickname: nickName });
  };
  const onEmailDupCheckHandler = () => {
    emailDupCheckAPI.mutate({ email: id });
  };
  const onSignUpHandler = () => {
    signupAPI.mutate({
      email: id,
      password: pw,
      nickname: nickName,
      profileImage: regiForm.img,
    });
  };

  const isSubmitDisabled =
    isIdDisabled ||
    isPwDisabled ||
    isNicknameDisabled ||
    isPwTwoDisabled ||
    regiForm.img === "" ||
    pw !== pwTwo ||
    !dupNameCheck ||
    !dupEmailCheck;

  const onChangeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      const newFile = e.target.files?.[0];
      const formData = new FormData();
      formData.append("imageFile", newFile);
      imageAPI.mutate({ imageFile: formData });
      if (newFile) {
        setRegisterForm({
          ...regiForm,
          img: imageAPI.data?.data.data,
        });
        setPreviewImage(URL.createObjectURL(e.target.files[0]));
      }
    }
  };
  useEffect(() => {
    if (nameDupCheckAPI.data?.data.statusCode === ENUM.STATUS_200)
      setDupNameCheck(true);
    else setDupNameCheck(false);
  }, [nameDupCheckAPI]);

  useEffect(() => {
    if (emailDupCheckAPI.data?.data.statusCode === ENUM.STATUS_200)
      setDupEmailCheck(true);
    else setDupEmailCheck(false);
  }, [emailDupCheckAPI]);

  useEffect(() => {
    if (signupAPI.isSuccess) {
      alert("회원가입 성공");
      setToggle(!toggle);
    }
  }, [signupAPI.isSuccess, toggle, setToggle]);
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
                  placeholder={Str.auth[0].content}
                  type="text"
                  style="sub"
                  width="w-[70%]"
                  onChange={onChangeNickname}
                />
                <FoldButton
                  type="red"
                  width="w-[25%]"
                  disabled={isNicknameDisabled}
                  onClick={onNameDupCheckHandler}
                >
                  중복확인
                </FoldButton>
              </div>
              {!nickNameCheck(nickName) && nickName !== "" && (
                <p className="text-xs text-red-500">
                  2~10글자의 영문 대/소문자, 한글, 숫자만 허용합니다.
                </p>
              )}
              {nameDupCheckAPI.data?.data.statusCode === ENUM.STATUS_400 && (
                <p className="text-xs text-red-500">중복 된 닉네임입니다.</p>
              )}
              {nameDupCheckAPI.data?.data.statusCode === ENUM.STATUS_200 && (
                <p className="text-xs text-sky-700">사용가능한 닉네임입니다.</p>
              )}
            </div>
          </div>
          {/* 이메일 */}
          <div className="w-full flex flex-col">
            <div className="flex justify-between  xsm:h-10 h-14">
              <Input
                placeholder={Str.auth[1].content}
                type="text"
                style="sub"
                width="w-[70%]"
                onChange={onChangeId}
              />
              <FoldButton
                type="red"
                width="w-[25%]"
                disabled={isIdDisabled}
                onClick={onEmailDupCheckHandler}
              >
                중복확인
              </FoldButton>
            </div>
            {!emailCheck(id) && id !== "" && (
              <p className="text-xs text-red-500">이메일 형식만 허용합니다.</p>
            )}
            {emailDupCheckAPI.data?.data.statusCode === ENUM.STATUS_400 && (
              <p className="text-xs text-red-500">중복 된 이메일입니다.</p>
            )}
            {emailDupCheckAPI.data?.data.statusCode === ENUM.STATUS_200 && (
              <p className="text-xs text-sky-700">사용가능한 이메일입니다.</p>
            )}
          </div>
          {/* 비밀번호 1 */}
          <div className="flex flex-col">
            <Input
              placeholder={Str.auth[2].content}
              type="password"
              style="sub"
              height="xsm:h-10 h-14"
              onChange={onChangePw}
            />
            {!passwordCheck(pw) && pw !== "" && (
              <p className="text-xs text-red-500">
                4~20글자의 영문, 숫자, 특수문자를 모두 포함해야합니다.
              </p>
            )}
          </div>
          {/* 비밀번호 2 */}
          <div className="w-full flex flex-col">
            <Input
              placeholder={Str.auth[3].content}
              type="password"
              style="sub"
              height="xsm:h-10 h-14"
              onChange={onChangePwTwo}
            />
            {pw !== pwTwo && (
              <p className="text-xs text-red-500">두 비밀번호가 다릅니다.</p>
            )}
          </div>
        </div>
        {/*  buttons */}
        <div className="flex gap-4 w-[calc(100%-64px)] mt-8 text-xl font-bold font-BMHANNA ml-auto mr-auto xsm:mt-4">
          <Button
            type="red"
            disabled={isSubmitDisabled}
            onClick={onSignUpHandler}
          >
            회원가입
          </Button>
        </div>
      </div>
    </>
  );
};

export default React.memo(RegisterComponent);
