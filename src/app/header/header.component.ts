import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuType: string = 'default'
  constructor (private route: Router) {}

  logOut () {
    localStorage.removeItem('seller')
    this.route.navigate(['/'])
  }

  ngOnInit (): void {
    this.route.events.subscribe((data: any) => {
      if (data.url) {
        if (localStorage.getItem('seller') && data.url.includes('seller')) {
          this.menuType = 'seller'
        } else {
          this.menuType = 'default'
        }
      }
    })
  }
}
