import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  orderedItems: Product[] = []
  total = 0

  firstName: string
  lasstName: string
  address: string

  constructor(private productsService:ProductsService) {
    this.total = 0
   }

  ngOnInit(): void {
    this.orderedItems = this.productsService.getCardedItems()
    for (let i = 0; i < this.orderedItems.length; i++) {
      this.total = this.total + this.orderedItems[i].price * this.orderedItems[i].inCartQty
    }
  }

}
