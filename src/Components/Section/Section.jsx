import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Section.module.css';

class Section extends Component {
  
  render() {
  return (
    <div className={s.section}>
      <h1 className={s.title}>{this.props.title}</h1>
      {this.props.children}
    </div>
  );}
}
Section.propTypes = {
  title: PropTypes.string.isRequired
}

export default Section;