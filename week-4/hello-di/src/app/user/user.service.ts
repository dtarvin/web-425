import { User } from './user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUser(): User {
    return new User(0, "Richard", "Krasso", "1000 Galvin Road S, Bellevue, NE 68005");
  }
}
