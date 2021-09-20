const Keyboard = {
    elements: {
        main: null,
        container: null
    },

    load(){
    this.elements.main = document.createElement("div");
    this.elements.container = document.createElement("div");
    
    this.elements.main.classList.add("keyboard");
    this.elements.container.classList.add("keyboard__keys");
    this.elements.container.appendChild(this.create());

    this.elements.main.appendChild(this.elements.container);
    document.body.appendChild(this.elements.main);
    }
}