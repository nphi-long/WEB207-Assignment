import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  items: Product[];
  page = 1;
  pageSize = 4;
  constructor(
    private backendService: BackendService
  ) { }

  ngOnInit(): void {
    this.getProductList();
  }
  getProductList(){
    this.backendService.getProductList().subscribe(data => this.items = data);
  }
  removeItem(id){
    this.backendService.removeProduct(id).subscribe(response => this.items = this.items.filter(product => product.id != response.id));
  }
}
