const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const mainImage = document.getElementById('mainImage');
const headerText = document.querySelector('.header_text');

let noClickCount = 0;

const noTexts = [
    "No",
    "Sicura?",
    "Davvero sicura?",
    "Pensaci bene...",
    "Ultima possibilità!",
    "Dai, per favore!",
    "Non farmi piangere...",
    "Ti pregooo!",
    "Cuore mio...",
    "Non puoi dire di no!"
];

// Generate floating hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    heart.style.opacity = Math.random();
    heart.style.width = Math.random() * 20 + 10 + 'px';
    heart.style.height = heart.style.width; 
    
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);

noBtn.addEventListener('click', () => {
    noClickCount++;
    
    // Increase font size to grow the button and push the other away
    const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = `${currentSize * 1.5}px`;
    
    // Change No button text dynamically
    const textIndex = Math.min(noClickCount, noTexts.length - 1);
    noBtn.innerText = noTexts[textIndex];
});

yesBtn.addEventListener('click', () => {
    headerText.innerHTML = "Yeeee! Sapevo che avresti detto di sì! ❤️";
    mainImage.src = "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"; // Kissing bear
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
    
    // Explosion of hearts
    for(let i=0; i<50; i++) {
        setTimeout(createHeart, i * 50);
    }
});
