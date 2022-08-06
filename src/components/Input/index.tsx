import { forwardRef, InputHTMLAttributes } from "react";
import { RegularText } from "../Typography";
import { InputStyleContainer, InputWrapper } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <InputWrapper className={className}>
        <InputStyleContainer {...props} ref={ref} />
        {error && (
          <RegularText size="s">{error}</RegularText>
        )}
      </InputWrapper>
    )
  }
)