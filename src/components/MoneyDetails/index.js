// Write your code here
import {Component} from 'react'
import './index.css'

class MoneyDetails extends Component {
  state = {
    totalBalance: 0,
    totalIncome: 0,
    totalExpenses: 0,
  }

  //   const totalBalance = () => {
  //       this.setState({totalBalance = totalIncome - totalExpenses})
  //   }

  const

  render() {
    const {totalBalance, totalIncome, totalExpenses} = this.state

    return (
      <div className="money-details">
        <div className="balance-container">
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
          />
          <p>Your Balance</p>
          <p data-testid="balanceAmount">Rs {totalBalance}</p>
        </div>
        <div className="income-container">
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
          />
          <p>Your Income</p>
          <p data-testid="incomeAmount">Rs {totalIncome}</p>
        </div>
        <div className="expenses-container">
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
          />
          <p>Your Expenses</p>
          <p data-testid="expensesAmount">Rs {totalExpenses}</p>
        </div>
      </div>
    )
  }
}

export default MoneyDetails
