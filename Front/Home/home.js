const getName = () => {
    let name = 'Raphael'
    let welcome = document.getElementById('welcome')
    
    welcome.innerHTML = 'Seja bem-vindo <strong>' + name + '</strong>'
}

getName()


const showCredit = () => {
    let credit_qtd = '1000,00'
    let credit = document.getElementById('credit')

    credit.innerHTML = 'R$ ' + credit_qtd
}

showCredit()

const showDebit = () => {
    let debit_qtd = '1000,00'
    let debit = document.getElementById('debit')

    debit.innerHTML = 'R$ ' + debit_qtd
}

showDebit()

const showTotal = () => {
    let total_qtd = '1000,00'
    let total = document.getElementById('total')

    total.innerHTML = 'R$ ' + total_qtd
}

showTotal()
