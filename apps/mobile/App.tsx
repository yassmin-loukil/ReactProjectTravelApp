import { StyleSheet } from "react-native";
import React from "react";
import { MyButton } from "@mytravel-app/my-ui";

import { ApplicationProvider, Text } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <MyButton
        bgColor="black"
        isDisabled
        onPress={() => { }}
        text="this is nejah neji"
        textColor="white"
      />
      <Text>
        hello world
      </Text>
    </ApplicationProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
