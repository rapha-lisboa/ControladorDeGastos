const fs = require('fs')
const chalk = require('chalk')

// Adiciona uma transação
const add = (description, value, type) => {
    const transactions = loadTransactions()

    const new_transaction = {
        description: description,
        value: value,
        type: type
    }

    transactions.push(new_transaction)

    saveTransactions(transactions)
}

// Lê 1 transação específica
const readOne = (description) => {
    const transactions = loadreTransactions()

    const the_chosen = transactions.find((element) => element.description === description)

    if(the_chosen){
        
    }
}

const loadTransactions = () => {
    try {
        let dataBuffer = fs.readFileSync('transactions.json')
        let dataJSON = dataBuffer.toString()
        let data = JSON.parse(dataJSON)

        return data
    } catch (e) {
        return []
    }
}

const saveTransactions = (transactions) => {
    const dataJSON = JSON.stringify(transactions)
    fs.writeFileSync('transactions.json', dataJSON)
}