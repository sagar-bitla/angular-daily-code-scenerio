import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InlineEditTableValidationComponent } from './inline-edit-table-validation/inline-edit-table-validation.component';
import { InlineEditTableComponent } from './inline-edit-table/inline-edit-table.component';
import { ServerSideFilterComponent } from './server-side-filter/server-side-filter.component';

const routes: Routes = [
  {
    path: '',
    component: InlineEditTableComponent,
    data : {title:'InlineEdit Table'}
  },
  {
    path: 'Home',
    component: InlineEditTableComponent,
    data : {title:'InlineEdit Table 1'}
  },
  {
    path: 'inline-edit-table-validation',
    component: InlineEditTableValidationComponent,
    data : {title:'InlineEdittable Validation'}
  },
  {
    path: 'serversidefilter',
    component: ServerSideFilterComponent,
    data : {title:'ServerSide Filter '}
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
