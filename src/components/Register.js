import React, { Fragment, useState } from 'react'

const Register = ({ setAuth }) => {

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: ""
  });

  const { email, password, name } = inputs;

  const onChange = e => {
    setInputs({
      ...inputs, [e.target.name]: e.target.value
    })
  }

  const onSubmitForm = async (e) => {
    e.preventDefault()

    try {

      const body = { email, password, name }

      const response = await fetch("http://localhost:4000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" }
        ,
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
        <h1 className='mt-5'>Register</h1>
        <form onSubmit={onSubmitForm} action="" className='mt-5'>
          <div class="mb-3">
            <input type="email"
              name="email"
              placeholder="email"
              class="form-control"
              value={email}
              onChange={e => onChange(e)} />
          </div>
          <div class="mb-3">
            <input
              type="password"
              name="password"
              placeholder="password"
              class="form-control"
              value={password}
              onChange={e => onChange(e)} />
          </div>
          <div class="mb-3">
            <input
              type="text"
              name="name"
              placeholder="name"
              class="form-control"
              value={name}
              onChange={e => onChange(e)} />
          </div>
          <div class="d-grid">
            <button
              type="submit"
              class="btn btn-primary btn-block">
              Submit
            </button>

          </div>
        </form>

      </div>
    </Fragment>
  )
}

export default Register