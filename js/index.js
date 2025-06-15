class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }


    type() {
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1.5);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 2);
        }

        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        let typeSpeed = 100;

        const typingElement = document.querySelector('.fas');

        if (this.isDeleting) {
            typeSpeed /= 4;
        }

        if (this.isDeleting) {
            typingElement.className = "fas fa-pencil-alt erasing-animation";
        } else {
            typingElement.className = "fas fa-pencil-alt writing-animation";
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;
            typingElement.className = "fas fa-pencil-alt";


        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 1000;

        }

        setTimeout(() => this.type(), typeSpeed)
    }
}

document.addEventListener('DOMContentLoaded', init);

function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = [
        "Your love, strength, and guidance have shaped me into who I am today.",
        "Wishing you a day filled with love and joy.",
        "Dad, your unwavering support and love have been my guiding light.",
        "Thank you for always being there when I needed you most.",
        "Your wisdom and kindness inspire me every day.",
    ];

    const wait = 2500;

    new TypeWriter(txtElement, words, wait);
}

const images = document.querySelectorAll('.flip-image')
let current = 0

setInterval(() => {
    images[current].classList.remove('active')
    current = (current + 1) % images.length
    images[current].classList.add('active')
}, 1500)