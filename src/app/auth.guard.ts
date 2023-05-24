import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router'
import { SellerService } from './services/seller.service'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor (private sellerService: SellerService) {}

  canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    if (localStorage.getItem('seller')) {
      return true
    }
    return this.sellerService.isSellerLoggedIn
  }
}

// export const AuthGuard: CanActivateFn = (route, state) => {
//   return false
// }
