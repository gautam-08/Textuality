import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">{props.home}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.about}</Link>
              </li>
              
            </ul>
            <div className='d-flex'>
              <div className="bg-primary rounded mx-2" onClick={() => { props.toggle('primary') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
              <div className="bg-warning rounded mx-2" onClick={() => { props.toggle('warning') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
              <div className="bg-danger rounded mx-2" onClick={() => { props.toggle('danger') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
              <div className="bg-success rounded mx-2" onClick={() => { props.toggle('success') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
              <div className="bg-white rounded mx-2" onClick={() => { props.toggle('white') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
              <div className="bg-secondary rounded mx-2" onClick={() => { props.toggle('secondary') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.prototype = {
  title: PropTypes.string,
  home: PropTypes.string
};
