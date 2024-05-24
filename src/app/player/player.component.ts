import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from '../game/game.component';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [CommonModule, GameComponent],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss',
})
export class PlayerComponent {
  players: string[] = [];
  game: GameComponent;

  constructor() {
    this.game = new GameComponent();
  }
}
