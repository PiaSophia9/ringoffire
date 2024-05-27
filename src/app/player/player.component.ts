import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from '../game/game.component';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [CommonModule, GameComponent, DialogAddPlayerComponent],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss',
})
export class PlayerComponent {
  players: string[] = [];
  game: GameComponent | undefined;
  @Input() name: string = '';
  @Input() playerActive: boolean = false;

  constructor() {
    // this.game = new GameComponent();
  }
}
