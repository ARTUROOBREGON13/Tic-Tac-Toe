import { Component, Input } from '@angular/core';
import { OnlineGameService } from '../../services/online-game.service';
import { CommonModule } from '@angular/common';
import { SquareComponent } from '../square/square.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
  standalone: true,
  imports: [CommonModule, SquareComponent]
})
export class BoardComponent {
  squares: string[] = Array(9).fill(null);
  xIsNext: boolean = true;
  winner: string | null = null;

  @Input() isOnline: boolean = false;
  @Input() serverUrl: string = '';

  constructor(private onlineGameService: OnlineGameService) {}

  ngOnInit() {
    if (this.isOnline) {
      this.onlineGameService.connect(this.serverUrl);

      // Suscription for incoming moves
      this.onlineGameService.message$.subscribe((message: any) => {
        this.handleIncomingMove(message.moveIndex, message.symbol);
      });
    }
  }

  makeMove(index: number) {
    if (!this.squares[index] && !this.winner) {
      if (this.isOnline) {
        // Allows only the user moves
        this.onlineGameService.sendMove(index);
      } else {
        this.localMove(index);
      }
    }
  }

  handleIncomingMove(index: number, symbol: string) {
    if (!this.squares[index] && !this.winner) {
      this.squares[index] = symbol;
      this.winner = this.calculateWinner();
    }
  }

  localMove(index: number) {
    const symbol = this.xIsNext ? 'X' : 'O';
    this.squares[index] = symbol;
    this.xIsNext = !this.xIsNext;
    this.winner = this.calculateWinner();
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6], // diagonals
    ];

    for (let line of lines) {
      const [a, b, c] = line;
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }

  reset() {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
  }
}
