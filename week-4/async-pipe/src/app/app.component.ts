import { UserService } from './user.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Component({
  selector: 'app-root',
  template: `
    <br /><br />
    <div class="container">
      <div class="row">
        <div class="col">
          <h2>Famous Composers</h2>
          <ul>
            <li *ngFor="let user of users | async">
              {{ user.firstName }} {{ user.lastName }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styles: [``],
  providers: [UserService]
})
export class AppComponent {

  users: Observable<User[]>;
  title: AppComponent;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
  }
}
