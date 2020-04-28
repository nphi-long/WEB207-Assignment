import { Component, OnInit } from '@angular/core';
import { FrontendService } from '../frontend.service';
import { Product } from 'src/app/model/product';
import { Brand } from 'src/app/model/brand';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productItems: Product[];
  brandItems: Brand[];

  constructor(
    private frontendService: FrontendService
  ) { }

  ngOnInit(): void {
    this.getProductList();
    this.getBrandList();
  }
  getProductList() {
    return this.frontendService.getProductList().subscribe(data => this.productItems = data);
  }
  getBrandList(){
    return this.frontendService.getBrandList().subscribe(data => this.brandItems = data);
  }
}
