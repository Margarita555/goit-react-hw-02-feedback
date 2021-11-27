import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  
  render() {
  return (
    <div>
      {this.props.options.map(label => (
        <button key={label}
          className={s.button}
          onClick={() => {
          this.props.onLeaveFeedback(label);
         }
        }
           type="button">{label}</button>
      ))}
    </div>
  );}
}
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired
}
export default FeedbackOptions;
