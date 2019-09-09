import { Injectable } from '@angular/core';
import { Repair } from './repair';
import { Observable, of } from 'rxjs';

@Injectable()
export class RepairService {

  repairs: Repair[] = [
    // {id: 1, name: "Password Reset", price: "39.99"},
    // {id: 2, name: "Spyware Removal", price: "99.99"},
    // {id: 3, name: "RAM Upgrade", price: "129.99"},
    // {id: 4, name: "Software Installation", price: "49.99"},
    // {id: 5, name: "Tune-up", price: "89.99"},
    // {id: 6, name: "Keyboard Cleaning", price: "45.00"},
    {id: 7, name: "Disk Clean-up", price: "149.99", lastName: "drago"}
  ];

  constructor() { }

  getRepair(): Observable<Repair[]> {
    return of(this.repairs);
  }
}
