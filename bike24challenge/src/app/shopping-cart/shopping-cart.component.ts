import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  public shoppingCart: Product[] = [];

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.shoppingCartService.getShoppingCart().subscribe(shoppingCart => {
      this.shoppingCart = shoppingCart;
    });
  }

  public removeProductFromCart(productId: number): void {
    this.shoppingCartService.removeProductFromCart(productId);
  }

  public deleteCart(): void {
    this.shoppingCartService.deleteCart();
  }

}