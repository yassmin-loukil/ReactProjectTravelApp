import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../App";
import RestaurantCard from "../components/RestaurantCard";
type Props = NativeStackScreenProps<RootStackParams, "Restaurant">;
const RestaurantScreen = ({ route, navigation }: Props) => {
  const foods = ["flambeur", "lablebi", "kaftegi"];
  return (
    <TouchableOpacity>
      <Text>{route.params.name}</Text>
      <Text>Foods :</Text>
      {foods.map((food, index) => (
        <RestaurantCard
          name={food}
          key={index}
          onPress={(name) => navigation.push("Restaurant", { name })}
        />
      ))}
    </TouchableOpacity>
  );
};

export default RestaurantScreen;

const styles = StyleSheet.create({});
