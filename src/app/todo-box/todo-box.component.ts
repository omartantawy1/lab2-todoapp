import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-box',
  templateUrl: './todo-box.component.html',
  styleUrls: ['./todo-box.component.css']
})
export class TodoBoxComponent {

  todos: string[] = [];

  onAddTodo(newTodo: string) {
    this.todos.push(newTodo);
  }

  onDeleteTask(index: number) {
    if (index >= 0 && index < this.todos.length) {
      this.todos.splice(index, 1);
    }
  }
}
