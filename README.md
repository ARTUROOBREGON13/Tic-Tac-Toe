# Tic-Tac-Toe (Client)

This is the client-side implementation of a Tic-Tac-Toe game built with Angular. The game allows two players to play locally or over a WebSocket connection to a server for online gameplay.

## Features

- Play Tic-Tac-Toe locally against another player.
- Option to play online by connecting to a WebSocket server.
- Real-time game updates when playing online.
- Simple UI with a board and square components.
- Display a win message for the winning player.

## Prerequisites

- Node.js (version 14 or above)
- Angular CLI (version 18.2.4)
- NPM (version 6 or above)

## Getting Started

1. Clone this repository:

```bash
git clone https://github.com/your-username/tic-tac-toe.git
```

2. Navigate into the project directory:

```bash
cd tic-tac-toe
```

3. Install the dependencies:

```bash
npm install
```

4. Run the development server:
```bash
ng serve
```

5. Open your browser and go to http://localhost:4200/ to play the game.

## How to Play

1. Choose whether you want to play locally or online.
2. If you select online mode, you must enter the WebSocket server URL and test the connection.
3. Once connected, the game board will appear.
4. Players take turns clicking on squares to place their mark (X or O).
5. The first player to align three of their marks (horizontally, vertically, or diagonally) wins.
6. Click the "Reset" button to start a new game.

## Folder Structure

- **src/app/components/board**: Contains the board component.
- **src/app/components/square**: Contains the square component.
- **src/app/services/websocket**: Manages the WebSocket connection.

## Customization

You can customize the game by editing the styles in the `src/app/` folder or modifying the game logic in the board component.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```