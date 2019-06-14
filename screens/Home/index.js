import React, { PureComponent } from 'react';
import styles from './styles';
import _ from 'lodash';

import Logo from "./image/1_1.jpg";
import Logo2 from "./image/1_3.jpg";
import { black } from 'ansi-colors';

const array = [
  {title: <img src={Logo} style = {{width: 350, height: 250}}/>},
  {title: <img src={Logo2} style = {{width: 350, height: 250}}/>},
  {title: <img src={Logo} style = {{width: 350, height: 250}}/>},
  {title: <img src={Logo2} style = {{width: 350, height: 250}}/>},
  {title: <img src={Logo} style = {{width: 350, height: 250}}/>},
  {title: <img src={Logo2} style = {{width: 350, height: 250}}/>},
  {title: <img src={Logo} style = {{width: 350, height: 250}}/>},
  {title: <img src={Logo2} style = {{width: 350, height: 250}}/>},
  {title: <img src={Logo} style = {{width: 350, height: 250}}/>},
]

export default class Home extends PureComponent {
  render() {
    return (
      <div className="home full-height-min">
         <div className = "underHeader">
            <p className = "underHeaderP">
              Our Portfolio
            </p>

            <hr className = "hrS" />

            <p className = "underHeaderP2">
              You can find several product design by our professional team in this section.
            </p>
         </div>

        <div className = "bodyy">
          <div className = "ulStyle">
            <ul className = "ulMidBody">
              <div className = "liStyle">
                <li className = "liMidBody">
                  <a className = "aStyle">
                    All work
                  </a>
                </li>

                <li className = "liMidBody">
                  <a className = "aStyle">
                    Branding
                  </a>
                      
                </li>

                <li className = "liMidBody">
                  <a className = "aStyle">
                    Consulting
                  </a>
                    
                </li>

                <li className = "liMidBody">
                  <a className = "aStyle">
                    Corporate
                  </a>
                </li>
              </div>
            </ul>
          </div>

          <div className = "container full-height-min">
            {
              _.map(array, (item, index) => {
                return <div key={index} className="column">
                  <div className="inner">
                    {item.title}
                  </div>
                </div>
              })
            }
           
          </div>

            <hr className = "hr2"/>
          
          <div className = "wantToWorkWithUs">
            <p className = "pWantToWorkWithUs">
              Want To Work With Us ?
            </p>
            <br />
            <hr className = "hr3" />
            <br />
            <p className = "pWantToWorkWithUsDesc">
              We’ve Completed More Than 500+ project for our amazing clients, if you interested?
            </p>

            <div className = "paddingButton">
              <button className = "bStyle">
                Get A Qoute
              </button>
            </div>
          </div>

        </div>
          
        <style jsx>{styles}</style>
      </div>
    );
  }
}
