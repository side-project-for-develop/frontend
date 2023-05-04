export interface UserLoginDTO {
  email: string;
  password: string;
}

export interface UserSignUpDTO extends UserLoginDTO {
  nickName: string;
  profileImage: string;
}

export interface DupCheckDTO {
  nickName?: string;
  email?: string;
}
