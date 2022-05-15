import { useState } from "react";

import { useContextProduct } from '../../ProductContext';

interface ClassProps {
  visibility: string;
}
export function Modal({visibility}:ClassProps) {

  const {modalVisible, setModalVisible} = useContextProduct();

  return (
    <div className={visibility}>
      <span onClick={() => setModalVisible(false)}>close</span>
    </div>
  )
}