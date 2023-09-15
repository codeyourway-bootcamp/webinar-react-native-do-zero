import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";
import AddItemScreen from "../screens/AddItem/AddItemScreen";
import HomeScreen from "../screens/Home/HomeScreen";

type AppStackParamList = {
  Main: undefined;
  AddItem: { onPressAddItem?: (title: string) => void };
};

type Screen = keyof AppStackParamList;

export type AppStackNavigation<S extends Screen> = CompositeNavigationProp<
  NativeStackNavigationProp<AppStackParamList, S>,
  NativeStackNavigationProp<any, "App">
>;

export type AppStackProps<S extends Screen> = RouteProp<AppStackParamList, S>;

const Stack = createNativeStackNavigator();

export const AppRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="AddItem"
          component={AddItemScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
