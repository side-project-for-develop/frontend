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

  return <div className="relative flex flex-col"></div>;
};

export default AuthComponent;

// return (
//   <div className="relative flex flex-col min-h-screen vh-100 overflow-hidden fade-animation xsm:text-[10px]">
//     {/* 로고 */}
//     <Image
//       src={Logo}
//       alt="tok tok logo"
//       className="z-10 mt-24 ml-auto mr-auto xsm:mt-15"
//     />

//     {/* 로그인 - 회원가입  toggle */}
//     {toggle ? (
//       <RegisterComponent
//         toggleHandler={toggleBtnHandler}
//         registerForm={registerForm}
//         setRegisterForm={setRegisterForm}
//       />
//     ) : (
//       <LoginComponent
//         toggleHandler={toggleBtnHandler}
//         loginForm={loginForm}
//         setLoginForm={setLoginForm}
//       />
//     )}

//     {/* 애니메이션 */}
//     <style jsx>{`
//       .fade-animation {
//         animation-duration: 1s;
//         animation-timing-function: ease-in-out;
//         animation-name: fade-in;
//       }

//       @keyframes fade-in {
//         from {
//           opacity: 0;
//         }
//         to {
//           opacity: 1;
//         }
//       }
//     `}</style>
//   </div>
// );
