import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { FlatList } from "react-native";

import { Avatar, Fab, Title } from "../../components";

import ListItem from "./components/Listtem";

import { AppStackNavigation } from "../../routes/AppRoutes";

import DATA from "./DATA";

import * as S from "./styles";

export default function HomeScreen() {
  const { navigate } = useNavigation<AppStackNavigation<"Main">>();

  const [items, setItems] = useState(DATA);

  const onPressAddItemScreen = () => navigate("AddItem", { onPressAddItem });

  const onPressAddItem = (title: string) => {
    const id = Math.random();
    const newItem = { id, title };

    setItems((prev) => [...prev, newItem]);
  };

  return (
    <S.Container>
      <S.Content>
        <S.Header>
          <Title text="Hello!" />
          <Avatar />
        </S.Header>

        <FlatList
          data={items}
          renderItem={({ item }) => <ListItem text={item.title} />}
          keyExtractor={(item) => String(item.id)}
        />
      </S.Content>

      <Fab icon="plus" onPress={onPressAddItemScreen} />
    </S.Container>
  );
}
