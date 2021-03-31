import React from 'react';
import { Link } from 'react-router-dom';

export default function Layout(props) {
  return (
    <div>
      <h3>Functional Foods</h3>
      <Link to='/register'>Login/Register</Link>
      {props.children}
    </div>
  )
}
