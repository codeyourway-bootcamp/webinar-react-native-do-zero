import { useState } from "react";
import Input from "../../components/Input/Input";
import Title from "../../components/Title/Title";

import { useNavigation, useRoute } from "@react-navigation/native";
import Button from "../../components/Button/Button";
import * as S from "./styles";

export default function AddItemScreen() {
  const [value, setValue] = useState<string>();

  const { goBack } = useNavigation();

  const { onPressAddItem } = useRoute().params;

  const onPressDone = () => {
    if (!value) {
      alert("Digite algo!");
      return;
    }

    if (onPressAddItem) {
      onPressAddItem(value);
    }

    goBack();
  };

  return (
    <S.Container>
      <S.Content>
        <Title text="Add Item" />

        <S.Form>
          <Input
            value={value}
            placeholder="Digite algo..."
            onChangeText={setValue}
          />

          <Button title="Done" onPress={onPressDone} />
        </S.Form>
      </S.Content>
    </S.Container>
  );
}
