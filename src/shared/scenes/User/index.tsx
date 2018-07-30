import * as React from 'react';
import Form from './Form';

class App extends React.Component<any>{
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <h2>Welcome to the Book Store</h2>
        </div>
        <div>
          <p className="App-intro">
            To get started, edit fill out the form data and submit to save.
            </p>
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
