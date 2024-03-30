import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(private router: Router) {}

  login(username: string, password: string) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: { username: string; password: string; }) => u.username === username && u.password === password);

    if (user) {
      console.log('Login successful:', username);
      this.router.navigateByUrl('/tabs/tab2'); // Use a rota correta para a Tab2
    } else {
      console.log('Login failed: User not found or password incorrect');
    }
  }

  onLoginFormSubmit() {
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
    this.login(username, password);
  }
}


/*
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

}
*/
