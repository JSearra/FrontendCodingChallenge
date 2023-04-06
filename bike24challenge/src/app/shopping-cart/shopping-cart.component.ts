import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  getTotal(): number {
    return this.cartService.getCartTotal();
  }

  removeItem(index: number): void {
    this.cartService.removeItem(index);
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = [];
  }
}