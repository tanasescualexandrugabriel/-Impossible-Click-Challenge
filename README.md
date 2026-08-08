# -Impossible-Click-Challenge
A web mini-game where the "Click for 1M$!" button runs away from your mouse every time you get close to it. The more you try to catch it, the more aggressive it becomes (changing color, text, and "attitude"), until if you manage the impossible you win $1,000,000 (virtually 😄).
# 🎯 Impossible Click Challenge

This is my second repository of Click Challenge, but updated!

A web mini-game where the "Click for 1M$!" button runs away from your mouse every time you get close to it. The more you try to catch it, the more aggressive it becomes (changing color, text, and "attitude"), until if you manage the impossible you win $1,000,000 (virtually 😄).

## 🕹️ Demo

Open `index.html` in any modern browser. No server or installation required.

## ✨ Features

- The button flees on every `mouseover`, calculating a safe random position on screen
- Live score: number of missed attempts
- Progressive button evolution (text + color) at certain score thresholds (5, 12, 20, 35 attempts)
- Visual effects: screen shake, flash, Animate.css animations
- Confetti + success alert if you manage to click the button
- "Play Again" button for a full reset

## 🧠 What I built, in more detail

The idea behind this project was to simulate an "impossible to catch" button, starting from a simple interaction (`mouseover`) and building a small game system around it.

**How it works, step by step:**

1. **Proximity detection** I use the `mouseover` event on the button (not `mousemove` on the whole screen), so every time the cursor touches the button, it "runs away".

2. **Safe random positioning** the `calculeazaPozitieNoua()` function in `utils.js` calculates a random X/Y position, but accounts for the window's dimensions and the button's size, so it never goes off-screen (50px safety margin on the edges).

3. **Progressive score and evolution** the score increases with every escape. The `obtineEvolutieButon()` function checks the thresholds (5, 12, 20, 35) and changes the button's text + CSS class (from blue `btn-info`, to `btn-warning`, `btn-danger`, up to `btn-dark`), giving the impression that the button is getting more "annoyed" over time.

4. **Visual feedback** on every escape, the `animate__wobble` class (from Animate.css) is temporarily added, along with a screen "flash" effect, so the interaction feels alive rather than static.

5. **Win condition** if the user actually manages to click the button (only possible by moving the mouse very fast or clicking at just the right moment), the game UI hides, the screen does a small "shake" (`quake-effect`), the success alert appears, and the confetti effect triggers.

6. **Full reset** `reseteazaJocul()` brings everything back to its initial state: score back to 0, button re-centered, CSS classes reset.

**What I practiced through this project:**
- DOM manipulation (dynamically changing classes, text, position)
- Coordinate calculations relative to the window (`window.innerWidth/innerHeight`)
- Structuring code across separate files (main logic vs. helper functions)
- Integrating external libraries via CDN (Bootstrap, Animate.css, Confetti.js)
- Debugging incomplete CDN links (a real issue encountered and fixed in this project — see the commit history)

## 📁 Project structure

```
├── index.html      # Page structure (Bootstrap 5)
├── style.css       # Custom styles (animated gradient, effects)
├── script.js       # Main game logic
├── utils.js        # Helper functions (positioning, button evolution)
├── .gitignore
├── LICENSE
└── README.md
```

## 🛠️ Tech stack

- HTML5 / CSS3 / vanilla JavaScript
- [Bootstrap 5.3](https://getbootstrap.com/) — layout and UI components
- [Animate.css](https://animate.style/) — animations (wobble, fadeIn)
- [Google Fonts – Poppins](https://fonts.google.com/specimen/Poppins)
- Confetti.js — confetti effect on win

## 🚀 Running locally

```bash
git clone https://github.com/username/impossible-click-challenge.git
cd impossible-click-challenge
# open index.html directly in your browser, or use a live server:
npx serve .
```


