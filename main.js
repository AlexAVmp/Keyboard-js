const Keyboard = {
    elements: {
        main: null,
        container: null,
        input_field: null
    },

    load(){
        this.elements.main = document.createElement("div");
        this.elements.container = document.createElement("div");
        this.elements.input_field = document.createElement("textarea");
        
        this.elements.main.classList.add("keyboard");
        this.elements.container.classList.add("keyboard__keys");
        this.elements.input_field.classList.add('keyboard__input-field');

        this.elements.container.appendChild(this.createKeys());
        this.elements.main.appendChild(this.elements.container);
        document.body.appendChild(this.elements.main);
    },

    createKeys(){
        const fragment = document.createDocumentFragment();

        let keys = [];
        if (this.properties.language === 'eng') {
            keys = this.languages.english;
        } else if (this.properties.language === 'rus') {
            keys = this.languages.rus;
        }

        const keyCodes = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0',
        'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft',
        'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon',
        'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'ArrowUp',
        'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];
    }
}