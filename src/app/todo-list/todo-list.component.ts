import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input() todos: string[] = [];
  @Output() deleteTask = new EventEmitter<number>();

  onDeleteTask(index: number) {
    this.deleteTask.emit(index);
  }
}
