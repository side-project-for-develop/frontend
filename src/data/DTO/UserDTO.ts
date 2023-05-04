export interface UserLoginDTO {
  email: string;
  password: string;
}

export interface UserSignUpDTO extends UserLoginDTO {
  nickname: string;
  profileImage: string;
}

export interface DupCheckDTO {
  nickName?: string;
  email?: string;
}
