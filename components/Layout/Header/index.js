import React, { Component } from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import ActiveLink from 'components/ActiveLink';
import styles from './styles';

class Header extends Component {
  render() {
    return (
      <div className="aa">
            <ul className ="nav2">
              <li className = "nav2LiLeft">
                <a className = "a2123">

                    Fury
                </a>
              </li>
              
              <li className = "nav2Li">
                <a className = "a2">
                  HOME
                </a>
              </li>

              <li className = "nav2Li">
                <a className = "a2">
                  DEMO
                </a>
              </li>

              <li className = "nav2Li">
                <a className = "a2">
                  Header
                </a>
              </li>

              <li className = "nav2Li">
                <a className = "a2">
                  PAGES
                </a>
              </li>

              <li className = "nav2Li">
                <a className = "a2">
                  ELEMENTS
                </a>
              </li>
              
              <li className = "nav2Li">
                <a className = "a2">
                  BLOG
                </a>
              </li>
              
              <li className = "nav2Li">
                <a className = "a2">
                  CONTACT
                </a>
              </li>
          </ul>
        
        <style jsx>{styles}</style>
      </div>
    );
  }
}

export default Header;
