// Write your code here
import {Component} from 'react'
import {v4} from 'uuid'
import TransactionItem from '../TransactionItem'
import MoneyDetails from '../MoneyDetails'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    transactionsList: [],
    titleInput: '',
    amountInput: '',
    transactionInputType: transactionTypeOptions[0].optionId,
    totalBalance: 0,
    totalIncome: 0,
    totalExpenses: 0,
  }

  onChangeTitleInput = event => {
    this.setState({
      titleInput: event.target.value,
    })
  }

  onChangeAmountInput = event => {
    this.setState({
      amountInput: event.target.value,
    })
  }

  onChangeTransactionTypeInput = event => {
    this.setState({
      transactionInputType: event.target.value,
    })
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {
      titleInput,
      amountInput,
      transactionInputType,
      transactionsList,
      totalBalance,
      totalIncome,
      totalExpenses,
    } = this.state

    const newTransaction = {
      id: v4(),
      title: titleInput,
      amount: amountInput,
      transactionType: transactionInputType,
    }

    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
      titleInput: '',
      amountInput: '',
      transactionTypeInput: transactionTypeOptions[0].displayText,
    }))

    console.log(newTransaction)
    console.log(transactionsList)
    console.log(
      titleInput,
      amountInput,
      transactionInputType,
      totalBalance,
      totalIncome,
      totalExpenses,
    )

    // if (transactionInputType === transactionTypeOptions[0].optionId) {
    //   this.setState(prevState => {
    //     totalIncome: prevState.totalIncome + amountInput
    //   })
    //   this.setState({totalBalance: totalIncome - totalExpenses})
    // } else {
    //   this.setState(prevState => {
    //     totalExpenses: prevState.totalExpenses + amountInput
    //   })
    //   this.setState({totalBalance: totalIncome - totalExpenses})
    // }
  }

  deleteTransaction = id => {
    const {transactionsList} = this.state
    const filteredTransactionData = transactionsList.filter(
      eachTransaction => eachTransaction.id !== id,
    )

    this.setState({
      transactionsList: filteredTransactionData,
    })
  }

  render() {
    const {
      titleInput,
      amountInput,
      transactionTypeInput,
      transactionsList,
      totalBalance,
      totalIncome,
      totalExpenses,
    } = this.state

    return (
      <div className="app-container">
        <div className="transaction-container">
          <h1 className="app-heading">Hi, Richard</h1>
          <p>Welcome back to your Money Manager</p>
          <MoneyDetails
            bal={totalBalance}
            inc={totalIncome}
            exp={totalExpenses}
          />
          <div className="transaction-inputs">
            <h1>Add Transaction</h1>
            <form className="form" onSubmit={this.onAddTransaction}>
              <label htmlFor="title">TITLE</label>
              <input
                type="text"
                id="title"
                className="name-input"
                placeholder="TITLE"
                value={titleInput}
                onChange={this.onChangeTitleInput}
              />
              <label htmlFor="amount">AMOUNT</label>
              <input
                type="text"
                id="amount"
                className="name-input"
                placeholder="AMOUNT"
                value={amountInput}
                onChange={this.onChangeAmountInput}
              />
              <p>Type</p>
              <select
                onChange={this.onChangeTransactionTypeInput}
                value={transactionTypeInput}
              >
                {transactionTypeOptions.map(eachOption => (
                  <option
                    key={eachOption.optionId}
                    value={eachOption.optionId}
                    className="option"
                  >
                    {eachOption.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="add-button">
                Add
              </button>
            </form>
          </div>

          <h1>History</h1>
          <ul className="transaction-list">
            <li>
              <p>Title</p>
              <p>Amount</p>
              <p>Type</p>
            </li>
            <hr />
            {transactionsList.map(eachTransaction => (
              <TransactionItem
                key={eachTransaction.id}
                transactionDetails={eachTransaction}
                deleteTransaction={this.deleteTransaction}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default MoneyManager
