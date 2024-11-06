import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { UserService } from '../user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-list',
  standalone: true, // Standalone component
  imports: [CommonModule], // Add CommonModule to imports
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: User[] = [];

  constructor(private userService: UserService) {
    // Fetch users from the UserService
    this.userService.getUsers().subscribe(
      data => this.users = data,
      error => console.error('Error fetching users:', error)
    );
  }
}
