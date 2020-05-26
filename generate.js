function generate() {
    let begin = Number(document.getElementById('begin').value)
    let end = Number(document.getElementById('end').value)

    let array = generateArray(begin, end)
    shuffleArray(array)

    document.getElementById('output').innerHTML = formatAsText(array)
    qrcode.clear()
    try {
        qrcode.makeCode(formatAsText(array))
    } catch (e) {
        let error = document.getElementById('error')
        error.innerText = "內容過長，無法製成 QRCode"
        window.setTimeout(() => error.innerText = "", 2000)
    }
}

function generateArray(begin, end) {
    let array = []
    for (let i = begin; i <= end; i++) {
        array.push(i)
    }
    return array
}

function shuffleArray(array) {
    let number = array.length
    for (let i = 0; i < number; i++) {
        let randomNumber = Math.floor(Math.random() * (number - i)) + i
        let swap = array[i]
        array[i] = array[randomNumber]
        array[randomNumber] = swap
    }
}

function formatAsHTML (array) {
    let result = ''
    for (let i = 0; i < array.length; i++) {
        result += `<p>${i+1}: ${array[i]}</p>`
    }
    return result
}

function formatAsText (array) {
    let result = ''
    for (let i = 0; i < array.length; i++) {
        result += `${i+1}: ${array[i]}\n`
    }
    return result
}