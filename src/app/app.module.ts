import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerService } from './customer.service';
import { FormsModule } from '@angular/forms';
import * as _ from 'lodash';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GridCustomerComponent } from './grid-customer/grid-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { GridItemComponent } from './grid-item/grid-item.component';
import { ItemService } from './item.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent }
 
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GridCustomerComponent,
    EditCustomerComponent,
    EditItemComponent,
    GridItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CustomerService,
    ItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
