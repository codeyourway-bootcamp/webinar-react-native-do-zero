import { useState } from "react";
import { Checkbox } from "../../../components";

import * as S from "./styles";

type ListItemProps = {
  text: string;
};

export const ListItem = ({ text }: ListItemProps) => {
  const [checked, setChecked] = useState(false);

  const timeString = new Date().toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <S.Container onPress={() => setChecked((prev) => !prev)}>
      <Checkbox value={checked} onValueChange={setChecked} />
      <S.Content>
        <S.Title>{text}</S.Title>
        <S.Time>{timeString}</S.Time>
      </S.Content>
    </S.Container>
  );
};

export default ListItem;
