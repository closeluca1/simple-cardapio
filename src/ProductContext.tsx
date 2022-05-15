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
}

export const ProductContext = createContext({} as ProductContextData)

export const ProductStorage = ({children}:ProductProvideProps) => {

  let cartItems: any = [];
  
  const [prod, setProd] = useState<null | any>([])

  // adicionar local storage

  const addItem = ({ title, description }: ProductsProps) => {
    const cart = {
      id: prod.length + 1,
      title,
      description
    };
    setProd((oldProduct: any) => ([...oldProduct, cart]));
    cartItems = cart;
    console.log(cart)    
  };

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ProductContext.Provider value={{addItem, prod, cartItems, modalVisible, setModalVisible}}>
      { children }
    </ProductContext.Provider>
  )

}

export function useContextProduct () {
  return useContext (ProductContext)
}
