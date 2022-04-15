import React from 'react'
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
  <Link to="/homeComp" className="navbar-brand" href="#">Multiplex</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex align-items-center justify-content-between" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a to="/homeComp" className="nav-link active text-uppercase" aria-current="page">Home</a>
        </li>
        <li className="nav-item">
          <a to="/movies" class="nav-link text-uppercase">Movies</a>
        </li>
        <li className="nav-item">
          <a to="/halls" class="nav-link text-uppercase">Halls</a>
        </li>
        <li className="nav-item">
          <Link to="/signin" class="nav-link text-uppercase">SignIn</Link>
        </li>
        <li className="nav-item">
          <Link to="/signup" class="nav-link text-uppercase">SignUp</Link>
        </li>
        <li className="nav-item">
          <a to="/profile" class="nav-link text-uppercase">Profile </a>
        </li>
      </ul>
        <form class="d-flex" style={{width : "40%"}}>
            <input class="form-control search-input" type="search" placeholder="Search" aria-label="Search" style={{width : "60%"}}/>
            <button class="btn btn-outline-success my-0 ml-2" type="submit" style={{width : "40%"}}>Search</button>
        </form>
    </div>
  </div>
</nav>
        </div>
    </div>
  )
}

export default Home