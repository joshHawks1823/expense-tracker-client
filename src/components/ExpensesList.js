import React from 'react'
import { FaTrash } from "react-icons/fa"


export default function ExpensesList({ clearItems, expense = [] }) {
  return (
    <>
      <ul className="list">
        {/* <ExpenseItem/> */}
      </ul>
      {expense.length > 0 ? (
        <button className="btn btn-danger d-flex align-items-center justify-content-center gap-2" style={{ margin: '1rem' }} onClick={clearItems}><FaTrash /> Clear all expenses</button>) : null}
    </>
  )
}
