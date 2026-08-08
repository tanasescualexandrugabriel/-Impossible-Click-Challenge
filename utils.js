// Calculează coordonate absolut sigure în pixeli, pe baza dimensiunilor ferestrei
function calculeazaPozitieNoua(latimeButon, inaltimeButon) {
    // Lăsăm o marjă de siguranță de 50px la margini ca să nu iasă butonul din ecran
    const limitaX = window.innerWidth - latimeButon - 50;
    const limitaY = window.innerHeight - inaltimeButon - 50;

    const x = Math.max(50, Math.floor(Math.random() * limitaX));
    const y = Math.max(50, Math.floor(Math.random() * limitaY));

    return { x, y };
}

// Returnează textele și noile clase Bootstrap pe măsură ce utilizatorul încearcă să îl prindă
function obtineEvolutieButon(scor) {
    if (scor === 5)  return { text: "Too slow for 1M$! ⚡", clasa: "btn-warning text-dark" };
    if (scor === 12) return { text: "Are you getting mad? 🧐", clasa: "btn-danger text-white" };
    if (scor === 20) return { text: "ULTRA SPEED MODE 🏎️", clasa: "btn-dark text-danger border-danger" };
    if (scor === 35) return { text: "NO MONEY FOR YOU! 🛑", clasa: "btn-secondary text-white" };
    return null;
}
