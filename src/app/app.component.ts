import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BoardComponent } from './game/board/board.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BoardComponent, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  gameMode: string = 'local';
  serverUrl: string = '';
  isConnected: boolean = false;
  message: string = '';
  gameStarted: boolean = false;

  onGameModeChange() {
    this.isConnected = this.gameMode === 'local';
  }

  connectToServer() {
    if (this.serverUrl) {
      // Aquí se podría validar la conexión al servidor WebSocket
      this.isConnected = true;
    }
  }

  startGame() {
    console.log(this.gameMode, this.isConnected, this.gameMode === 'local' || (this.gameMode === 'online' && this.isConnected))
    if (this.gameMode === 'local' || (this.gameMode === 'online' && this.isConnected)) this.gameStarted = true;
    else {
      this.message = 'Please check your connection to the server or change the game mode to local';
    }
  }
}
