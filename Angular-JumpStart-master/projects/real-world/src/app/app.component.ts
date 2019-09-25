import { Component, OnInit } from '@angular/core';
import { UserService } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'real-world';
  constructor(private userService: UserService) {}
  ngOnInit() {
    this.userService.populate();
  }
}
