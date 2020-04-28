import { Component, OnInit } from '@angular/core';
import { FrontendService } from '../frontend.service';
import { Product } from 'src/app/model/product';
import { ActivatedRoute } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { Brand } from 'src/app/model/brand';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product;
  brandList: Brand[];
  constructor(
    private frontendService: FrontendService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getProduct();
    this.getBrandList();
  }
  getProduct(){
    this.route.params.subscribe(param => this.frontendService.getProduct(param.productID).subscribe(data => this.product =data));
  }
 getBrandList(){
   this.frontendService.getBrandList().subscribe(data => this.brandList = data);
 }
}
