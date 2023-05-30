import {
  DupCheckDTO,
  UserDeleteDTO,
  UserLoginDTO,
  UserSignUpDTO,
} from "@/data/DTO/UserDTO";
import api from "../index";

export const UserAPIs = {
  postLogin: (payload: UserLoginDTO) => api.post("/member/login", payload),
  postSignUp: (payload: UserSignUpDTO) => api.post("/member/signup", payload),
  postEmailDupCheck: (payload: DupCheckDTO) =>
    api.post("/member/checkemail", payload),
  postNickNameDupCheck: (payload: DupCheckDTO) =>
    api.post("/member/checknickname", payload),
  deleteUser: (payload: UserDeleteDTO) =>
    api.delete(`/profile/${payload.memberId}`),
};
