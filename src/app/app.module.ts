import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AdminComponent } from './backend/admin/admin.component';
import { DashboardComponent } from './backend/dashboard/dashboard.component';
import { ProductListComponent } from './backend/product-list/product-list.component';
import { HomeComponent } from './frontend/home/home.component';
import { AboutComponent } from './frontend/about/about.component';
import { ClientComponent } from './frontend/client/client.component';
import { DeliveryComponent } from './frontend/delivery/delivery.component';
import { NewsComponent } from './frontend/news/news.component';
import { ContactComponent } from './frontend/contact/contact.component';
import { ProductComponent } from './frontend/product/product.component';
import { UpdateProductComponent } from './backend/update-product/update-product.component';
import { AddProductComponent } from './backend/add-product/add-product.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DashboardComponent,
    ProductListComponent,
    HomeComponent,
    AboutComponent,
    ClientComponent,
    DeliveryComponent,
    NewsComponent,
    ContactComponent,
    ProductComponent,
    UpdateProductComponent,
    AddProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
