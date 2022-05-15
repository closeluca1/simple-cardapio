import react, { useState } from 'react';

import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';

export function App () {
  
  return (
    <div className="w-full flex flex-col items-center">

      <div className='container max-w-md bg-zinc-700'>

        <Header/>

        <Main/>

        <Footer/>
        
      </div>

    </div>
  )
}


export default App;