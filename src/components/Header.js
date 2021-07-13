import React from 'react';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="home">
                    <img src="https://s2.svgbox.net/octicons.svg?ic=home-fill&color=ffffff" width="40" height="40"/> 
                </div>
                <div className="customization">
                    <div class="custom-container">
                        <div className = "add-wallet">
                            <img src="https://s2.svgbox.net/octicons.svg?ic=credit-card-bold&color=ffffff" width="32" height="32"/>
                            <p>Add Wallet</p>
                        </div>
                        <img class="custom" src="https://s2.svgbox.net/octicons.svg?ic=question-bold&color=9EA1C9" width="32" height="32"/>
                        <img class="custom" src="https://s2.svgbox.net/octicons.svg?ic=gear-bold&color=9EA1C9" width="32" height="32"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;

