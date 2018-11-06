import { Component } from '@angular/core';
import { User } from '../../models/User';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: [
        './user.component.scss'
    ]
})
export class UserComponent {
    user: User;
    
    constructor() {
        this.user = {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@mail.com'
        }
    }
}