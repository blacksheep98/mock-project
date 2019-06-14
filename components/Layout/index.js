import React, { Component } from 'react';
import _ from 'lodash';
import Header from 'components/Layout/Header';
import Footer from 'components/Layout/Footer';
import styles from './styles';

class Layout extends Component {
  state = {
    width: 0,
    height: 0,
    mode: 'desktop',
  };

  updateDimensions = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
      mode: window.innerWidth > 1087 ? 'desktop' : 'mobile',
    });
  };

  componentDidMount = () => {
    this.updateDimensions();
    window.addEventListener('resize', _.throttle(this.updateDimensions, 500));
  };

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateDimensions);
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        {this.props.children}
        <Footer />

        <div className = "copyright">
          <p>
            Copyright 2017 - Created by <a> EchoTheme </a>
          </p>
        </div>

        <style jsx>{styles}</style>
      </React.Fragment>
    );
  }
}

export default Layout;
