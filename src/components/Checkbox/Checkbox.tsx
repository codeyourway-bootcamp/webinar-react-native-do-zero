import React from "react";

import * as S from "./styles";

type CheckboxProps = {
  value: boolean;
  onValueChange?: (value: boolean) => void;
  title?: string;
};

const Checkbox = ({ value, onValueChange, title }: CheckboxProps) => {
  return (
    <S.Section>
      <S.Checkbox value={value} onValueChange={onValueChange} />
      {!!title && <S.Label>{title}</S.Label>}
    </S.Section>
  );
};

export default Checkbox;
