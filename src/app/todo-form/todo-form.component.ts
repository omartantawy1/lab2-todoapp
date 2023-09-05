import { Component, EventEmitter, Input,Output } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  @Output() addTodo = new EventEmitter<string>();
  newTodo: string = '';

  onAddTodo() {
    if (this.newTodo.trim() !== '') {
      this.addTodo.emit(this.newTodo);
      this.newTodo = ''; 
    }
  }
}
