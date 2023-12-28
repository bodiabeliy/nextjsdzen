import Order, { Product } from "../../shared/providers/types";
import { Button } from "../Button/Button";
import TrashIcon from "../Icons/trash";


interface ModalProps {
  onClose:()=> void,
  onRemove:() => void,
  removeData:Order
}

export default function ModalContent({ onClose, onRemove, removeData }: ModalProps) {
  return (
    <div className="flex items-center absolute top-0 bottom-0 right-0 left-0 bg-modalOverlay justify-center">
      <div className="flex flex-col bg-white justify-between w-[700px] h-[300px] ">
        <div className="flex w-full p-4">
          <h2 className="font-bold text-lg">Are you sure delete is order?
          <span className=" text-[#8bc34a]">
            {" " +removeData.title}
          </span>
            </h2>
        </div>
        <div className="p-4">
            <p>{`Order description: ${removeData.description}; Date creation: ${removeData.date};  Count of products: ${removeData.products.length}`}</p>
        </div>
        <div className="flex justify-end w-full bg-[#8bc34a] h-[100px] p-4 font-bold items-center">
        <Button className="flex text-white bg-transparent h-[50px] w-[150px] items-center justify-center rounded-full mr-1" onClick={onClose}>
            Cencel
        </Button>
        <Button className="flex text-[#dc5439] bg-white h-[50px] w-[150px] items-center justify-center rounded-full" onClick={onRemove}>
            <TrashIcon className={""} fill={"#dc5439"} width={20} height={20} />
            Remove
        </Button>
        </div>
      </div>
    </div>
  );
}
