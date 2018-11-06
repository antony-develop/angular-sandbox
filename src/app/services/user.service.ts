import { Injectable } from '@angular/core';
import { User } from '../models/User';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];
  data: Observable<any>;

  constructor() { 
    this.populateUsers();
  }

  private populateUsers() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@mail.com',
        isActive: true,
        registered: new Date('2016.11.05 05:13:00'),
        showDitails: false
      },
      {
        firstName: 'Will',
        lastName: 'Smith',
        email: 'will@mail.com',
        isActive: false,
        registered: new Date('2017.01.30 07:45:00'),
        showDitails: false
      },
      {
        firstName: 'Sara',
        lastName: 'Conor',
        email: 'sara@mail.com',
        isActive: true,
        registered: new Date('2018.06.17 17:11:00'),
        showDitails: false
      }
    ];
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
    return true;
  }
}
