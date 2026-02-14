// Fonction qui affiche un bouton partage sur l'écran

function sharePage(e) {
    e.preventDefault(); // Empêche de remonter en haut de page
    if (navigator.share) {
        navigator.share({
            title: 'Mon Linktree',
            url: window.location.href
        }).catch(console.error);
    } else {
        // Plan B si le navigateur ne supporte pas le partage
        navigator.clipboard.writeText(window.location.href);
        alert("Lien copié dans le presse-papier !");
    }
}

// Fonction qui va changer le texte quand l'utilisateur clique sur la photo

function gererChangementTexte() {
    const image = document.getElementById('profile-pic');
    const texte = document.getElementById('desc');

    const texteOriginal = "⌨️ Je m'entraîne à coder tous les jours<br>et j'aime la boxe. 🏅";
    const texteBoxe = "Esquive, jab, uppercut ! 🥊";

    if (image && texte) {
        image.addEventListener('click', function () {
            if (navigator.vibrate) navigator.vibrate(50); // Vibre pendant 50 millisecondes

            if (texte.innerHTML === texteOriginal) {
                texte.innerHTML = texteBoxe;
            } else {
                texte.innerHTML = texteOriginal;
            }
        });
    }
}

// Fonction pour basculer le mode de couleur de la page

function basculerMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
    const bouton = document.querySelector('.theme-btn');
    if (body.classList.contains("dark-mode")) {
        bouton.innerText = "🌕";
    } else {
        bouton.innerText = "🌒";
    }
}

gererChangementTexte();