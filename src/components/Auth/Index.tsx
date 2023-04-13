import React, { useState, useCallback } from "react";
import Image from "next/image";
import Logo from "@/assets/logo.svg";
import LoginComponent from "./LoginComponent";
import RegisterComponent from "./RegisterComponent";
import { LoginFormType, RegisterFormType } from "./AuthTypes";

const AuthComponent = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [loginForm, setLoginForm] = useState<LoginFormType>({
    id: "",
    pw: "",
  });
  const [registerForm, setRegisterForm] = useState<RegisterFormType>({
    id: "",
    nickName: "",
    pw: "",
    pwTwo: "",
    img: "",
  });
  // 토글 이벤트 핸들러
  const toggleBtnHandler = useCallback(() => {
    setToggle(!toggle);
    setLoginForm({ id: "", pw: "" });
    setRegisterForm({ id: "", pw: "", pwTwo: "", nickName: "", img: "" });
  }, [toggle, setToggle, setLoginForm, setRegisterForm]);

  return (
    <div className="h-screen relative flex flex-col justify-center">
      <div className="py-6 mx-auto xxsm:py-1">
        <Image src={Logo} alt="tok tok logo" />
      </div>
      {toggle ? (
        <RegisterComponent
          toggleHandler={toggleBtnHandler}
          registerForm={registerForm}
          setRegisterForm={setRegisterForm}
        />
      ) : (
        <LoginComponent
          toggleHandler={toggleBtnHandler}
          loginForm={loginForm}
          setLoginForm={setLoginForm}
        />
      )}
      <style jsx>{`
        .fade-animation {
          animation-duration: 1s;
          animation-timing-function: ease-in-out;
          animation-name: fade-in;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default AuthComponent;
