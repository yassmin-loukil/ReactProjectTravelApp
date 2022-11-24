import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet,  View } from "react-native";
import { MyButton } from "@my-workspace/my-ui";
import * as eva from "@eva-design/eva";
import { ApplicationProvider,Text } from "@ui-kitten/components";

export default function App() {

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
    <View style={styles.container}>
      <Text>Hello from the application</Text>
      <MyButton text="Click me" onPress={() => console.log("clicked")} />
      <StatusBar style="auto" />
    </View>

    </ApplicationProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
