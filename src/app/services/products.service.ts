import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  cartedItems: Product[] = []

  constructor(private http:HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('assets/data.json')
  }

  addProductToCart(product: Product, selectedQty: number) {
    product["inCartQty"] = selectedQty
    this.cartedItems.push(product)
    console.log(this.cartedItems)
  }

  getCardedItems(): Product[] {
    return this.cartedItems
  }

}
