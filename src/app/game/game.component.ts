import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../models/game';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent {
  pickCardAnimation = false;
  game: Game;

  constructor() {
    this.game = new Game();
    this.newGame();
  }
  // The constructor is not used in the video.

  takeCard() {
    this.pickCardAnimation = true;
  }

  newGame() {
    this.game = new Game();
    console.log(this.game);
    // a new game was made. The games is simlpy a new json object. You can see its class in game.ts
  }
}
