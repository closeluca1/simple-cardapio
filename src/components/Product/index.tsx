export interface TextProps {
  title: string;
  description: string;
  price: number;
  cents: number | string;
  openModal: () => void;
  // handleProduct: any;
}

export function Product ({title, description, price, cents, openModal}: TextProps) {
  return(
    <section onClick={openModal} className='w-[90%] mt-5 flex flex-row items-center flex-nowrap gap-3 border-b-2 border-indigo-500 pb-2'>
      <article className='bg-green-500 w-[80%]'>
        <h2 className='text-2xl font-semibold'>
          { title }
        </h2>
        <p className='text-base font-normal'>
          { description }
        </p>
      </article>
      <div className='bg-purple-400 w-[20%]'>
        <span className='text-2xl'>
          <span className='font-light text-xs'>R$</span> 
          { price },{ cents }
        </span>
      </div>
    </section>
  )
}