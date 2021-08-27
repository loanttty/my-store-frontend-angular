import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product

  selectedQty: number = 0

  constructor(private productsService:ProductsService) { 
    this.product = {
        id: 1,
        name: "",
        price: 1,
        url: "",
        description: "",
        inStockQty: 1,
        inCartQty: 0
    }
  }

  ngOnInit(): void {
  }

  decrement() {
    return this.selectedQty > 0 ? this.selectedQty -=1 : this.selectedQty
  }

  increment() {
    return this.selectedQty +=1
  }

  addToCart(product: Product) {
    this.productsService.addProductToCart(product,this.selectedQty)
  }

}
