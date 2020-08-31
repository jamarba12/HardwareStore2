import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  Users: User[] = [];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<User[]>(baseUrl + 'api/Users').subscribe(result => {
      this.Users = result;
    }, error => console.error(error));
  }
}

interface User {
  User_id: number;
  User_names: string;
  User_surnames: string;
  User_nick: string;
  Passwd: string;
  UserEmail: string;
}
