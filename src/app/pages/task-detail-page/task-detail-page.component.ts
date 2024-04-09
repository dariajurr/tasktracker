import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TaskFormComponent } from 'src/app/components/task-form/task-form.component';

@Component({
  selector: 'app-task-detail-page',
  standalone: true,
  imports: [RouterModule, MatIconModule, MatButtonModule, TaskFormComponent ],
  templateUrl: './task-detail-page.component.html',
  styleUrl: './task-detail-page.component.scss'
})
export class TaskDetailPageComponent implements OnInit{
  id!: number;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      console.log(this.id);
    });
  }

  ngOnInit(): void {

  }

}
