import { CommonAPIs } from "@/api/endpoints/CommonAPI";
import { ImageDTO } from "@/data/DTO/CommonDTO";
import { useMutation } from "@tanstack/react-query";

const __image = async (payload: ImageDTO) => {
  const save = await CommonAPIs.postImageUpload(payload);
  return save;
};

const usePostImageUpload = () => {
  return useMutation(__image, {
    onSuccess: (data) => {},
    onError: (error) => {},
  });
};

export default usePostImageUpload;
