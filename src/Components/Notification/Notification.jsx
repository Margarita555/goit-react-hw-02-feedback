import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Notification.module.css';

class Notification extends Component {
  
  render() {
  return (
    <div className={s.notification}>
     {this.props.message}
    </div>
  );}
}
Notification.propTypes = {
  message: PropTypes.string.isRequired
}

export default Notification;