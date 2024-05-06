import React from 'react'
import style from "./style.module.css"
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div id={style.nav}>
      <Link to="/">Create Employee</Link>
      <Link to="/user">Employees</Link>
    </div>
  )
}

export default Home
