class Block {
    constructor(element) {
        this.element = element;

        this.element.addEventListener("click", () => {
            this.element.classList.add("Block--hidden");
        });
    }
}

let blocks = document.querySelectorAll(".Block")
blocks = Array.from(blocks).map(block => new Block(block));

console.log(blocks);