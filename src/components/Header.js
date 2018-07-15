import React from 'react';
import '../static/styles/header.scss';

function Header() {
    return (
        <div className="main-header">
            <h1 className="main-header__logo">Quiz</h1>
            <div className="main-header__subtext">Machine</div>
        </div>
    );
}
export default Header;