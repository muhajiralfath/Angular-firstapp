import {Injectable} from '@angular/core';
import {ToDo} from "./model/todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() {
  }

  private todos: ToDo[] = []

  getAllTodos(): ToDo[] {
    return this.todos;
  }

  addTodo(todo: ToDo){
    this.todos.push(todo)
  }

  deleteTodo(index: number):void {
    this.todos.splice(index, 1)
  }

  updateTodo(todo: ToDo, index: any){
    this.todos[index] = todo
  }



}
