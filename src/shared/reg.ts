// 이메일
export const emailCheck = (username: string) => {
  let _reg =
    /^([\w\.\-\+])*[a-zA-Z0-9]+([\w\.\-\+])*([a-zA-Z0-9])+([\w\.\-\+])+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$/;
  return _reg.test(username);
};

// 비밀번호 체크
export const passwordCheck = (passwordcheck: string) => {
  let regPass =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*()+|=])[A-Za-z\d~!@#$%^&*()+|=]{4,20}$/;
  return regPass.test(passwordcheck);
};

// 닉네임 체크
export const nickNameCheck = (passwordcheck: string) => {
  let regPass = /^(?=.*[a-zA-Z0-9가-힣])[a-zA-Z0-9가-힣]{2,10}$/;
  return regPass.test(passwordcheck);
};
