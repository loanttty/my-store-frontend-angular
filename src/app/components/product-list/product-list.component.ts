import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/products.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = []
  cartedItems: Product[] = []

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(res => {
      this.products = res
      console.log(this.products)

      this.cartedItems = this.productsService.getCartedItems()
      console.log(this.products)

      for (const product of this.products) {
        const inCartedCheck = this.cartedItems.filter( item => item.id === product.id)
        console.log(inCartedCheck)
        if (inCartedCheck.length > 0 ) {
          this.products = this.products.filter( product => product.id !== inCartedCheck[0].id)
          this.products = this.products.concat(inCartedCheck)
          console.log(this.products)
        }
      }
      console.log(this.products)
    })
  }

}
