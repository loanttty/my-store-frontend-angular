import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartedItems: Product[] = []

  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
    this.cartedItems = this.productsService.getCardedItems()
  }

}
