import React, { Component } from 'react';
import styles from './styles';

class Header extends Component {
  render() {
    return (
      <div className="aa">
            <ul className ="nav2">
              <li className = "nav2LiLeft">
                <a className = "aFury"> Fury </a>
              </li>
              
              <li className = "nav2LiLeft">
                <a className = "a2"> HOME </a>
              </li>

              <li className = "nav2LiLeft">
                <a className = "a2"> DEMO </a>
              </li>

              <li className = "nav2LiLeft">
                <a className = "a2"> Header </a>
              </li>

              <li className = "nav2LiLeft">
                <a className = "a2"> PAGES </a>
              </li>

              <li className = "nav2LiLeft">
                <a className = "a2"> ELEMENTS </a>
              </li>
              
              <li className = "nav2LiLeft">
                <a className = "a2"> BLOG </a>
              </li>
              
              <li className = "nav2LiLeft">
                <a className = "a2"> CONTACT </a>
              </li>

              <div className = "navbar-burger burger">
                <span />
                <span />
                <span />
              </div>
          </ul>

          
        
        <style jsx>{styles}</style>
      </div>
    );
  }
}

export default Header;
