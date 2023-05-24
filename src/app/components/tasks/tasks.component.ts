import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../task';

  @Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.css']
  })
  export class TasksComponent implements OnInit {
    ngOnInit(): void {
      
    }
    constructor(private taskService: TaskService){
      this.taskService.getTasks().subscribe((tasks)=>{ return this.tasks=tasks})
    }
    tasks: Task[] = []
  };

