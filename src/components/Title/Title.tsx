import * as S from "./styles";

type TitleProps = {
  text: string;
};

const Title = ({ text }: TitleProps) => <S.Title>{text}</S.Title>;

export default Title;
