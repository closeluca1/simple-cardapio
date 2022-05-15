import React, { useEffect, useState } from 'react';
import { Product } from '../Product';
import { products } from '../Products';
import { Modal } from '../Modal';

import { useContextProduct } from '../../ProductContext';


export function Main() {

  const {addItem, modalVisible, setModalVisible} = useContextProduct();
  
  // const [modalVisible, setModalVisible] = useState(false);

  return (
    <main className='w-full min-h-[90vh] flex flex-col items-center'>

      <Product
        title={products[0].title}
        description='Batata 300g'
        price={15}
        cents={50}
        // handleProduct={() => addItem({id: products[0].id , title: 'Porção de batata', description: 'Batata 300g' })}
        data-modal-toggle="small-modal"
        openModal={() => setModalVisible(true)}
      />

      <Product
        title={products[1].title}
        description='Calabresa fatiada'
        price={25}
        cents={50}
        // handleProduct={() => addItem({id: products[1].id , title: products[1].title, description: 'Calabresa fatiada' })}
        openModal={() => setModalVisible(true)}
      />

      <Modal visibility={!modalVisible ? 'hidden' : 'w-[90%] max-w-sm h-[300px] rounded-xl fixed animate-appearModal mt-[20vh] bg-pink-400 shadow-[0_0_0_100vmax_rgba(0,0,0,0.726)] index-[999]'}/>

    </main>
  )
}
