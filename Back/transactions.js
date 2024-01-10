const fs = require('fs')

// Adiciona uma transação
const add = (description, amount, type) => {
    const transactions = readAllTransactions()

    const new_transaction = {
        description: description,
        amount: amount,
        type: type
    }

    transactions.push(new_transaction)

    saveTransactions(transactions)
}

// Lê 1 transação específica
const readOneTransaction = (description) => {
    const transactions = readAllTransactions()

    const the_chosen = transactions.find((element) => element.description === description)

    if(the_chosen){
        console.log('Transação encontrada com sucesso')
        return JSON.stringify(the_chosen)
    } else {
        console.log('Esta transação não existe')
    }
}

// Lê todas as transações
const readAllTransactions = () => {
    try {
        let dataBuffer = fs.readFileSync('transactions.json')
        let dataJSON = dataBuffer.toString()
        let data = JSON.parse(dataJSON)

        return data
    } catch (e) {
        return []
    }
}

// Atualiza os valores de uma transação específica
const updateTransaction = (old_description, new_description, new_amount, new_type) => {
    let transactions = readAllTransactions()

    let transaction_id = transactions.findIndex((element) => element.description === old_description)

    transactions[transaction_id].description = new_description
    transactions[transaction_id].amount = new_amount
    transactions[transaction_id].type = new_type
    
    saveTransactions(transactions)
}

// Deleta uma transação
const deleteTransaction = (description) => {
    const transactions = readAllTransactions()

    const new_transactions = transactions.filter((element) => element.description !== description)

    if(transactions.length !== new_transactions.length){
        console.log('Transaction removed successfuly')
        saveTransactions(new_transactions)
    } else {
        console.log('Transaction description not founded')
    }

    return transactions.length !== new_transactions.length
}

const saveTransactions = (transactions) => {
    const dataJSON = JSON.stringify(transactions)
    fs.writeFileSync('transactions.json', dataJSON)
}