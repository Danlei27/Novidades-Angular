import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NovidadesComponent } from './novidades/novidades.component';


const routes: Routes = [
  { path: 'typescript',component: NovidadesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NovidadesTypescriptRoutingModule { }
