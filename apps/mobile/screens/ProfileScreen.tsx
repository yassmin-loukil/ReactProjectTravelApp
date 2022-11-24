import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MyButton } from "@my-workspace/my-ui";

const ProfileScreen = () => {
  return (
    <View style={{ padding: 20, flex: 1 }}>
      <Text>ProfileScreen</Text>
      <MyButton text="Click me" onPress={() => console.log("clicked")} />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
