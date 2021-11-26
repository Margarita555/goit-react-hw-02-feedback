import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

class Statistics extends Component {
  
  render() {
  return (
    <div className={s.statistics}>
          <h2 className={s.title}>Statistics</h2>
          <ul className={s.list}>
            <li className={s.item}>Good:<span className={s.value}>{this.props.good }</span> </li>
            <li className={s.item}>Neutral:<span className={s.value}>{this.props.neutral }</span></li>
            <li className={s.item}>Bad:<span className={s.value}>{this.props.bad}</span></li>
            <li className={s.item}>Total:<span className={s.value}>{this.props.total}</span></li>
            <li className={s.item}>Positive feedback:<span className={s.value}>{this.props.positivePercentage + '%'}</span></li>
          </ul>
    </div>
  );}
}
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}

export default Statistics;