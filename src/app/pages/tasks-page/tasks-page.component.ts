import { Component } from '@angular/core';
import { EditingTableComponent } from 'src/app/components/editing-table/editing-table.component';

@Component({
  selector: 'app-tasks-page',
  standalone: true,
  imports: [EditingTableComponent],
  templateUrl: './tasks-page.component.html',
  styleUrl: './tasks-page.component.scss'
})
export class TasksPageComponent {

}
