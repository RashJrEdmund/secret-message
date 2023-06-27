const textArea = document.getElementById('text-input')
const normalizedTxt = document.querySelector('.normalized-text')
const chunks = document.querySelector('.chunk-message')
const encodedTxt = document.querySelector('.encoded-text')
const encodeBtn = document.getElementsByTagName('button')[0]
const range = document.getElementById('range')

const handleError = () => {
  textArea.style.border = '1px solid red'
  setTimeout(() => {
    textArea.style.border = '1px solid transparent'
  }, 300)
}

textArea.addEventListener('input', (e) => {
  const text = e.target.value.replace(/[^\w]/g, '').toLowerCase()
  if (text) return (range.value = text.length)
  else return (range.value = 0)
})

const handleNormalization = () => {
  if (!textArea.value.trim()) return handleError()

  if (textArea.value.trim().length < 50) {
    return window.alert(
      'your message must be atleast 50 characters (alphabets or alphanumeric)'
    )
  }

  const normalized = textArea.value.replace(/[^\w]/g, '').toLowerCase()

  console.log('this normal', normalized)

  const cols = Math.ceil(Math.sqrt(normalized.length))

  for (let i = 0; i < cols; i++) {
    for (let j = i; j < normalized.length; j += cols) {
      chunks.innerHTML += normalized[j]
      encodedTxt.innerHTML += normalized[j]
    }
    chunks.innerHTML += '<br />'
  }

  normalizedTxt.innerHTML = normalized
  window.scrollTo(0, document.body.scrollHeight)
}

encodeBtn.addEventListener('click', handleNormalization)
