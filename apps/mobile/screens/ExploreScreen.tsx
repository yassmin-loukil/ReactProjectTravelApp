import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Menu from "../components/Menu";

const ExploreScreen = () => {
  return (
    <View style={{ padding: 20, flex: 1 }}>
      <Text>Explore Screen</Text>
      <Menu />
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({});
