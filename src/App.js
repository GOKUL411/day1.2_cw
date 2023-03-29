import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Reference Datatypes use same memory</h1>
        <button onClick={window['Fun']}>Click here to call function</button>
      </header>
    </div>
  );
}

export default App;
