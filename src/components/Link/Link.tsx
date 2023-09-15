import * as S from "./styles";

type LinkProps = {
  title: string;
  onPress: () => void;
};

const Link = ({ title, onPress }: LinkProps) => (
  <S.Touchable onPress={onPress}>
    <S.Title>{title}</S.Title>
  </S.Touchable>
);

export default Link;
