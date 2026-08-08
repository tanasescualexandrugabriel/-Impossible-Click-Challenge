const buton = document.getElementById("crazy-btn");
const textScor = document.getElementById("score");
const interfataJoc = document.getElementById("game-ui");
const alertaSucces = document.getElementById("success-alert");

let scorFugi = 0;

// Logica stabilă de fugă la mouseover
buton.addEventListener("mouseover", () => {
    scorFugi++;
    textScor.innerText = scorFugi;

    // Calculăm exact coordonatele în pixeli
    const coordonate = calculeazaPozitieNoua(buton.offsetWidth, buton.offsetHeight);

    // Aplicăm noile poziții. Eliminăm transformarea CSS inițială de centrare
    buton.style.transform = "none";
    buton.style.left = coordonate.x + "px";
    buton.style.top = coordonate.y + "px";

    // Adăugăm efectul de tremur din Animate.css
    buton.classList.add("animate__wobble");
    setTimeout(() => buton.classList.remove("animate__wobble"), 200);

    // Schimbăm clasa Bootstrap dinamic conform utils.js
    const evolutie = obtineEvolutieButon(scorFugi);
    if (evolutie) {
        buton.innerText = evolutie.text;
        // Reaplicăm clasele de bază Bootstrap + clasa nouă din evoluție
        buton.className = `btn ${evolutie.clasa} btn-lg shadow-lg position-absolute rounded-pill px-5 py-3 fw-bold border-3 border-white animate__animated`;
        
        // Flash rapid pe ecran
        document.body.classList.add("flash-white");
        setTimeout(() => document.body.classList.remove("flash-white"), 200);
    }
});

// Logica de click (dacă utilizatorul reușește să îl prindă)
buton.addEventListener("click", () => {
    document.body.classList.add("quake-effect");
    interfataJoc.classList.add("d-none");
    buton.classList.add("d-none");
    alertaSucces.classList.remove("d-none");

    confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 }
    });
});

// Resetarea completă în starea inițială Bootstrap
function reseteazaJocul() {
    scorFugi = 0;
    textScor.innerText = scorFugi;
    document.body.classList.remove("quake-effect");
    
    alertaSucces.classList.add("d-none");
    interfataJoc.classList.remove("d-none");
    
    // Resetare la clasa Bootstrap originală (btn-info)
    buton.className = "btn btn-info btn-lg shadow-lg position-absolute rounded-pill px-5 py-3 fw-bold border-3 border-white animate__animated";
    buton.innerText = "Click for 1M$! 🎯";
    
    // Revenire în centrul ecranului
    buton.style.top = "65%";
    buton.style.left = "50%";
    buton.style.transform = "translate(-50%, -50%)";
    buton.classList.remove("d-none");
}
