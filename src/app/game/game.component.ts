import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../models/game';
import { PlayerComponent } from '../player/player.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { MatDialogModule } from '@angular/material/dialog';
import { GameInfoComponent } from '../game-info/game-info.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    CommonModule,
    PlayerComponent,
    MatButtonModule,
    MatIconModule,
    DialogAddPlayerComponent,
    MatDialogModule,
    GameInfoComponent,
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent {
  pickCardAnimation = false;
  game!: Game;
  currentCard: string = '';
  playedCards: string[] = [];
  players: string[] = [];

  constructor(public dialog: MatDialog) {
    // this.game = new Game();
    this.newGame();
  }
  // The constructor is not used in the video.

  takeCard() {
    if (!this.pickCardAnimation) {
      this.pickCardAnimation = true;
      this.currentCard = this.game.stack.pop() || '';
      // current card is either a string with the cards image source or undefined
      // alternative to pop():
      // this.currentCard = this.game.stack[0];
      // this.game.stack.splice(0, 1);
      console.log('new card: ', this.currentCard);
      console.log('game: ', this.game);
      if (this.game.currentPlayer < this.game.players.length - 1) {
        this.game.currentPlayer++;
      } else {
        this.game.currentPlayer = 0;
      }

      setTimeout(() => {
        this.game?.playedCards.push(this.currentCard);
        this.pickCardAnimation = false;
        // this.showPlayedCards();
      }, 1000);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);
    dialogRef.afterClosed().subscribe((name: string) => {
      this.game.players.push(name);
    });
  }

  // showPlayedCards() {}

  newGame() {
    this.game = new Game();
    console.log(this.game);
    // a new game was made. The games is simlpy a new json object. You can see its class in game.ts
  }
}
