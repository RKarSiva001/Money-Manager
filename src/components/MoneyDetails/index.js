// Write your code here
import {Component} from 'react'
import './index.css'

class MoneyDetails extends Component {
  render() {
    const {bal, inc, exp} = this.props

    return (
      <div className="money-details">
        <div className="balance-container">
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
          />
          <p>Your Balance</p>
          <p data-testid="balanceAmount">Rs {bal}</p>
        </div>
        <div className="income-container">
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
          />
          <p>Your Income</p>
          <p data-testid="incomeAmount">Rs {inc}</p>
        </div>
        <div className="expenses-container">
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
          />
          <p>Your Expenses</p>
          <p data-testid="expensesAmount">Rs {exp}</p>
        </div>
      </div>
    )
  }
}

export default MoneyDetails
