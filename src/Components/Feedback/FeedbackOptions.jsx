import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  
  render() {
  return (
    <div>
      {this.props.options.map(buttonName => (
        <button key={buttonName}
          className={s.button}
          onClick={() => {
          this.props.onLeaveFeedback(buttonName);
         }
        }
           type="button">{buttonName}</button>
      ))}
    </div>
  );}
}
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired
}
export default FeedbackOptions;
