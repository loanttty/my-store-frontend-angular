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
  inCartQty: number = 0

  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
    this.cartedItems = this.productsService.getCardedItems()
    console.log(this.cartedItems)
  }

  decrement(inCartQtyChange: number) {
    this.inCartQty = inCartQtyChange
    return this.inCartQty > 0 ? this.inCartQty -=1 : this.inCartQty
  }
  
  increment(inCartQtyChange: number) {
    this.inCartQty = inCartQtyChange
    return this.inCartQty +=1
  }

  deleteFromCart(toBeDeletedItem: Product) {
    this.cartedItems.filter( item => item.id !== toBeDeletedItem.id)
  }

}
