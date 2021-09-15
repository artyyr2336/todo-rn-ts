import {makeAutoObservable} from 'mobx';

export interface todoInt {
  todoText: string;
}

class Todo {
  todo: todoInt[] = [];
  text: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  updateText(e: string) {
    this.text = e;
  }

  clearText() {
    this.text = '';
  }

  addTodo() {
    this.todo = [...this.todo, {todoText: this.text}];
  }

  removeTodo(index: number) {
    console.log('index', index);

    let arr = [...this.todo];
    arr.splice(index, 1);
    this.todo = arr;
  }

  get count() {
    return this.todo.length;
  }
}

export default new Todo();
