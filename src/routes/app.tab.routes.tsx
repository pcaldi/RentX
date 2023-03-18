import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "../screens/Home";
import { MyCars } from "../screens/MyCars";
import { AppStackRoutes } from "./app.stack.routes";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppTabRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false, // Retira o header da tela
      }}
    >
      <Screen name="Home" component={AppStackRoutes} />
      <Screen name="MyCars" component={MyCars} />
      <Screen name="Profile" component={Home} />
    </Navigator>
  );
}
