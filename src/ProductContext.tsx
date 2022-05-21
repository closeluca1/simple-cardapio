import { createContext, ReactNode, useContext, useState } from "react";

interface ProductProvideProps {
  children: ReactNode;
}

type ProductsProps = {
  id: number;
  title: string,
  description: string,
}

interface ProductContextData {
  addItem: (ProductsProps:ProductsProps) => void;
  prod: any;
  cartItems: number;
  modalVisible: boolean;
  setModalVisible: any;
  handleProduct: any;
}

export const ProductContext = createContext({} as ProductContextData)

export const ProductStorage = ({children}:ProductProvideProps) => {

  let cartItems: any = [];
  
  const [prod, setProd] = useState<null | any>([])

  // adicionar local storage

  const addItem = ({ title, description }: ProductsProps) => {
    let cart = [...prod];
    cart.push({
      id: prod.length + 1,
      title,
      description
    });
    // setProd((oldProduct: any) => ([...oldProduct, cart]));
    setProd(cart)
    cartItems = cart;
    console.log('cart', cart)
    
  };

  const [modalVisible, setModalVisible] = useState(false);

  function handleProduct (proprety: any) {
    proprety = proprety.currentTarget.getAttribute('data-value');
    console.log(proprety)
    
    if (proprety !== null){
      setModalVisible(true);
    }
    
  }

  
  return (
    <ProductContext.Provider value={{addItem, prod, cartItems, modalVisible, setModalVisible, handleProduct}}>
      { children }
    </ProductContext.Provider>
  )
}

export function useContextProduct () {
  return useContext (ProductContext)
}

