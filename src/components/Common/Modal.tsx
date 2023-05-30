import React from "react";
import Image from "next/image";
import { Button } from "../_Materials/Button";
import { useRouter } from "next/navigation";

interface IProps {
  title: string;
  sub?: string;
  sub2?: string;
  sub3?: string;
  sub4?: string;
  img?: string;
  btnTxt: string;
  btnNav?: string;
  btnSetter?: React.Dispatch<React.SetStateAction<boolean>>;
  modalSetter: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = (props: IProps) => {
  const router = useRouter();
  const onNavigationHandler = () => {
    props.modalSetter((v) => !v);
    if (props.btnNav) {
      router.push(props.btnNav);
    }
    if (props.btnSetter) {
      props.btnSetter((v) => !v);
    }
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-10 z-50">
      <div className="w-[300px] bg-white p-4 flex items-center flex-col font-BMHANNA gap-1 rounded-lg shadow-xl xxsm:w-[270px]">
        <p className="text-lg mb-4">{props.title}</p>
        <Image
          src={props.img ? props.img : ""}
          alt="tok tok logo"
          width={150}
          height={150}
        />
        <div className="flex items-center flex-col mt-4">
          <p>{props.sub}</p>
          <p>{props.sub2}</p>
        </div>
        <div className="flex items-center flex-col">
          <p>{props.sub3}</p>
          <p>{props.sub4}</p>
        </div>
        {props.btnTxt && (
          <Button type="red" onClick={onNavigationHandler}>
            {props.btnTxt}
          </Button>
        )}
      </div>
    </div>
  );
};

export default Modal;
