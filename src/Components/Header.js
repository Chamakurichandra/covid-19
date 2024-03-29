import React from 'react';
import {Link} from 'react-router-dom';
export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
  <div className="container-fluid">
    <a className="navbar-brand text-white fw-bold">Covid-19 Indian Tracker</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
            <Link to='/' className='text-decoration-none'>
          <div className="nav-link active text-white" aria-current="page" >Home</div>
          </Link>
        </li>
        <li className="nav-item">
            <Link to='/graphs' className='text-decoration-none'>
          <div className="nav-link text-white">Graphs</div>
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
