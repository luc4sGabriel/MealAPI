import React from 'react'
import classes from './navbar.module.css'
import { Link } from 'react-router-dom'
// import {AiOutlineSearch} from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className={classes.containerNav}>
      <div className={classes.wrapper}>
        <Link className={classes.left} to={"/"}>
          Recite
        </Link>
        <ul className={classes.center}>
          
          <Link to={"/by-name"}>
          <li className={classes.listItem}>Pesquisar Receitas</li>
          </Link>

          <Link to={"/by-letter"}>
          <li className={classes.listItem}>Receitas por Letra</li>
          </Link>

          <Link to={"/ingredients"}>
          <li className={classes.listItem}>Receitas por igredientes</li>
          </Link>

        </ul>
        {/* <div className={classes.rigth}>
          <input type='text' placeholder='Search...'/>
          <AiOutlineSearch />
        </div> */}
      </div>
    </div>
  )
}

export default Navbar