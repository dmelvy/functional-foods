import React from 'react'
import { Link } from 'react-router-dom';
import "./Layout.css";
import Search from '../components/Search';

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div className="header">
      <header>
      
        <Link to="/food_items"><p className="logo">Functional Foods</p></Link>
        <p className="headline">Is the food you eat funky or fresh?</p>
        <div className="chef"></div>
        <div id="hamnav">
        <label htmlFor="hamburger">&#9776;</label>
        <input type="checkbox" id="hamburger" />
        <div id="hamitems">
        {
          currentUser ?
            <>
                  <p>{currentUser.username}</p>
                  <Link to='/food_items'>Foods</Link>
                  <Link to='/effects'>Effects</Link>
              <a onClick={handleLogout}>Logout</a>
            </>
                :
            <>
                <Link to='/signin'>Sign in/Sign up</Link>
                <Link to='/food_items'>Foods</Link>
                  <Link to='/effects'>Effects</Link>
            </>
        }
          </div>
        </div>
        
        </header>
        {props.children}
    </div>
  )
}
