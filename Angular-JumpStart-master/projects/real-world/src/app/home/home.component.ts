import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit() {}
}
