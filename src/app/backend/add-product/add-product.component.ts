import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { Brand } from 'src/app/model/brand';
import { Product } from 'src/app/model/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  brandList: Brand[];
  product: Product = new Product();
  url :string;

  constructor(
    private backendService: BackendService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.getBrandList();
    this.product.brand = 'Apple';
  }

  getBrandList(){
    this.backendService.getBrandList().subscribe(data => this.brandList = data);
  }

  addProduct(){
    this.product.image = this.url;
    this.backendService.addProduct(this.product).subscribe(data => this.router.navigateByUrl('/admin/product'))
  }

  onSelectFile(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = <string> event.target.result;
      }
    }
}
}
