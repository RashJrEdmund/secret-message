const textArea = document.getElementById("text-input");
const normalizedTxt = document.querySelector(".normalized-text");
const chunks = document.querySelector('.chunk-message');
const encodedTxt = document.querySelector('.encoded-text')
const encodeBtn = document.getElementsByTagName('button')[0];

const handleError = () => {
    textArea.style.border = '1px solid red'
    setTimeout(() => {
        textArea.style.border = '1px solid transparent'
    }, 300);
}

const handleNormalization = () => {
    if (!textArea.value.trim()) return handleError();
    const textHolder = [];

    normalizedTxt.innerHTML = [...textArea.value.trim()].forEach(letter => {
        if((/[a-zA-Z0-9]/).test(letter)) textHolder.push(letter);
    });
}

encodeBtn.addEventListener('click', handleNormalization)