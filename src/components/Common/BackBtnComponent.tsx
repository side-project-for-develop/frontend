import Image from "next/image";
import Back from "@/assets/backButton_red.svg";

const BackBtnComponent = ({ clickHandler }: { clickHandler: () => void }) => {
  return (
    <div
      className="absolute top-4 left-4 cursor-pointer"
      onClick={clickHandler}
    >
      <Image src={Back} alt="" />
    </div>
  );
};

export default BackBtnComponent;
