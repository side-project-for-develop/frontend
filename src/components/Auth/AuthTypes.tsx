export interface LoginFormType {
  id: string;
  pw: string;
}

export interface RegisterFormType extends LoginFormType {
  pwTwo: string;
  nickName: string;
  img: string;
}
