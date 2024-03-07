import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InlineEditTableComponent } from './inline-edit-table/inline-edit-table.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InlineEditTableValidationComponent } from './inline-edit-table-validation/inline-edit-table-validation.component';
import { ServerSideFilterComponent } from './server-side-filter/server-side-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    InlineEditTableComponent,
    InlineEditTableValidationComponent,
    ServerSideFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
