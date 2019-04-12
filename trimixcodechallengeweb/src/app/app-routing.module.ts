import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AddPersonaComponent} from './add-persona/add-persona.component';
import {ListPersonaComponent} from './list-persona/list-persona.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'add-persona', component: AddPersonaComponent},
  {path: 'add-persona/:id', component: AddPersonaComponent},
  {path: 'list-persona', component: ListPersonaComponent},
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
