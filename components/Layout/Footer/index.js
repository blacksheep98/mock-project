import React, { PureComponent } from 'react';
import styles from './styles';
import { black } from 'ansi-colors';

export default class Footer extends PureComponent {
  render() {
    return (
      <footer className = "footer">
        <div className =  "test">
          <div className="row">
            <div className="column">
              <p className = "columnStyle1">
                <b>Fury</b>
              </p>

              <br />

              <p>
                Nam liber tempor cum soluta nobis eleifend <br />
                they option congue is nihil imper per tem por <br />
                legere is me velit doming vulputate.
              </p>
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

        <br />

        <div className = "copyRight">
          <p className = "copyRightP">
            Copyright 2017 - Created by EchoTheme
          </p>
        </div>
        <style jsx>{styles}</style>
      </footer>
    );
  }
}
