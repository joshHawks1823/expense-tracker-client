import React, { Fragment, useState, useEffect } from 'react'
import ExpensesForm from './ExpensesForm';
import ExpensesList from './ExpensesList';


const Dashboard = ({ setAuth }) => {
  const [name, setName] = useState("");

  async function getName() {
    try {
      const response = await fetch("http://localhost:4000/dashboard/", {
        method: "GET",
        headers: { token: localStorage.token }
      })

      const parseRes = await response.json();

      setName(parseRes.user_name)

    } catch (err) {
      console.error(err.message)
    }
  }

  const logout = (e) => {
    e.preventDefault()
    localStorage.removeItem("token")
    setAuth(false)
  }
  useEffect(() => {
    getName();
  }, [])

  return (
    <Fragment>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container">
          <a class="navbar-brand" href="#">Expense Tracker</a>
          <ul class="navbar-nav ms-auto d-flex align-items-center">
            <li class="nav-item">
              <span className='me-2 fs-5'>Hello {name},</span>
              <span
                className="fs-5 text-dark fw-bold" type="button" onClick={(e) => logout(e)}>Logout</span>
            </li>
          </ul>

        </div>
      </nav>
      <main className="container w-100">


        <section style={{ display: 'grid', gridTemplateColumns: "repeat(2, 1fr)", gap: "25px", margin: "1rem" }}>

          <aside>
            <ExpensesForm />
            <div className="card shadow-sm p-3 mt-2 text-light">
              <div className="card-body">
                {/* <BudgetStyle> */}
                <h3>Budget: $</h3>
                <input className='form-control' type="number" />
                {/* </BudgetStyle> */}
                <h3 className='mb-1'>Total Expenses: $</h3>
                {/* Calc Economies */}
                <h3>Economies: $</h3>
              </div>
            </div>
          </aside>
        </section>
        <section><ExpensesList /></section>

      </main>
    </Fragment>
  )
}

export default Dashboard