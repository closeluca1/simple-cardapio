import React, { useState, useEffect } from 'react';
import { Product } from '../Product';
import { products } from '../Products';

type ProductsProps = {
  id: number;
  title: string,
  description: string,
}

export function Main() {

  let cartItems: any = [];
  
  const [prod, setProd] = useState<null | any>([])


  const addItem = ({ title, description }: ProductsProps) => {
    let cart = [...prod];
    cart.push({
      id: prod.length + 1,
      title,
      description
    });
    setProd(cart);   
    cartItems = cart;
    console.log(cart)
  };

  return (
    <main className='w-full min-h-[90vh] flex flex-col items-center'>

      <Product
        title={products[0].title}
        description='Batata 300g'
        price={15}
        cents={50}
        handleProduct={() => addItem({id: products[0].id , title: 'Porção de batata', description: 'Batata 300g' })}
      />

      <Product
        title={products[1].title}
        description='Calabresa fatiada'
        price={25}
        cents={50}
        handleProduct={() => addItem({id: products[1].id , title: products[1].title, description: 'Calabresa fatiada' })}
      />

      {
        prod.map(({title, description, id}:ProductsProps) => (
          <p key={id}>{title}, {description}</p>
        ))
      }

    </main>
  )
}
