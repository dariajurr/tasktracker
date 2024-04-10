import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { TasksTableComponent } from 'src/app/components/tasks-table/tasks-table.component';


@Component({
  selector: 'app-tasks-page',
  standalone: true,
  imports: [RouterModule, MatIconModule, MatButtonModule, TasksTableComponent],
  templateUrl: './tasks-page.component.html',
  styleUrl: './tasks-page.component.scss'
})
export class TasksPageComponent {

}
