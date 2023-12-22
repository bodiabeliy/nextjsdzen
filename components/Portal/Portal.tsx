import { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from "../Modal/Modal";
import { Button } from '../Button/Button';
import TrashIcon from "../Icons/trash";

interface PoprtalProps {
    order:any
}
export default function Portal(props:PoprtalProps) {
    const {order} = props

  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Button onClick={() => setShowModal(true)}>
      <TrashIcon className={""} fill={"#90a4ae"} width={20} height={20} />
      </Button>
      {(showModal && order) && createPortal(
        <ModalContent removeData={order} onClose={() => setShowModal(false)} />,
        document.body
      )}
    </>
  );
}
