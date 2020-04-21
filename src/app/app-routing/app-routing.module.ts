import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChartComponentComponent} from '../chart-component/chart-component.component';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'post/:id',
    component: ChartComponentComponent,
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {

}
