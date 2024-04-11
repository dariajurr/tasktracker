import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { TasksPageComponent } from './pages/tasks-page/tasks-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { TaskDetailPageComponent } from './pages/task-detail-page/task-detail-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: MainPageComponent,
      },
      {
        path: 'tasks',
        component: TasksPageComponent,
      },
      {
        path: 'task/:id',
        component: TaskDetailPageComponent,
      },
      {
        path: 'task/new',
        component: TaskDetailPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
