import { UserAPIs } from "@/api/endpoints/UserAPIs";
import { UserSignUpDTO } from "@/data/DTO/UserDTO";
import { useMutation } from "@tanstack/react-query";

const __signup = async (payload: UserSignUpDTO) => {
  const save = await UserAPIs.postSignUp(payload);
  return save;
};

const usePostSignUp = () => {
  return useMutation(__signup, {
    onSuccess: (data) => {},
    onError: (error) => {},
  });
};

export default usePostSignUp;
