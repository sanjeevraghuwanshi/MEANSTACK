import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Joke } from '../model/joke';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.sass']
})
export class JokeComponent implements OnInit {
  @Input() joke: Joke;
  @Output() jokeDeleted = new EventEmitter<Joke>();
  constructor() { }

  ngOnInit() {
  }

  deleteJoke(joke) {
    this.jokeDeleted.emit(joke);
  }

}
