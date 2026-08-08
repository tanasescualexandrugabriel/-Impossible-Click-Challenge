# 🎯 Win 1M$ - The Untouchable Button

Un mini-joc web în care butonul "Click for 1M$!" fuge de mouse de fiecare dată când te apropii de el. Cu cât încerci mai mult să-l prinzi, cu atât devine mai agresiv (schimbă culoare, text și "atitudine"), până când — dacă reușești imposibilul — câștigi 1.000.000 $ (virtuali 😄).

## 🕹️ Demo

Deschide `index.html` în orice browser modern. Nu necesită server sau instalare.

## ✨ Funcționalități

- Butonul fuge la fiecare `mouseover`, calculând o poziție random sigură pe ecran
- Scor live: numărul de încercări ratate
- Evoluție progresivă a butonului (text + culoare) la anumite praguri de scor (5, 12, 20, 35 încercări)
- Efecte vizuale: shake pe ecran, flash, animații Animate.css
- Confetti + alertă de succes dacă reușești să dai click pe buton
- Buton de "Play Again" pentru resetare completă

## 📁 Structura proiectului

```
├── index.html      # Structura paginii (Bootstrap 5)
├── style.css       # Stiluri custom (gradient animat, efecte)
├── script.js       # Logica principală a jocului
├── utils.js        # Funcții ajutătoare (poziționare, evoluția butonului)
├── .gitignore
├── LICENSE
└── README.md
```

## 🛠️ Tehnologii folosite

- HTML5 / CSS3 / JavaScript vanilla
- [Bootstrap 5.3](https://getbootstrap.com/) — layout și componente UI
- [Animate.css](https://animate.style/) — animații (wobble, fadeIn)
- [Google Fonts – Poppins](https://fonts.google.com/specimen/Poppins)
- Confetti.js — efect de confetti la victorie

## 🚀 Rulare locală

```bash
git clone https://github.com/username/win1m-button.git
cd win1m-button
# deschide index.html direct în browser, sau folosește un live server:
npx serve .
```

