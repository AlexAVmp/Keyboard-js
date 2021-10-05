import letters from "./buttons.js";

const languages = {
    ru: "ru",
    en: "en",
}

const lang = languages.ru;

const main = document.createElement('main');
document.body.appendChild(main);
main.classList.add('main');

const textArea = document.createElement('textarea');
document.body.appendChild(textArea);
textArea.classList.add('text-area')
textArea.setAttribute('cols', 100);

const keyboard = document.createElement('div');
main.appendChild(keyboard);
main.classList.add('keyboard');

let line = document.createElement('div');

letters.forEach((element) => {
    const button = document.createElement('button');
    button.classList.add(element.code);
    button.classList.add(element.type);
    button.classList.add(element.width);
    button.innerHTML = element.text[lang];

    const lastButtonLine = element.code;
    if (lastButtonLine === 'Backquote' || lastButtonLine === 'Tab' || lastButtonLine === 'CapsLock' || lastButtonLine === 'ShiftLeft' || lastButtonLine === 'ControlLeft') {
        line = document.createElement('div');
        keyboard.appendChild(line);
        line.classList.add('line')
    }
    line.appendChild(button);
})

textArea.addEventListener('blur', () => {
    textArea.focus();
});
textArea.focus();

const capsLock = document.querySelector('.CapsLock');
const caseButton = document.querySelectorAll('button');

textArea.addEventListener('keyup', (el) => {
    
})
