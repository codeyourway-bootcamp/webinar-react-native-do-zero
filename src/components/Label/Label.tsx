import * as S from "./styles";

type LabelProps = {
  text: string;
};

const Label = ({ text }: LabelProps) => <S.Label>{text}</S.Label>;

export default Label;
