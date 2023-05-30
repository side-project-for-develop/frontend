import { UserAPIs } from "@/api/endpoints/UserAPIs";
import { UserDeleteDTO } from "@/data/DTO/UserDTO";
import { useMutation } from "@tanstack/react-query";

const __delete = async (payload: UserDeleteDTO) => {
  const del = await UserAPIs.deleteUser(payload);
  return del;
};

const useDeleteUser = () => {
  return useMutation(__delete, {
    onSuccess: (data) => {},
    onError: (error) => {},
  });
};

export default useDeleteUser;
