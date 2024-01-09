const getName = () => {
    let name = 'Raphael'
    let welcome = document.getElementById('welcome')
    
    welcome.innerHTML = 'Seja bem-vindo, <strong>' + name + '</strong>'
}

const showCredit = () => {
    let credit_qtd = 1020.04
    let credit = document.getElementById('credit')

    credit.innerHTML = credit_qtd.toFixed(2)
}

const showDebit = () => {
    let debit_qtd = 1200.10
    let debit = document.getElementById('debit')
    
    debit.innerHTML = debit_qtd.toFixed(2)
}

const showTotal = () => {
    let credit_qtd = document.getElementById('credit')
    let debit_qtd = document.getElementById('debit')
    let total = document.getElementById('total')
    let total_qtd = parseFloat(credit_qtd.textContent) + parseFloat(debit_qtd.textContent)
    
    total.innerHTML = total_qtd.toFixed(2)
}

getName()

showCredit()

showDebit()

showTotal()
