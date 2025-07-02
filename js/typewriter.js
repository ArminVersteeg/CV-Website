class Typewriter {
    constructor(el, options) {
        this.el = el;
        this.words = JSON.parse(this.el.dataset.typewriter);
        this.speed = options?.speed || 150;
        this.delay = options?.delay || 1500;
        this.initTyping();
    }

    wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    toggleTyping = () => this.el.classList.toggle('typing');

    async typewrite(word, isLast = false) {
        await this.wait(this.delay);
        this.toggleTyping();
        for (const letter of [...word]) {
            this.el.textContent += letter;
            await this.wait(this.speed);
        }
        this.toggleTyping();

        if (isLast) {
            return;
        }

        await this.wait(this.delay);
        this.toggleTyping();
        while (this.el.textContent.length !== 0) {
            const chars = [...this.el.textContent];
            chars.pop();
            this.el.textContent = chars.join('');
            await this.wait(this.speed);
        }
        this.toggleTyping();
    }

    async initTyping() {
        for (let i = 0; i < this.words.length; i++) {
            const isLast = i === this.words.length -1;
            await this.typewrite(this.words[i], isLast);
            if (isLast) break;
        }
    }
}

const el1 = new Typewriter(document.querySelector('[data-typewriter]'), {
    speed: 100,
    delay: 1500,
});