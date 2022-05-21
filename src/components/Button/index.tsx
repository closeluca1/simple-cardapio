type ButtonProps = {
  textBtn: string;
  background: string;
  onClick: () => void;
}

export function Button ({textBtn, background, onClick}: ButtonProps) {
  return(
    <button onClick={onClick} type="button" className={`w-40 py-2 rounded-md text-white ${background}`}>{ textBtn }</button>
  )
}