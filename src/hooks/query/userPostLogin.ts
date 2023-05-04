import { UserAPIs } from "@/api/endpoints/UserAPIs";
import { UserLoginDTO } from "@/data/DTO/UserDTO";
import { useMutation } from "@tanstack/react-query";

const __login = async (payload: UserLoginDTO) => {
  const save = await UserAPIs.postLogin(payload);
  return save;
};

const usePostLogin = () => {
  return useMutation(__login, {
    onSuccess: (data) => {},
    onError: (error) => {},
  });
};

export default usePostLogin;
