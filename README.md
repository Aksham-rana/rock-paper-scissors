# Rock Paper Scissors Game 🎮

A classic implementation of the timeless Rock Paper Scissors game built with vanilla JavaScript, HTML, and CSS. This interactive web application brings the traditional hand game to your browser with a sleek dark theme and engaging user experience.

## Features

- **Interactive Gameplay**: Click buttons or use keyboard shortcuts to make your move
- **Smart Computer Opponent**: Randomized computer moves for fair gameplay
- **Persistent Score Tracking**: Your wins, losses, and ties are saved locally
- **Auto-Play Mode**: Watch the game play itself automatically
- **Keyboard Controls**: Quick play using 'R' for Rock, 'P' for Paper, 'S' for Scissors
- **Visual Feedback**: See both your move and computer's move with emoji icons
- **Score Reset**: Clear your statistics anytime with the reset button

## How to Play

1. Choose your move by clicking one of the three buttons (Rock, Paper, or Scissors)
2. The computer will automatically make its choice
3. Results are displayed instantly along with both moves
4. Your score is tracked and saved between sessions

### Game Rules
- Rock beats Scissors
- Scissors beats Paper  
- Paper beats Rock
- Same moves result in a tie

## Keyboard Shortcuts

- `R` - Play Rock
- `P` - Play Paper
- `S` - Play Scissors

## Project Structure

```
rock-paper-scissors/
├── 12-rock-paper-scissors.html    # Main HTML file
├── 10-CSS/
│   └── 12-rock-paper-scissor.css  # Styling and theme
├── 10-JavaScript/
│   └── 12-rock-paper-scissor.js   # Game logic and interactions
└── 10-image/
    ├── rock-emoji.png
    ├── paper-emoji.png
    └── scissors-emoji.png
```

## Getting Started

1. Clone or download this repository
2. Open `12-rock-paper-scissors.html` in your web browser
3. Start playing immediately - no setup required!

## Technical Implementation

### Key JavaScript Features
- **Event Handling**: Button clicks and keyboard events
- **Local Storage**: Persistent score tracking across browser sessions
- **DOM Manipulation**: Dynamic content updates for results and moves
- **Interval Management**: Auto-play functionality with start/stop controls
- **Random Number Generation**: Fair computer move selection

### CSS Highlights
- **Dark Theme**: Modern dark background with white text
- **Responsive Buttons**: Circular move buttons with hover effects
- **Clean Typography**: Arial font family for readability
- **Visual Hierarchy**: Clear separation of game elements

## Browser Compatibility

This game works in all modern web browsers that support:
- ES6 JavaScript features
- Local Storage API
- CSS3 styling

## Future Enhancements

Some ideas for expanding this project:
- Add sound effects for moves and results
- Implement different difficulty levels
- Create tournament mode with best-of-X games
- Add animations for move reveals
- Include game statistics and win streaks

## Development Notes

This project demonstrates fundamental web development concepts including DOM manipulation, event handling, local data persistence, and clean separation of HTML, CSS, and JavaScript. The code is structured for readability and maintainability while keeping the game logic straightforward and efficient.

---

*Enjoy playing this classic game! Feel free to modify and expand upon the code to make it your own.*
