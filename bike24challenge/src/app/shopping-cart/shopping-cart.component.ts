import { Component, OnInit, ElementRef, Renderer2, RendererFactory2 } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.sass']
})
export class ShoppingCartComponent implements OnInit {
  private renderer: Renderer2;
  cartItems: any[] = [];

  constructor(
    rendererFactory: RendererFactory2,
    private el: ElementRef,
    private cartService: CartService
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

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

  getTotalQuantity(): number {
    return this.cartService.getTotalQuantity();
  }
  getTotalProducts(): number {
    return this.cartService.getTotalProducts();
  }

  isCartFull(): boolean {
    return this.cartService.isCartFull();
  }

  openModal(modalId: string) {
    const modalElement = this.el.nativeElement.querySelector(`#${modalId}`);
    this.renderer.addClass(modalElement, 'show');
    this.renderer.setStyle(modalElement, 'display', 'block');
  }

  closeModal(modalId: string) {
    const modalElement = this.el.nativeElement.querySelector(`#${modalId}`);
    this.renderer.removeClass(modalElement, 'show');
    this.renderer.setStyle(modalElement, 'display', 'none');
  }
}