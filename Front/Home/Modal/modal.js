const openModal = (operation) => {
    document.getElementById('modal-overlay').style.display = 'flex'
    showTitle(operation)
}

const showTitle = (operation) => {
    let text_cash = document.getElementById('text-cash')

    if(operation == 1) {
        text_cash.innerText = 'Adicionar Fundo'
    } else {
        text_cash.innerText = 'Realizar Compra'
    }
}

const loading = (div) => {
    let inputs = document.getElementsByClassName('name-input')
    let radio = document.getElementById('type-of-payment')
    let button = document.getElementById('send-payment')
    

    for(let i = 0; i < inputs.length; i++){
        inputs[i].style.visibility = 'hidden'
    }

    radio.style.visibility = 'hidden'
    button.style.visibility = 'hidden'
    div.style.display = 'block'
   

    div.classList.add('loading')
}

const positiveFeedback = (div) => {
    let inputs = document.getElementsByClassName('name-input')
    let radio = document.getElementById('type-of-payment')
    let button = document.getElementById('send-payment')
    let check = document.getElementById('check')
    

    div.classList.remove('loading')
    div.classList.add('load-successfuly')
    div.style.display = 'flex'
    check.style.display = 'block'

    setTimeout(() => {

        for(let i = 0; i < inputs.length; i++){
            inputs[i].style.visibility = 'visible'
        }

        radio.style.visibility = 'visible'
        button.style.visibility = 'visible'
        div.style.display = ''
        div.classList.remove('load-successfuly')
        closeModal()
    }, 2500)
}

const negativeFeedback = (div) => {
    let inputs = document.getElementsByClassName('name-input')
    let radio = document.getElementById('type-of-payment')
    let button = document.getElementById('send-payment')
    let x_error = document.getElementById('x-error')

    div.classList.remove('loading')
    div.classList.add('load-error')
    div.style.display = 'flex'
    div.style.paddingTop = '0'
    x_error.style.display = 'block'

    setTimeout(() => {

        for(let i = 0; i < inputs.length; i++){
            inputs[i].style.visibility = 'visible'
        }

        radio.style.visibility = 'visible'
        button.style.visibility = 'visible'
        div.style.display = ''
        div.classList.remove('load-error')
    }, 2500)
}

const addTransaction = () => {
    let load = document.getElementById('load')

    loading(load)
    // Faz a parte de back

    
    setTimeout(() => {
        // positiveFeedback(load)
        negativeFeedback(load)
    }, 2000)
}

const closeModal = () => {
    document.getElementById('modal-overlay').style.display = 'none';
}



