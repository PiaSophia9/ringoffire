import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../models/game';
import { PlayerComponent } from '../player/player.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent {
  pickCardAnimation = false;
  game: Game;
  currentCard: string = '';
  playedCards: string[] = [];
  players: string[] = [];

  constructor() {
    this.game = new Game();
    this.newGame();
  }
  // The constructor is not used in the video.

  takeCard() {
    if (!this.pickCardAnimation) {
      this.pickCardAnimation = true;
      this.currentCard = this.game?.stack.pop() || '';
      // current card is either a string with the cards image source or undefined
      // alternative to pop():
      // this.currentCard = this.game.stack[0];
      // this.game.stack.splice(0, 1);
      console.log('new card: ', this.currentCard);
      console.log('game: ', this.game);
      setTimeout(() => {
        this.game.playedCards.push(this.currentCard);
        this.pickCardAnimation = false;
        // this.showPlayedCards();
      }, 1000);
    }
  }

  // showPlayedCards() {}

  newGame() {
    this.game = new Game();
    console.log(this.game);
    // a new game was made. The games is simlpy a new json object. You can see its class in game.ts
  }
}
