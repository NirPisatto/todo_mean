import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
// import { AuthService } from '@lib/services/auth/auth.service'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  providers: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginFormGroup = new FormGroup({
    email: new FormControl<String>(''),
    password: new FormControl<String>(''),
  });

  // constructor(private authService: AuthService) { }
  ngOnInit() {
    // this.authService.pushLog();
  }

  handleLogin() {
    //   this.authService.pushLog();
  }
}
