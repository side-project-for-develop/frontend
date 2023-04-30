import Logo_H from "@/assets/logo_horizontal.svg";
import Image from "next/image";

const CategoryHeader = () => {
  return (
    <div>
      <header className="w-full h-[48px] flex justify-items-center justify-center">
        <Image src={Logo_H} alt="tok tok logo" />
      </header>

      <div className="w-full flex justify-between px-10">
        <span>전체</span>
        <span>전체</span>
        <span>전체</span>
        <span>전체</span>
        <span>전체</span>
      </div>
    </div>
  );
};

export default CategoryHeader;
