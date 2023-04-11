import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-selection',
  templateUrl: './product-selection.component.html',
  styleUrls: ['./product-selection.component.sass']
})
export class ProductSelectionComponent implements OnInit {
  products: any[] = [];
  selectedProduct: any | null = null;
  quantity: number = 1;

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
      this.selectedProduct = this.products[0];
    });
  }

  addToCart(): void {
    if (this.selectedProduct && this.quantity > 0 && this.quantity <= this.selectedProduct.maxAmount)  {
      this.cartService.addToCart(this.selectedProduct, this.quantity);
    } else {
      alert('Invalid quantity. Please enter a valid quantity.');
    }
  }

  // Limits the input to the maxAmount of the selected product
  preventMoreThanMax(event: { preventDefault: () => void; }){
    let value=this.quantity;
    if (value > this.selectedProduct.maxAmount){
      event.preventDefault()
      this.quantity = this.selectedProduct.maxAmount;
    }
  }

  
}
