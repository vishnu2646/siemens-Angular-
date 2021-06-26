import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeadercontentComponent } from './components/headercontent/headercontent.component';
import { DetailComponent } from './components/detail/detail.component';

const routes: Routes = [
  {path:"",component:HeadercontentComponent},
  {path:"details/:id",component:DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
