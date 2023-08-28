
import './ExpenseForm.css'
const ExpenseForm = () => {
  return (
   <form>
    <div className='new-expense__controls'>

        <div className='new-expense__control'>
            <labell>Title</labell>
            <input type='text' />
        </div>

        <div className='new-expense__control'>
            <labell>Amount</labell>
            <input type='number' min='0.01' step='0.01' />
        </div>

        <div className='new-expense__control'>
            <labell>Date</labell>
            <input type='date' min='2020-01-01' max='2023-12-31' />
        </div>

    </div>
    <div className='new-expense__actions'>
      <button type='submit'> Add Expense </button>
    </div>
   </form>
  )
}

export default ExpenseForm