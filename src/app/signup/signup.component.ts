import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  email: string = '';
  name : string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';

  constructor() { }

  signup() {
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match';
      return;
    }

    const userData = { email: this.email, password: this.password , name :this.name};
    localStorage.setItem('userData', JSON.stringify(userData));
    console.log('Signup successful');
  }
}
