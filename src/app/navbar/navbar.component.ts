import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      console.log("Login succeed");
    }, error => {
      console.log("Login FAIL");
    });
  }

  loggedIn() {
    const token = localStorage.getItem("token");
    return token ? true : false;
  }

  logout() {
    localStorage.removeItem("token");
    console.log("Logout");

  }

}
