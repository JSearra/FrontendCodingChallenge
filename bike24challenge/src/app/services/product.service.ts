import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: any[] = [
    // The products JSON data gets loaded into here
  ];

  constructor(private http: HttpClient) { }
    // Normally this is where I would do the API call to get the products

  getProducts(): Observable<any> {
    if (this.products.length === 0) {
      return this.http.get<any[]>('assets/products.json').pipe(
        tap((products) => {
          this.products = products;
        })
      );
    } else {
      return of(this.products);
    }
  }
}