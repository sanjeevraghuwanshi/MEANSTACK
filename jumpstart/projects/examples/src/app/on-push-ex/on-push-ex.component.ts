import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-push-ex',
  templateUrl: './on-push-ex.component.html',
  styleUrls: ['./on-push-ex.component.css']
})
export class OnPushExComponent implements OnInit {
  count: number;
  person = {
    name: 'sam'
  };
  arr = ['a'];
  constructor() {}

  ngOnInit() {
    this.count = 5;
    setTimeout(() => {
      this.person.name = 'ram';
    }, 5000);
    setTimeout(() => {
      this.person = {
        name: 'hari'
      };
    }, 6000);
    setTimeout(() => {
      // this.arr.push('b');
      let newArr = ['b', 'c'];
      this.arr = newArr;
    }, 2000);
    setTimeout(() => {
      this.count = 9;
    }, 6000);
  }
  countInc() {
    this.count++;
  }
}
