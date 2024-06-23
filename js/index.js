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
        "May you always have that shining smile like today!",
        "YOU are a person who deserves to be celebrated.",
        "I hope your birthday is filled with laughter and joy.",
        "Wishing you a day full of love and happiness on your special day.",
        "I hope you have a wonderful day.",
        "Wishing you a day of endless smiles and unforgettable moments."
    ];

    const wait = 2500;

    new TypeWriter(txtElement, words, wait);
}