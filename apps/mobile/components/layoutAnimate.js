import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Animated, { Layout, SlideInRight, SlideOutRight } from 'react-native-reanimated';

const WelcomeScreen = () => {
  const [tasks, setTasks] = useState([
    { text: 'learn html', id: 0 },
    { text: 'learn html', id: 1 },
    { text: 'learn html', id: 2 },
    { text: 'learn html', id: 3 },
    { text: 'learn html', id: 4 },
  ]);
  const deleteTask = (id: any) => {
    setTasks((prevtasks) => prevtasks.filter((task) => task.id !== id));
  };
  const addTask = () => {
    setTasks([...tasks, { id: Math.random(), text: 'new task' }]);
  };
  return (
    <View style={{ padding: 50 }}>
      {tasks.map((task, index) => (
        <Animated.View
          key={index}
          entering={SlideInRight.delay(index * 200)}
          exiting={SlideOutRight}
          layout={Layout.springify()}
        >
          <Text
            style={{ color: 'red', padding: 10, backgroundColor: 'purple', marginBottom: 5 }}
            onPress={() => deleteTask(task.id)}
          >
            {task.text}
          </Text>
        </Animated.View>
      ))}
      <TouchableOpacity onPress={addTask}>
        <Text>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
