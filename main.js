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
textArea.classList.add('text-area');
textArea.setAttribute('cols', 100);

const keyboard = document.createElement('div');
main.appendChild(keyboard);
main.classList.add('keyboard');

let line = document.createElement('div');

letters.forEach((key) => {
    const button = document.createElement('button');
    button.classList.add(key.code);
    button.classList.add(key.type);
    button.classList.add(key.width);
    button.innerHTML = key.text[lang];

    const lastButtonLine = key.code;
    if (lastButtonLine === 'Backquote' || lastButtonLine === 'Tab' || lastButtonLine === 'CapsLock' || lastButtonLine === 'ShiftLeft' || lastButtonLine === 'ControlLeft') {
        line = document.createElement('div');
        keyboard.appendChild(line);
        line.classList.add('line');
    }
    line.appendChild(button);
})

textArea.addEventListener('blur', () => {
    textArea.focus();
});
textArea.focus();

const capsLock = document.querySelector('.CapsLock');

textArea.addEventListener('keyup', (element) => {
    const { code } = element;

    letters.forEach((key) => {
        if (code === 'ShiftLeft' || code === 'ShiftRight'){
            letters.forEach((key) => {
                const elementButtonCode = document.querySelector(`.${key.code}`)    
                elementButtonCode.innerHTML = key.text[lang]
            })
        }
        if (code !== 'CapsLock') {
        const elementButtonCode = document.querySelector(`.${key.code}`);
            if (code === key.code) {
                elementButtonCode.classList.remove('button-active');
            }
        }
});
})

textArea.addEventListener('keydown', (element) => {
    const { code } = element;

    if (code === 'CapsLock') {
        if (capsLock.classList.contains('button-active')) {
            capsLock.classList.remove('button-active');
            letters.forEach((key) => {
                const elementButtonCode = document.querySelector(`.${key.code}`);
                elementButtonCode.innerHTML = key.text[lang];
            })
        } else {
            capsLock.classList.add('button-active');
            letters.forEach((key) => {
                const elementButtonCode = document.querySelector(`.${key.code}`);
                if (elementButtonCode.classList.contains('word') || elementButtonCode.classList.contains('alternative')) {
                    elementButtonCode.innerHTML = key.shiftText[lang];
                };
            })
        }
    }
    
    if (code !== 'CapsLock') {
        const elemButtonCode = document.querySelector(`.${code}`);
        if (elemButtonCode != null) {
            elemButtonCode.classList.add('button-active')
        }
    }

    if (code === 'Tab'){
        element.preventDefault();
        textArea.value += '   ';
    }

    if (code === 'AltLeft' || code === 'AltRight') {
        element.preventDefault();
    }

    if (code === 'ShiftLeft' || code === 'ShiftRight') {
        if (code === 'ShiftLeft'){
            document.querySelector('.ShiftLeft').classList.add('button-active');
        }
        if (code === 'ShiftRight'){
            document.querySelector('.ShiftRight').classList.add('button-active');
        }
        letters.forEach((key) => {
            const elementButtonCode = document.querySelector(`.${key.code}`)
            if (elementButtonCode.classList.contains('word') || elementButtonCode.classList.contains('alternative')) {
                elementButtonCode.innerHTML = key.shiftText[lang];
            }
        })
    }
})

const keyButton = document.querySelectorAll('button')

keyboard.addEventListener('mousedown', (element) => {
    const elementCode = element.target.textContent;

    if (element.which === 1) {
        if (elementCode === 'CapsLock') {
            if (capsLock.classList.contains('button-active')) {
                element.target.classList.remove('button-active');
                for (let i = 0; i < keyButton.length; i++) {
                    keyButton[i].innerHTML = letters[i].text[lang];
                }
            } else {
                element.target.classList.add('button-active');
                for (let i = 0; i < keyButton.length; i++) {
                    keyButton[i].innerHTML = letters[i].shiftText[lang];
                }
            }
        }
        if (elementCode === 'Tab') {
            element.preventDefault();
            textArea.value += '\n';
        }
        if (elementCode === 'ENTER') {
            textArea.value += '\t';
        }
        if (elementCode === 'Shift') {
            element.target.classList.add('button-active');
            for (let i = 0; i < keyButton.length; i++) {
                keyButton[i].innerHTML = letters[i].shiftText[lang]
            }
        }
        if (elementCode === '◄') {
            element.target.classList.add('button-active'); 
            if (textArea.selectionStart !== 0) {
                textArea.selectionStart -= 1;
                textArea.selectionEnd -= 1;
            }
        }
        if (elementCode === '►') {
            element.target.classList.add('button-active');
            if (textArea.selectionStart !== textArea.value.length) {
                textArea.selectionStart += 1;
                textArea.selectionEnd += 1;
            }
        }
        if (elementCode === '▲') {
            element.target.classList.add('button-active'); 
            if (textArea.selectionStart !== 0) {
                textArea.selectionStart -= 81;
                textArea.selectionEnd -= 81;
            }
        }
        if (elementCode === '▼') {
            element.target.classList.add('button-active');
            if (textArea.selectionStart !== textArea.value.length) {
                textArea.selectionStart += 81;
                textArea.selectionEnd += 0;
            }
        }
        if (elementCode === 'Backspace') {
            elem.target.classList.add('button-active');
             textArea.value = textArea.value.slice(0, -1);
        } else {

        }
    }
})

keyboard.addEventListener('mouseup', (element) => {
    const elementCode = element.target.outerText;
    if (elementCode !== 'CapsLock') {
      element.target.classList.remove('button-active');
    }
    if (elementCode === 'Shift') {
      for (let i = 0; i < keyButton.length; i++) {
        if (keyButton[i].textContent = letters[i].shiftText[lang]) {
          keyButton[i].innerHTML = letters[i].text[lang];
        }
      }
    }
  })

