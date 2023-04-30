import Image from "next/image";
import Back_red from "@/assets/backButton_red.svg";
import Back_black from "@/assets/backButton_black.svg";
import { useRouter } from "next/navigation";

const BackBtnComponent = ({ red }: { red: boolean }) => {
  const router = useRouter();
  const onBackHandler = () => {
    router.back();
  };
  return (
    <div
      className="absolute top-4 left-4 cursor-pointer"
      onClick={onBackHandler}
    >
      <Image src={red ? Back_red : Back_black} alt="" />
    </div>
  );
};

export default BackBtnComponent;
