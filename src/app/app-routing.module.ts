import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemlistComponent } from './itemlist/itemlist.component';

const routes: Routes = [
  {path:'', redirectTo:'itemlist', pathMatch:'full'},
  {path:'itemlist', component:ItemlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
