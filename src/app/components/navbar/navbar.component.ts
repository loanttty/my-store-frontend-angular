import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  noOfCartedItems: number

  constructor(private productsService: ProductsService) { 
    this.noOfCartedItems = 0
  }

  ngOnInit(): void {
    const cartedItems = this.productsService.getCartedItems()
    this.noOfCartedItems = cartedItems.length
  }

  ngDoCheck() {
    const cartedItemsChange = this.productsService.getCartedItems()
    cartedItemsChange.length !== this.noOfCartedItems 
    ? this.noOfCartedItems = cartedItemsChange.length
    : this.noOfCartedItems
  }

}
