import React, { useEffect, useState } from 'react';
import { Product } from '../Product';
import { products } from '../Products';
import { Modal } from '../Modal';

import { useContextProduct } from '../../ProductContext';

export function Main() {

  const {addItem, modalVisible, setModalVisible, handleProduct} = useContextProduct();
  
  // const [modalVisible, setModalVisible] = useState(false);

  // function handleProduct (e: any) {    
  //   console.log('ok')
  //   console.log(e.target.value)
  // }


  return (
    <main className='w-full min-h-[90vh] flex flex-col items-center'>

      <Product
        value={products[0].id}
        title={products[0].title}
        description={products[0].description}
        price={15}
        cents={50}
        // handleProduct={() => addItem({id: products[0].id , title: 'Porção de batata', description: products[0].description })}
        data-modal-toggle="small-modal"
        openModal={handleProduct}
      />

      <Product
        value={products[1].id}
        title={products[1].title}
        description={products[1].description}
        price={25}
        cents={50}
        // handleProduct={() => handleProduct}
        openModal={handleProduct}
      />      

      {/* <button onClick={handleProduct} value='ola'>ola mundo</button> */}

      <Modal visibility={!modalVisible ? 'hidden' : 'visible'}/>

    </main>
  )
}



// type ProductsProps = {
//   id: number;
//   title: string,
//   description: string,
// }
// {
//         prod.map(({title, description, id}:ProductsProps) => (
//           <p key={id}>{title}, {description}</p>
//         ))
//       }