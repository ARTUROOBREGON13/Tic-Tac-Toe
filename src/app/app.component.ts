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
  connectionStatus: boolean = false;
  message: string = '';
  gameStarted: boolean = false;

  onGameModeChange() {
    this.gameStarted = false;
    this.message = '';
  }

  checkConnection() {
    if (!this.serverUrl) {
      this.message = 'Please, input the Server Address';
      return;
    }

    const socket = new WebSocket(this.serverUrl);

    socket.onopen = () => {
      this.connectionStatus = true;
      socket.close(); // Cerramos la conexión después de probarla
    };

    socket.onerror = (error) => {
      this.message = 'Connection could not be established';
      this.connectionStatus = false;
    };
  }

  startGame() {
    if (this.gameMode === 'local' || (this.gameMode === 'online' && this.connectionStatus)) {
      this.gameStarted = true;
      this.message = "";
    } else {
      this.message = 'Please check your connection to the server or change the game mode to local';
    }
  }
}
