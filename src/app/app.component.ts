import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'customers';
  isLoggedIn: boolean = false;

  loggedIn: boolean = false;
  isAdmin: boolean = false;
  isUser: boolean = false;
  isRegistering: boolean = false;
  username: string = '';
  password: string = '';
  newUsername: string = '';
  newPassword: string = '';
  users: User[] = [
    { id: 1, name: 'User 1', email: 'user1@example.com' },
    { id: 2, name: 'User 2', email: 'user2@example.com' },
    { id: 3, name: 'User 3', email: 'user3@example.com' }
  ];
  selectedUser: User | null = null;
  editingUser: User | null = null;
  login() {

    if (this.username.trim() === '' || this.password.trim() === '') {
      alert('Please enter username and password');
      return;
    }
    this.loggedIn = true;
    if (this.username.toLowerCase() === 'admin') {
      this.isAdmin = true;
    } else if (this.username.toLowerCase() === 'user') {
      this.isUser = true;
    } else {
      alert('Please enter valid details');
    }
  }

  register() {
    this.isRegistering = false;
  }

  showRegistrationForm() {
    this.isRegistering = true;
  }

  editUser(user: User) {
    this.editingUser = { ...user };
  }
  saveUserChanges() {
    this.editingUser = null; 
  }

  deleteUser(userId: number) {
    
  
    this.users = this.users.filter(user => user.id !== userId);
    this.selectedUser = null;
  }
  cancelEdit() {
    this.editingUser = null; 
  }

  
  logout() {
    
    this.isLoggedIn = false;
    this.username = '';
  }
  goBackToLogin() {
   
    this.isLoggedIn = false;
    this.username = '';
  }


}
interface User {
  id: number;
  name: string;
  email: string;
}
