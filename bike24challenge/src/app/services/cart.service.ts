import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];

  constructor() { }

  getCartItems() {
    return this.cartItems;
  }

  addToCart(product: any, quantity: number): void {
    const itemIndex = this.cartItems.findIndex(
      (item) => item.product.id === product.id
    );

    if (itemIndex === -1) {
      this.cartItems.push({
        product: product,
        quantity: quantity,
        total: product.price * quantity
      });
    } else {
      this.cartItems[itemIndex].quantity += quantity;
      this.cartItems[itemIndex].total += product.price * quantity;
    }
  }

  getCartTotal() {
    return this.cartItems.reduce(
      (total, item) => total + item.total,
      0
    );
  }

  removeItem(index: number) {
    this.cartItems.splice(index, 1);
  }

  clearCart() {
    this.cartItems = [];
  }

  // get total number of all items in cart, not unique
  getTotalQuantity(): number {
    let totalQuantity = 0;
    for (const item of this.cartItems) {
      totalQuantity += item.quantity;
    }
    return totalQuantity;
  }

  // get unique number of products in cart
  getTotalProducts(): number {
    return this.cartItems.length;
  }

  // cart limit is 10
  isCartFull(): boolean {
    return this.cartItems.length >= 10
  }
}