import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './user-manager/list/list.component';

const routes: Routes = [
  
  {
    path : 'user-managment',
    loadChildren:()=>import('./user-manager/user-manager.module').then(m=> m.UserManagerModule),
  },

  {
    path : '**',
    redirectTo : 'user-managment'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
