import React, { Fragment } from 'react'

const Dashboard = ({ setAuth }) => {
  return (
    <Fragment>
      <h1>Home</h1>
      <button onClick={() => setAuth(false)}>Logout</button>
    </Fragment>
  )
}

export default Dashboard