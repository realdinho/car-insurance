import React from 'react';

import MyAppBar from './components/app-bar/my-app-bar'

class App extends React.Component {
  constructor() {
    super();

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <MyAppBar />
      </div>
    )
  }
}
export default App;
