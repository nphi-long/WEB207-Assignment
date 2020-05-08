import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from 'src/app/model/brand';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  brandList: Brand[];
  product: Product;
  url: string;
  constructor(
    private backendService: BackendService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getBrandList();
    this.getProduct();
  }

  getBrandList(){
    this.backendService.getBrandList().subscribe(data => this.brandList = data);
  }
  getProduct(){
    this.route.params.subscribe(param => this.backendService.getProduct(param.productID).subscribe(data => this.product = data));
  }
  updatProduct(){
    this.product.image = this.url;
    this.backendService.updateProduct(this.product).subscribe(data => this.router.navigateByUrl('/admin/product'))
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
