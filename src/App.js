import { Component } from 'react';
import Section from './Components/Section/Section';
import Statistics from './Components/Statistics/Statistics';
import FeedbackOptions from './Components/Feedback/FeedbackOptions';
import Notification from './Components/Notification/Notification';


class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
 
  onLeaveFeedback = (value) => {
    this.setState(prevState => ({
      [value]: prevState[value] + 1
    })) 
  }

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    let total = 0;
    for (const value of values) {
      total += value
    }
    return total
  }

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if(total){
    const positivefeedback = this.state.good;
    const positiveFeedbackPercentage = Math.round(positivefeedback * 100 / total);
      return positiveFeedbackPercentage;
    }
  }

  render(){
  const total = this.countTotalFeedback()
  return (
    <div className="App">
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        {total ? <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={total}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />: <Notification message="No feedback given"/>}
        
      </Section>
    </div>
    );
  }
}

export default App;
