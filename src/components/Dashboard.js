import React, { Fragment, useState, useEffect } from 'react'

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
      <div className="container w-50">
        <h1>Home {name}</h1>

        <button
          class="btn btn-info" onClick={(e) => logout(e)}>Logout</button>

      </div>
    </Fragment>
  )
}

export default Dashboard