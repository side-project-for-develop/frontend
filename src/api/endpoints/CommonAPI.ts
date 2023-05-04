import { ImageDTO } from "@/data/DTO/CommonDTO";
import api from "../index";

export const CommonAPIs = {
  postImageUpload: (payload: ImageDTO) =>
    api.post("/upload", payload.imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
};
