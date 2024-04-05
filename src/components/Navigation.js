import React from 'react';

const Navigation = () => {
  return (
    <nav className="navigation">
    <div className='leftSec'>
        <ul className="nav-list">
            <li className="nav-item">Logo</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Community</li>
            <li className="nav-item">Our Menu</li>
            <li className="nav-item">Recipes</li>
        </ul>
    </div>
    <div className='rightSec'>
        <ul className="nav-list">
            <li className="nav-item">Contact</li>
            <li className="nav-item">Login</li>
        </ul>
    </div>
    </nav>
  );
}

export default Navigation;
