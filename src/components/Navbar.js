import React from 'react';

function Navbar(props) {
  return (
    <div>
      <nav className="nav">
        <div className="left-div">
          <img
            src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
            alt="logo"
          />
        </div>
        <div className="search-container">
          <img
            src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
            alt="search-icon"
            className="search-icon"
          />
          <input placeholder="search" />
          <div className="search-results">
            <ul>
              <li className="search-results-row">
                <img
                  src="https://img.icons8.com/external-linector-lineal-color-linector/344/external-avatar-man-avatar-linector-lineal-color-linector-1.png"
                  alt="user-dp"
                />
                <span>John Doe</span>
              </li>
              <li className="search-results-row">
                <img
                  src="https://img.icons8.com/external-linector-lineal-color-linector/344/external-avatar-man-avatar-linector-lineal-color-linector-1.png"
                  alt="user-dp"
                />
                <span>John Doe</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-nav">
          <div className="user">
            <img
              src="https://img.icons8.com/external-linector-lineal-color-linector/344/external-avatar-man-avatar-linector-lineal-color-linector-1.png"
              alt="user-dp"
              className="user-dp"
            />
            <span>John Doe</span>
          </div>
          <div className="nav-links">
            <ul>
              <li>Log in</li>
              <li>Log out</li>
              <li>Register</li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
