import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [name, setName] = useState("omouri");
  const [age, setAge] = useState(80);
  const [person, setPerson] = useState({ name: "omouri", age: 70 });
  const handleClick = () => {
    setName("wassim ta3eb");
    setPerson({ name: "ali at3eb mennou", age: 26 });
  };
  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>
        His name is name is {person.name} and his age is {person.age}
      </Text>
      <Text>Enter name:</Text>
      <TextInput
        style={styles.input}
        placeholder="enter your name"
        onChangeText={(value) => setName(value)}
      />
      <Text>Enter age:</Text>
      <TextInput
        style={styles.input}
        placeholder="enter your age"
        onChangeText={(value) => setAge(value)}
        keyboardType="numeric"
      />
      <Text style={styles.result}>
        name: {name}, age: {age}
      </Text>
      <View style={styles.btn__wrapper}>
        <Button title="update the state" onPress={handleClick} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btn__wrapper: {
    backgroundColor: "purple",
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    width: 200,
  },
});
