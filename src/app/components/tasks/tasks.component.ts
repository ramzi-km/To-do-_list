import { Component, OnInit } from '@angular/core';
import { Tasks } from '../../mock-tasks';
import { Task } from '../../task';

  @Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.css']
  })
  export class TasksComponent implements OnInit {
    ngOnInit(): void {
      
    }
    tasks: Task[] = Tasks;
  };

