import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import RestaurantCard from "../components/RestaurantCard";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../App";
type Props = NativeStackScreenProps<RootStackParams, "Restaurants">;
const RestaurantsScreen = ({ navigation }: Props) => {
  const restaurants = ["king", "snack attack", "bacha", "mama", "kame"];
  return (
    <View style={{ padding: 20, flex: 1 }}>
      <Text>RestaurantsScreen</Text>
      <ScrollView>
        {restaurants.map((rest, index) => (
          <RestaurantCard
            key={index}
            name={rest}
            onPress={(name) => navigation.navigate("Restaurant", { name })}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default RestaurantsScreen;

const styles = StyleSheet.create({});
