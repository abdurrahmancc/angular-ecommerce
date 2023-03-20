import { EventEmitter, Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { SignIn, SignUp } from '../data-type'
import { BehaviorSubject } from 'rxjs'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isSellerLoggedIn = new BehaviorSubject<boolean>(false)
  isLoginError = new EventEmitter<boolean>(false)
  constructor (private http: HttpClient, private router: Router) {}

  userSignUp (data: SignUp) {
    return this.http
      .post('http://localhost:3000/seller', data, { observe: 'response' })
      .subscribe(res => {
        console.log(res)
        if (res) {
          localStorage.setItem('seller', JSON.stringify(res))
          this.router.navigate(['seller-home'])
        }
      })
  }
  reloadSeller () {
    if (localStorage.getItem('seller')) {
      this.isSellerLoggedIn.next(true)
      this.router.navigate(['seller-home'])
    }
  }
  userSignIn (data: SignIn) {
    this.http
      .get(
        `http://localhost:3000/seller?email=${data?.email}&password=${data.password}`,
        { observe: 'response' }
      )
      .subscribe((res: any) => {
        if (res && res.body && res.body.length) {
          console.log('res', res)
          this.isLoginError.emit(false)
          localStorage.setItem('seller', JSON.stringify(res))
          this.router.navigate(['seller-home'])
        } else {
          console.log('login failed')
          this.isLoginError.emit(true)
        }
      })
  }
}
