import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string | number;
  icon?: ReactNode;
}

export function Button({ text, icon, ...props }: ButtonProps) {
  return (
    <ButtonContainer {...props}>
      {text}
      {icon}
    </ButtonContainer>
  )
}