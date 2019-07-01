import { Component, OnInit } from '@angular/core';
import { Joke } from '../model/joke';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.sass']
})
export class JokeListComponent implements OnInit {
  jokeList: Joke[];

  constructor() {
    this.jokeList = [
      new Joke('sadf asdfas fdasd', 'dsfsd dsfsf sfs sf'),
      new Joke('sadf asdfas fdasd', 'dsfsd dsfsf sfs sf'),
      new Joke('sadf asdfas fdasd', 'dsfsd dsfsf sfs sf')
    ];
  }

  ngOnInit() {
  }

  addJoke(joke) {
    this.jokeList.push(joke);
  }

  deleteJoke(joke) {
    let indexToDelete = this.jokeList.indexOf(joke);
    if (indexToDelete !== -1) {
      this.jokeList.splice(indexToDelete, 1);
    }
  }
}