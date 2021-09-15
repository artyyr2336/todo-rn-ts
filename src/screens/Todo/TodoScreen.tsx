import {observer} from 'mobx-react-lite';
import React, {useState} from 'react';
import {Pressable, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Icon} from '../../assets/icons';
import {globalStyles} from '../../assets/styles/global';
import {Layout} from '../../components/Layout';
import {TodoData} from '../../components/TodoData';
import todo, {todoInt} from '../../store/todo';
import {styles} from './styles';

interface IRenderTodo {
  index: number;
  todoText: todoInt;
}

export const TodoScreen = observer(() => {
  const [focusElem, setFocusElem] = useState(false);

  const updateFocusElement = () => {
    setFocusElem(state => !state);
  };

  const renderTodoList = ({todoText}, index: IRenderTodo) => {
    return (
      <TodoData
        index={index}
        key={new Date().getMilliseconds().toString()}
        name={todoText}
      />
    );
  };

  const addTodo = () => {
    if (todo.text == '') {
      return;
    }

    todo.addTodo();
    todo.clearText();
  };

  return (
    <Layout>
      <>
        <View style={globalStyles.row}>
          <TextInput
            onFocus={updateFocusElement}
            value={todo.text}
            onBlur={updateFocusElement}
            onChange={e => todo.updateText(e.nativeEvent.text)}
            style={[
              globalStyles.f1,
              styles.inputStyle,
              focusElem && styles.inputFocus,
            ]}
          />

          <Pressable style={styles.btnTodo} onPress={addTodo}>
            <Icon name="plus" />
          </Pressable>
        </View>

        {todo.todo.map(renderTodoList)}
      </>
    </Layout>
  );
});
