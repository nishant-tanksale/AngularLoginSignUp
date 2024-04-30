import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMessage: string = '';

  constructor(private router: Router) { } // Inject Router

  login(formData: any) {
    const email = formData.email;
    const password = formData.pswd;

    // Retrieve user data from local storage
    const userDataString = localStorage.getItem('userData');
    if (!userDataString) {
      this.errorMessage = 'No user found';
      return;
    }
    console.log(userDataString);
    const userData = JSON.parse(userDataString);

    // Check if email matches the stored email
    if (userData.email !== email) {
      this.errorMessage = 'Email does not match';
      return;
    }

    // Check if password matches the stored password
    if (userData.password !== password) {
      this.errorMessage = 'Invalid password';
      return;
    }

    // Clear error message if validation passes
    this.errorMessage = '';

    // Navigate to '/profile' path
    this.router.navigate(['/profile']);
  }
}
