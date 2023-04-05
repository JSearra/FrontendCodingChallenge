import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private shoppingCart: Product[] = [];
  private maxCartSize: number = 10;

  private shoppingCartSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  constructor() { }

  public addProductToCart(product: Product, quantity: number): void {
    if (this.shoppingCart.length >= this.maxCartSize) {
      alert('Your cart is full.');
      return;
    }

    const existingProduct = this.shoppingCart.find(p => p.id === product.id);

    if (existingProduct && existingProduct.quantity + quantity > existingProduct.maxAmount) {
      alert(`You can't add more than ${existingProduct.maxAmount} of this item to your cart.`);
      return;
    }

    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      this.shoppingCart.push({
        ...product,
        quantity
      });
    }

    this.shoppingCartSubject.next(this.shoppingCart);
  }

  public removeProductFromCart(productId: number): void {
    this.shoppingCart = this.shoppingCart.filter(product => product.id !== productId);
    this.shoppingCartSubject.next(this.shoppingCart);
  }

  public deleteCart(): void {
    this.shoppingCart = [];
    this.shoppingCartSubject.next(this.shoppingCart);
  }

  public getShoppingCart(): BehaviorSubject<Product[]> {
    return this.shoppingCartSubject;
  }

  public getCartTotal(): number {
    return this.shoppingCart.reduce((total, product) => total + (product.price * product.quantity), 0);

  }

}
