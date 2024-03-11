import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Task } from '../../task';

interface TaskData {
  id: number;
  description: number;
}

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent implements OnInit {
  tasks?: TaskData[];
  task = new Task();
  id?: number;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getTasksData();
  }

  getTasksData() {
    this.dataService.getData().subscribe((res) => {
      this.tasks = res as TaskData[];
    });
  }

  insertData() {
    this.dataService.insertData(this.task).subscribe((res) => {
      this.getTasksData();
    });
  }

  deleteData(id: number) {
    this.dataService.deleteData(id).subscribe((res) => {
      this.getTasksData();
    });
  }
}
