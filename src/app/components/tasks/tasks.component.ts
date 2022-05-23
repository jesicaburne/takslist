import { Component, OnInit } from '@angular/core';
import { task } from 'src/app/task'
import { Tasks } from 'src/app/mock-tasks'
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: task[] = Tasks;

  constructor() { }

  ngOnInit(): void {
  }

}
