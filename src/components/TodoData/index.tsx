import React from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';
import {Icon} from '../../assets/icons';
import todo from '../../store/todo';
import {styles} from './styles';

interface ITodoDataProps {
  name: string;
  index: number;
}

export const TodoData = ({name, index}: ITodoDataProps) => {
  const deleteTodo = () => {
    todo.removeTodo(index);
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      disableIntervalMomentum={true}>
      <View style={styles.todoContainer}>
        <Text>{name}</Text>
      </View>
      <Pressable style={styles.deleteBtn} onPress={deleteTodo}>
        <Icon name="basket" />
      </Pressable>
    </ScrollView>
  );
};
