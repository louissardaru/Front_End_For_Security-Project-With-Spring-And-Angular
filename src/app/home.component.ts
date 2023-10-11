//home.component.ts
import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { HttpClient } from '@angular/common/http';
import { Greeting } from './greeting.interface';

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent {

  title = 'Angular';
  greeting: Greeting = { id: '', content: '' };

  constructor(private app: AppService, private http: HttpClient) {
    http.get<Greeting>('resource').subscribe(data => this.greeting = data);
  }

  authenticated() { return this.app.authenticated; }

}