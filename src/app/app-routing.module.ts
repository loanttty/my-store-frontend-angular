import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductItemDetailComponent } from './components/product-item-detail/product-item-detail.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';

const routes: Routes = [
  {path:'',component: ProductListComponent},
  {path:'cart',component: CartComponent},
  {path:'product/:id',component: ProductItemDetailComponent},
  //{path:'/orders',component: ConfirmationComponent} new component to view confirmed orders?
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
