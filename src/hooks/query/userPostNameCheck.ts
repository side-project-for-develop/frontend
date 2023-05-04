import { UserAPIs } from "@/api/endpoints/UserAPIs";
import { DupCheckDTO } from "@/data/DTO/UserDTO";
import { useMutation } from "@tanstack/react-query";

const __check = async (payload: DupCheckDTO) => {
  const save = await UserAPIs.postNickNameDupCheck(payload);
  return save;
};

const usePostNameDupCheck = () => {
  return useMutation(__check, {
    onSuccess: (data) => {},
    onError: (error) => {},
  });
};

export default usePostNameDupCheck;
