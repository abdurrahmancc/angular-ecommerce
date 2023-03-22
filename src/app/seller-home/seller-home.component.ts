import { Component } from '@angular/core'
import { Product } from '../data-type'
import { ProductService } from '../services/product.service'

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent {
  productList: undefined | Product[]
  constructor (private product: ProductService) {}

  ngOnInit (): void {
    this.product.getProductList().subscribe(res => {
      if (res) {
        this.productList = res
      }
    })
  }
}
