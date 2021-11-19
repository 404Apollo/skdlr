import logo from './logo.svg';
import './App.css';

function App() {
  return(
    <div className="App">
      <div className = "registeration">
        <h1>Registeration</h1>
        <label>Username</label>
        <input type="text"/>
        <label>Password</label>
        <input type="text"/>
        <button>Register</button>
      
      </div>
      <div className="login">
        <h1>Login</h1>
        <input type="text" placeholder="Username..."/>
        <input type="text" placeholder="Password..."/>
        <button> Register </button>
      </div>
    </div>
  )

}

export default App;
  

// return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );