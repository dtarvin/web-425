import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Fix } from './fix';

@Injectable()
export class FixService {

  fixes: Fix[] = [
    {id: 1, name: "Password Reset", price: "39.99", checked: false},
    {id: 2, name: "Spyware Removal", price: "99.99", checked: false},
    {id: 3, name: "RAM Upgrade", price: "129.99", checked: false},
    {id: 4, name: "Software Installation", price: "49.99", checked: false},
    {id: 5, name: "Tune-up", price: "89.99", checked: false},
    {id: 6, name: "Keyboard Cleaning", price: "45.00", checked: false},
    {id: 7, name: "Disk Clean-up", price: "149.99", checked: false},
  ];

  constructor() { }

  getFix(): Observable<Fix[]> {
    return of(this.fixes);
  }
}
