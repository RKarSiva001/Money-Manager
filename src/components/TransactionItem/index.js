// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {id, title, amount, transactionType} = transactionDetails

  const onDeleteTransaction = () => {
    deleteTransaction(id)
  }

  return (
    <li>
      <div className="transaction-container">
        <p>{title}</p>
        <p>{amount}</p>
        <p>{transactionType}</p>
      </div>
      <button
        className="button"
        type="button"
        onClick={onDeleteTransaction}
        data-testid="delete"
      >
        <img
          className="delete"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
