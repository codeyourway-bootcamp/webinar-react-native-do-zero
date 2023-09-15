import * as S from "./styles";

type ButtonProps = {
  title: string;
  onPress: () => void;
};

const Button = ({ title, onPress }: ButtonProps) => {
  return (
    <S.Touchable onPress={onPress}>
      <S.Label>{title}</S.Label>
    </S.Touchable>
  );
};

export default Button;
