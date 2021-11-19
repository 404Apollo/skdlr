import logo from './logo.svg';
import './App.css';

function App() {
  return(
    <div className="App" >
      <div className = "registeration" class="section">
        <h1>Registeration</h1>
        <label>Username</label>
        <br/>
        <input type="text"/>
        <br/>
        <label>Password</label>
        <br/>
        <input type="text"/>
        <br/>
        <button>Register</button>
      
      </div>
      <div className="login" class="section">
        <h1>Login</h1>
        <input type="text" placeholder="Username..."/>
        <br/>
        <input type="text" placeholder="Password..."/>
        <br/>
        <button> Login </button>
      </div>
    </div>
  )

}

export default App;