import Image from "next/image";
import dot_menu from "@/assets/dot_menu.svg";

const DotMenuComponent = () => {
  return (
    <div className="absolute top-4 right-4 cursor-pointer">
      <Image src={dot_menu} alt="" />
    </div>
  );
};

export default DotMenuComponent;
