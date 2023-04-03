import React from 'react'
import { FaPlusCircle, FaEdit } from "react-icons/fa"

export default function ExpensesForm({
  handleSubmit,
  date,
  handleDate,
  charge,
  handleCharge,
  amount,
  handleAmount,
  edit



}) {
  return (
    <form onSubmit={handleSubmit} className="card bg-primary mt-3 text-light p-3">
      <div className="mb-3">
        <label htmlFor="date" class="form-label">Date</label>
        <input type="date" class="form-control" id="date" value={date} aria-describedby="date" onChange={handleDate} />
      </div>
      <div className="mb-3">
        <label htmlFor="expense" className="form-label">Expense</label>
        <input type="text" class="form-control" id="expense" value={charge} aria-describedby="expense" placeholder='e.g. Mortgage' onChange={handleCharge} />
      </div>
      <div className="mb-3">
        <label htmlFor="amount" class="form-label">Amount</label>
        <input type="number" class="form-control" id="amount" value={amount} aria-describedby="expense" placeholder='e.g. $2000' onChange={handleAmount} />
      </div>
      <div className="d-grid gap-2 my-3">
        {edit ? (<button className='btn btn-block btn-success d-flex align-items-center justify-content-center gap-1' type='button'> <FaEdit /> Edit</button>) : (<button className=' btn btn-block btn-warning d-flex align-items-center justify-content-center gap-1' type='button'> <FaPlusCircle /> Add</button>)}

      </div>
    </form>
  )

}

