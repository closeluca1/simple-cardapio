import { useState } from "react";
import { Button } from "../Button";

import { useContextProduct } from '../../ProductContext';

interface ClassProps {
  visibility: string;
}

export function Modal({visibility}:ClassProps) {

  const {setModalVisible, prod} = useContextProduct();

  return (
    <div className={`w-[90%] max-w-sm h-[300px] rounded-xl fixed animate-appearModal mt-[20vh] bg-pink-400 shadow-[0_0_0_100vmax_rgba(0,0,0,0.726)] index-[999] ${visibility}`}>
      <span onClick={() => setModalVisible(false)}>close</span>

      <h3>quer adicionar este item no carrinho?</h3>

      <div className='w-full row flex flex-row justify-between my-4'>

      <Button
        textBtn='sim'
        background='bg-blue-500'
      />

      <Button
        textBtn='Não'
        background='bg-red-500'
      />

      </div>
      
    </div>
  )
}