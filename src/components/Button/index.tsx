type ButtonProps = {
  textBtn: string;
  background: string;
}

export function Button ({textBtn, background,}: ButtonProps) {
  return(
    <button type="button" className={`w-40 py-2 rounded-md text-white ${background}`}>{ textBtn }</button>
  )
}