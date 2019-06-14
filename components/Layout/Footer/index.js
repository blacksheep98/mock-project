import React, { PureComponent } from 'react';
import styles from './styles';

export default class Footer extends PureComponent {
  render() {
    return (
      <footer className = "footer">
        <div className =  "test">
          <div className="row">
            <div className="column">
              <p className = "columnStyle1">
                <h2><b>Fury</b></h2>
              </p>

              <br />

              <p>
                Nam liber tempor cum soluta nobis eleifend <br />
                they option congue is nihil imper per tem por <br />
                legere is me velit doming vulputate.
              </p>

              <br />
              
              <form className = "form-style">
                <span>
                  {/* <i class="material-icons">email</i> */}
                </span>
                
                <input className = "input-style" placeholder = "Enter your email" />

                <button className = "form-button-style">
                  <a> => </a>
                </button>
              </form>
            </div>

            <div className="column">
              <p className = "columnStyle2">
                Useful Links
              </p>

              <hr className = "hrStyling" />

              <ul className = "mq">
                <li>
                  About Us
                </li>

                <li>
                  Testimonials
                </li>

                <li>
                  Pricing
                </li>

                <li>
                  Contact Us
                </li>

                <li>
                  News
                </li>
              </ul>
            </div>

            <div className="column">
              <p className = "columnStyle2">
                Contact Info
              </p>

              <hr className = "hrStyling" />

              <ul className = "mq">
                <li>
                  008. 567. 890. 634
                </li>

                <li>
                  support@echotheme.com
                </li>

                <li>
                  Melbourne, Australia
                </li>
              </ul>

            </div>
          </div>
        </div>
        <style jsx>{styles}</style>
      </footer>
    );
  }
}
