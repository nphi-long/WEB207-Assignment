import { Component, OnInit } from '@angular/core';
import { FrontendService } from '../frontend.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  items: Product[];
  constructor(
    private frontendService: FrontendService
  ) { }

  ngOnInit(): void {
    this.getProductList();
  }
getProductList(){
  return this.frontendService.getProductList().subscribe(data => this.items=data);
}
}
