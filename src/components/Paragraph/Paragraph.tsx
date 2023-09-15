import * as S from "./styles";

type ParagraphProps = {
  children: React.ReactNode;
};

const Paragraph = ({ children }: ParagraphProps) => (
  <S.Paragraph>{children}</S.Paragraph>
);

export default Paragraph;
