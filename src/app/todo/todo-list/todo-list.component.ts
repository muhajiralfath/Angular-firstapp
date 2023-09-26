import {Component} from '@angular/core';
import {TodoService} from "../todo.service";
import {ToDo} from "../model/todo";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  constructor(private readonly service: TodoService) {
  }
  newTodo: ToDo = { title: '', description: '' };
  todos: ToDo[] = []
  taskTitle: string = ""
  taskDesc: string = ""
  updateTitle: string = ""
  updateDesc: string = ""
  updateIdx:number|null = null

  ngOnInit() {
    this.getAllTodos()
  }

  getAllTodos() {
    this.todos = this.service.getAllTodos()
  }

  addTodo(){
    if (this.taskTitle && this.taskDesc){
      this.newTodo = {title: this.taskTitle, description: this.taskDesc}
      this.service.addTodo(this.newTodo)
      this.getAllTodos()
      this.taskDesc = ""
      this.taskTitle = ""
    } else {
      alert("please fill the blank input")
    }
  }

  deleteTodo(index: number): void {
    this.service.deleteTodo(index)
    this.getAllTodos()
  }

  update(){
    this.newTodo = {title: this.updateTitle, description: this.updateDesc}
    this.service.updateTodo(this.newTodo, this.updateIdx)
    this.updateTitle = ""
    this.updateDesc = ""
    this.updateIdx = null
  }

  updateTrigger(title:string, desc:string, index:number){
    this.updateTitle = title
    this.updateDesc = desc
    this.updateIdx = index
  }

}
