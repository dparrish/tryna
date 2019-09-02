import {Link} from 'gatsby';
import React, {Component} from 'react'
import {connect} from 'react-redux';

import {getMenuState} from '../../store/selectors';

class Header extends Component {
  render() {
    const {
      siteTitle,
    } = this.props

    return (
      <div
    style = {
      {
        width: '100%', height: 55, marginBottom: 20, background: 'cornflowerblue',
      }
    } > <
        div
    style = {
      {
        margin: '0 auto', maxWidth: 1360, padding: '15px 18px', whiteSpace: 'nowrap',
      }
    } > <div style = {
              {
                float: 'left', marginBottom: '10px',
              }
            }><h1 style = {
              {
                margin: 0, fontSize: '1.25rem'
              }
            }>< Link
    to = '/'
    style = {
      {
        color: 'white', textDecoration: 'none',
      }
    } > {siteTitle}</Link>
            </h1></div>
        </div><
        /div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    menuOpen: getMenuState(state).open,
  }
}

export default connect(mapStateToProps) (Header);
