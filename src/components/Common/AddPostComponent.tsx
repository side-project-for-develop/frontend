import { useRouter } from "next/navigation";
import React, { useCallback } from "react";

const AddPostComponent = () => {
  const router = useRouter();
  const handleNavigation = useCallback(() => {
    router.push("/posts/new");
  }, [router]);

  return (
    <div
      className="w-16 h-16 absolute bottom-20 right-4 flex justify-center items-center bg-[#FF6868] rounded-full cursor-pointer"
      onClick={handleNavigation}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1 bg-white" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1/2 bg-white" />
    </div>
  );
};

export default React.memo(AddPostComponent);