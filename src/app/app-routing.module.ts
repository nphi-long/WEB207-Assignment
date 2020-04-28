import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './frontend/home/home.component';
import { AdminComponent } from './backend/admin/admin.component';
import { DashboardComponent } from './backend/dashboard/dashboard.component';
import { ProductListComponent } from './backend/product-list/product-list.component';
import { AboutComponent } from './frontend/about/about.component';
import { ClientComponent } from './frontend/client/client.component';
import { DeliveryComponent } from './frontend/delivery/delivery.component';
import { NewsComponent } from './frontend/news/news.component';
import { ContactComponent } from './frontend/contact/contact.component';
import { ProductComponent } from './frontend/product/product.component';
import { UpdateProductComponent } from './backend/update-product/update-product.component';
import { AddProductComponent } from './backend/add-product/add-product.component';


const routes: Routes = [
  {path: '', redirectTo: 'client', pathMatch: 'full'},
  {
    path: 'client', component: ClientComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },      
      { path: 'delivery', component: DeliveryComponent },
      { path: 'news', component: NewsComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'product/:productID', component: ProductComponent}
    ]
  },
  
  
  {
    path: 'admin', component: AdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'product', component: ProductListComponent },
      { path: 'product/update/:productID', component: UpdateProductComponent},
      { path: 'product/add', component: AddProductComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
