import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import ExploreScreen from "./screens/ExploreScreen";
import ProfileScreen from "./screens/ProfileScreen";
import RestaurantsScreen from "./screens/RestaurantsScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import DragSort from "./screens/DragSort";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, Text } from "@ui-kitten/components";
export type RootStackParams = {
  Restaurants: undefined;
  Explore: undefined;
  Profile: undefined;
  Restaurant: {
    name: string;
  };
};
const RootStack = createNativeStackNavigator();
const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen name="Explore" component={ExploreScreen} />
          <RootStack.Screen name="Restaurants" component={RestaurantsScreen} />
          <RootStack.Screen name="Profile" component={ProfileScreen} />
          <RootStack.Screen name="Restaurant" component={RestaurantScreen} />
          <RootStack.Screen name="DragSort" component={DragSort} />
        </RootStack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
