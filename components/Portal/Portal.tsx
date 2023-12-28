import { Dispatch, useState } from "react";
import { createPortal } from "react-dom";
import ModalContent from "../Modal/Modal";
import { Button } from "../Button/Button";
import TrashIcon from "../Icons/trash";
import Order from "../../shared/providers/types";
import { useDispatch } from "react-redux";
import { PayloadAction } from "@reduxjs/toolkit";

interface PoprtalProps {
  data: Order;
  actionHanler:PayloadAction<number>
}
export default function Portal(props: PoprtalProps) {
  const { data, actionHanler } = props;
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const removeDataHendler = () => {    
    dispatch(actionHanler);
  };
  return (
    <>
      <Button onClick={() => setShowModal(true)}>
        <TrashIcon
          className={"trashIcon"}
          fill={"#90a4ae"}
          width={20}
          height={20}
        />
      </Button>
      {showModal &&
        data &&
        createPortal(
          <ModalContent
            removeData={data}
            onClose={() => setShowModal(false)}
            onRemove={() => removeDataHendler()}
          />,
          document.body
        )}
    </>
  );
}
