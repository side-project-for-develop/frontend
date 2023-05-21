import { __saveToken } from "@/Redux/Features/UserSlice";
import { useAppDispatch } from "@/Redux/store";
import { UserAPIs } from "@/api/endpoints/UserAPIs";
import { UserLoginDTO } from "@/data/DTO/UserDTO";
import { useMutation } from "@tanstack/react-query";

const __login = async (payload: UserLoginDTO) => {
  const save = await UserAPIs.postLogin(payload);
  return save;
};

const usePostLogin = () => {
  const dispatch = useAppDispatch();
  return useMutation(__login, {
    onSuccess: (data) => {
      dispatch(__saveToken({ token: data?.headers.authorization }));
    },
    onError: (error) => {},
  });
};

export default usePostLogin;
