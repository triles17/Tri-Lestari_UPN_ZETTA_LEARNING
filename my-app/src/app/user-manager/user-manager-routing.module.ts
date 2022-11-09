import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  
    {
      path :'list',
      pathMatch:'full',
      component:ListComponent
    
    },
    {
      path :'create',
      pathMatch:'full',
      component:CreateComponent
    
    },
    {
      path: 'detail/:id' ,
      pathMatch:'full',
      component:DetailComponent
    },
    {
      path: 'edit/:id' ,
      pathMatch:'full',
      component:EditComponent
    },
    {
      path: '**' ,
      pathMatch:'full',
     redirectTo : 'list'
    }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagerRoutingModule { }
