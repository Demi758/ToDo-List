import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Task } from '../../task';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {
  tasks:any;
  task = new Task();
  id:any;

  constructor(private dataService:DataService)
  {

  }
  
  ngOnInit(): void {
    this.getTasksData();
  }

  getTasksData()
  {
    this.dataService.getData().subscribe(res => {
      this.tasks = res;
    });
  }

  insertData()
  {
    this.dataService.insertData(this.task).subscribe(res => {
      this.getTasksData();
    })
  }

  deleteData(id: any)
  {
    this.dataService.deleteData(id).subscribe(res => {
      this.getTasksData();
    })
  }
}
