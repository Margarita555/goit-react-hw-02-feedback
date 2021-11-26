import { Component } from 'react';

import FeedbackOptions from './Components/Feedback/FeedbackOptions';



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

  render(){
  return (
    <div className="App">
 
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        
    </div>
    );
  }
}

export default App;
