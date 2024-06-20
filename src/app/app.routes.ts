import { Routes } from '@angular/router';
import { ContentleaderComponent } from './contentleader/contentleader.component';
import { ProjectsComponent } from './projects/projects.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './athGuard';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TasksComponent } from './tasks/tasks.component';
import { EditTasksComponent } from './edit-tasks/edit-tasks.component';

import { RegisterComponent } from './register/register.component';
export const routes: Routes = [
  { path: 'register', component: RegisterComponent  },
  { path: 'login', component: LoginComponent },
  { path: '', component: ContentleaderComponent,canActivate: [AuthGuard] },
  { path: 'project', component: ProjectsComponent ,canActivate: [AuthGuard]},
  { path: 'admin-leader', component: ContentleaderComponent,canActivate: [AuthGuard] },
  { path: 'create-project', component: CreateProjectComponent,canActivate: [AuthGuard] },
  { path: 'create-task', component: CreateTaskComponent ,canActivate: [AuthGuard]},
  { path: 'project', component: ProjectsComponent ,canActivate: [AuthGuard]},
  { path: 'tasks', component: TasksComponent,canActivate: [AuthGuard] },
  { path: 'edit-project/:id', component: EditProjectComponent,canActivate: [AuthGuard] },
  { path: 'edit-task/:id', component: EditTasksComponent,canActivate: [AuthGuard] },
];
