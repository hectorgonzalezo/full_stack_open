import React from 'react';

interface ButtonProps {
  onClick: () => void;
  text: string;
}

function Button({ onClick, text }: ButtonProps){
  return(
    <button onClick={onClick}>{text}</button>
  )
}

export default Button;