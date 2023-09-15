import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

import { useCallback } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./src/routes/AppRoutes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Lato: require("./assets/fonts/Lato-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <AppRoutes />
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
