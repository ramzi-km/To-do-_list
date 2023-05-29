import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Task } from '../../task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleCheckBox: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;
  onDelete(task: any) {
    this.onDeleteTask.emit(task);
  }
  onToggle(task: any) {
    this.onToggleReminder.emit(task);
  }
  onToggleCheck(task: any) {
    this.onToggleCheckBox.emit(task);
  }
}
