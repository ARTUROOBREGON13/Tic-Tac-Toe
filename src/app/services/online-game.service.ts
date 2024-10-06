import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OnlineGameService {

  private socket!: WebSocket;
  private messageSubject = new Subject<any>();
  public symbol: string = ''; // Stores which symbol the user uses X or O
  private currentTurn: string = 'X'; // Stores Current Turn

  message$ = this.messageSubject.asObservable();

  connect(url: string) {
    this.socket = new WebSocket(url);

    this.socket.onmessage = (event) => {
      const message = JSON.parse(event.data);

      switch (message.type) {
        case 'symbol':
          this.symbol = message.symbol; // Stores the symbol assigned by the server
          console.log(`You have been assigned: ${this.symbol}`);
          break;

        case 'turn':
          this.currentTurn = message.turn; // Updates current turn
          console.log(`It's ${this.currentTurn}'s Turn`);
          break;

          
        case 'move':
        case 'start':
        case 'reset':
            this.messageSubject.next(message); // Either Notifies that the game started, handles the turn/move made by player or resets boards
          break;
        
        default:
          console.log(message.message); // Other messages
          break;
      }
    };
  }

  sendMove(index: number) {
    if (this.symbol === this.currentTurn) {
      const message = { type: 'move', moveIndex: index, turn: this.symbol };
      this.socket.send(JSON.stringify(message));
    } else {
      console.log("It's not your turn");
    }
  }

  reset(){
    const message = { type: 'reset' };
    this.socket.send(JSON.stringify(message));
  }
}
