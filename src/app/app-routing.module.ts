import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AuthGuard } from './auth.guard'
import { CartComponent } from './cart/cart.component'
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component'
import { SellerAuthComponent } from './seller-auth/seller-auth.component'
import { SellerHomeComponent } from './seller-home/seller-home.component'

const routes: Routes = [
  {
    component: HomeComponent,
    path: ''
  },
  {
    component: SellerAuthComponent,
    path: 'seller-auth'
  },
  {
    component: LoginComponent,
    path: 'login'
  },
  {
    component: CartComponent,
    path: 'cart'
  },
  {
    component: SellerHomeComponent,
    path: 'seller-home',
    canActivate: [AuthGuard]
  },
  {
    component: SellerAddProductComponent,
    path: 'seller-add-product',
    canActivate: [AuthGuard]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
