import { Component } from '@angular/core'
import { SellerService } from '../services/seller.service'
import { Router } from '@angular/router'
import { SignUpDataType, signInDataType } from '../data-type'

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {
  constructor (private seller: SellerService, private router: Router) {}
  showLogin = false
  authError: string = ''

  signUp (value: SignUpDataType): void {
    this.seller.userSignUp(value)
  }
  login (value: signInDataType): void {
    this.seller.userLogin(value)
    this.seller.isLoginError.subscribe(isError => {
      if (isError) {
        this.authError = 'email or password is not correct'
      }
    })
  }

  openLogin () {
    this.showLogin = !this.showLogin
  }

  ngOnInit (): void {
    this.seller.reloadSeller()
  }
}
