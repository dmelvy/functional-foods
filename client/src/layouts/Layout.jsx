import React from 'react'
import { Link } from 'react-router-dom';

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div>
      <header>
        <Link to="/"><h1>Functional Foods</h1></Link>
        {
          currentUser ?
            <>
              <p>{currentUser.username}</p>
              <button onClick={handleLogout}>Logout</button>
            </>
            :
            <Link to='/signin'>Sign in/Sign up</Link>
        }
      </header>
      <hr />
      {currentUser && (
        <>
          <Link to='/foods'>Foods</Link>
          <Link to='/effects'>Effects</Link>
          <hr />
        </>
      )}
      {props.children}
    </div>
  )
}
