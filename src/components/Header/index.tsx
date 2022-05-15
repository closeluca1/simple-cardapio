import { useState, useEffect } from "react";
import { useContextProduct } from '../../ProductContext';

export function Header() {

  const {prod} = useContextProduct(); 

  return (
    <header className='w-full flex flex-col items-center bg-red-900'>
      <div className='w-[90%] gap-3 flex flex-row justify-between flex-nowrap bg-pink-500'>
        
        <h1>LOGO</h1>
        <span> 
          <>cart </>
          {prod.length}
        </span>
      </div>
    </header>
  )
}
