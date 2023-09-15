import * as S from "./styles";

type InputProps = {
  value?: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
};

export const Input = ({ value, onChangeText, placeholder }: InputProps) => {
  return (
    <S.Input
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
    />
  );
};

export default Input;
