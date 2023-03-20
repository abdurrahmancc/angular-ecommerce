import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { SignIn, SignUp } from '../data-type'
import { SellerService } from '../services/seller.service'

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {
  showLogin = true
  authError: string = ''
  constructor (private seller: SellerService) {}
  openLogin () {
    this.showLogin = true
  }
  openSignUp () {
    this.showLogin = false
  }

  ngOnInit (): void {
    this.seller.reloadSeller()
  }
  signUp (data: SignUp): void {
    this.seller.userSignUp(data)
  }
  signIn (data: SignIn): void {
    this.seller.userSignIn(data)
    this.seller.isLoginError.subscribe(isError => {
      if (isError) {
        this.authError = 'Email or Password is not correct'
      }
    })
  }
}
