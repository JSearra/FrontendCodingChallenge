import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-dropdown',
  templateUrl: './product-dropdown.component.html',
  styleUrls: ['./product-dropdown.component.css']
})
export class ProductDropdownComponent {
  @Input() products: Product[];
  @Output() productSelected = new EventEmitter<Product>();

  selectedProduct: Product;
  quantity = 1;

  onSelectProduct(product: Product): void {
    this.selectedProduct = product;
  }

  onAddToCart(): void {
    this.selectedProduct.quantity = this.quantity;
    this.productSelected.emit(this.selectedProduct);
  }
}