import { Component } from '@angular/core'
import { Product } from '../data-type'
import { ProductService } from '../services/product.service'

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {
  addProductMessage: string | undefined
  constructor (private product: ProductService) {}

  submitProduct (data: Product) {
    this.product.addProduct(data).subscribe((res: any) => {
      if (res) {
        this.addProductMessage = 'Product is added successfully'
      }
    })
    setTimeout(() => {
      this.addProductMessage = undefined
    }, 3000)
  }
}
