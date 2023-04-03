import React, { Fragment, useState } from 'react'
import { Link } from "react-router-dom"
const Login = ({ setAuth }) => {

  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });

  const { email, password } = inputs;

  const onChange = e => {
    setInputs({
      ...inputs, [e.target.name]: e.target.value
    })
  };

  const onSubmitForm = async (e) => {
    e.preventDefault()

    try {

      const body = { email, password }

      const response = await fetch("http://localhost:4000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)

      })

      const parseRes = await response.json()

      localStorage.setItem("token", parseRes.token)
      setAuth(true)

    } catch (err) {
      console.error(err.message)

    }
  }


  return (
    <Fragment>
      <div className="container w-50">
        <h1 className='mt-5'>Login</h1>
        <form onSubmit={onSubmitForm} className='mt-5'>
          <div className="mb-3">
            <input type="email"
              name="email"
              placeholder="Email"
              className="form-control"
              value={email}
              required
              onChange={e => onChange(e)}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="form-control"
              value={password}
              required
              onChange={e => onChange(e)}
            />
          </div>
          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-primary btn-block">
              Submit
            </button>
            <Link to="/register" className='text-decoration-none mt-2 fs-4'>Register</Link>
          </div>

        </form>

      </div>

    </Fragment>
  )
}

export default Login