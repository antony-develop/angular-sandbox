import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  user: User = this.getClearUser();
  users: User[];
  showExtanded: boolean = false;
  loaded: boolean = false;
  enableAdd: boolean = true;
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;
  

  constructor(private UserService: UserService) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    setTimeout(() => {
      this.UserService.getUsers().subscribe(data => {
        this.users = data;
        this.loaded = true;
      });
      
    }, 1000);
  }

  getClearUser(): User {
    return {
        firstName: '',
        lastName: '',
        email: ''
    }
  }

  onSubmit({value, valid}: {value: User, valid: boolean}) {
    if (valid) {
      const user = value;
      user.registered = new Date();
      user.isActive = true;
      user.showDitails = false;
      this.UserService.addUser(user);

      this.form.reset();
    } else {
      console.log('Form is invalid');
    }
  }

  

}
