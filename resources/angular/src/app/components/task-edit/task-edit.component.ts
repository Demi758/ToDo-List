import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../service/data.service';
import { Task } from '../../task';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrl: './task-edit.component.css',
})
export class TaskEditComponent implements OnInit {
  id?: number;
  data?: Task;
  task = new Task();

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getData();
  }

  getData() {
    this.dataService.getTaskById(this.id).subscribe((res) => {
      this.data = res;
      this.task = this.data;
    });
  }

  updateTask() {
    this.dataService.updateData(this.id, this.task).subscribe((res) => {
      this.router.navigateByUrl('');
    });
  }
}
