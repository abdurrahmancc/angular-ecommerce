import { Router } from '@angular/router'
import { Component } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuType: string = 'default'
  sellerName: string = ''
  constructor (private route: Router) {}

  ngOnInit (): void {
    this.route.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('seller') && val.url.includes('seller')) {
          let sellerStor = localStorage.getItem('seller')
          let sellerData = sellerStor && JSON.parse(sellerStor).body[0]
          this.sellerName = sellerData.name
          this.menuType = 'seller'
        } else {
          this.menuType = 'default'
        }
      }
    })
  }
  logout () {
    localStorage.removeItem('seller')
    this.route.navigate(['/'])
  }
}
