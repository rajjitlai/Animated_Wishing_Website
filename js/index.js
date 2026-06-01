class TypeWriter {
    constructor(txtElement, containerElement, words, wait = 3000, typingElement) {
        this.txtElement = txtElement;
        this.containerElement = containerElement;
        this.words = words;
        this.typingElement = typingElement;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.isDeleting = false;
        this.typingElement.style.display = 'block';
        this.initPencilPosition();
        this.type();
    }

    initPencilPosition() {
        // Initially hide the pencil until text starts appearing
        this.typingElement.style.display = 'none';
    }

    type() {
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];
<<<<<<< HEAD

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        let typeSpeed = 100;

        if (this.isDeleting) {
            typeSpeed /= 4;
            this.typingElement.setAttribute('class', 'pencil-icon erasing-animation');
        } else {
            this.typingElement.setAttribute('class', 'pencil-icon writing-animation');
        }

        // Move pencil after DOM updates (both typing and erasing)
        requestAnimationFrame(() => this.movePencilToCursor());
=======
        let typeSpeed = 100;

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
            typeSpeed = 40;
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
>>>>>>> f1b88d9f3e9b795cfae92d2c215a44f1ca5716d3

        this.txtElement.innerHTML = `<span>${this.txt}</span><i class="fas fa-pencil-alt"></i>`;
        const pen = this.txtElement.querySelector('.fas');

        if (this.isDeleting) {
            pen.classList.add('pen-flipped', 'erasing-animation');
        } else {
            pen.classList.add('writing-animation');
        }

        // Handle the end of typing: wait, then rotate, then start erasing
        if (!this.isDeleting && this.txt === fullTxt) {
<<<<<<< HEAD
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 1000;
            this.typingElement.style.display = 'none';
        } else {
            this.typingElement.style.display = 'block';
        }

        setTimeout(() => this.type(), typeSpeed);
    }

    movePencilToCursor() {
        // Only move pencil if there's text to write
        if (this.txt.length === 0) {
            this.typingElement.style.display = 'none';
            return;
        }

        this.typingElement.style.display = 'block';

        // Get text element dimensions
        const textEl = this.txtElement;
        const txtSpan = textEl.querySelector('.txt');
        const pencilWidth = 40;
        const pencilHeight = 40;
        
        // Use offset values which are relative to offsetParent (.txt-type)
        const textLeft = textEl.offsetLeft;
        
        // Get the actual width of the text content
        const textWidth = txtSpan ? txtSpan.offsetWidth : textEl.offsetWidth;
        
        // Position pencil at the baseline of the text
        // The pencil's pivot point is its bottom-right corner
        // Offset by 4px for better visual alignment with text end
        const left = textLeft + textWidth - pencilWidth + 4;
        // Position top to align pencil tip with text baseline
        const top = 8;

        this.typingElement.style.left = left + 'px';
        this.typingElement.style.top = top + 'px';
=======
            pen.classList.remove('writing-animation');
            setTimeout(() => {
                pen.classList.add('pen-flipped');
                setTimeout(() => {
                    this.isDeleting = true;
                    this.type();
                }, 700); // Delay for rotation animation
            }, this.wait);
            return; // Break the recursive chain to wait for the timeouts
        }

        if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 1000;
        }

        setTimeout(() => this.type(), typeSpeed);
>>>>>>> f1b88d9f3e9b795cfae92d2c215a44f1ca5716d3
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const txtElement = document.querySelector('.text-content');
    const containerElement = document.querySelector('.txt-type');
    const typingElement = containerElement.querySelector('.pencil-icon');
    const words = [
        "Your love, strength, and guidance have shaped me into who I am today.",
        "Wishing you a day filled with love and joy.",
        "Dad, your unwavering support and love have been my guiding light.",
        "Thank you for always being there when I needed you most.",
        "Your wisdom and kindness inspire me every day.",
    ];

    const wait = 2500;

    new TypeWriter(txtElement, containerElement, words, wait, typingElement);

    const images = document.querySelectorAll('.flip-image');
    let current = 0;

    setInterval(() => {
        images[current].classList.remove('active');
        current = (current + 1) % images.length;
        images[current].classList.add('active');
    }, 1500);
});
