import react, { useState } from 'react';

import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';

import { ProductStorage } from './ProductContext';

export function App () {
  
  return (
    <div className="w-full flex flex-col items-center">

      <div className='container max-w-md bg-zinc-700'>
        
        <ProductStorage>
          <Header/>

          <Main/>

          <Footer/>
        </ProductStorage>

       
        
      </div>

    </div>
  )
}


export default App;