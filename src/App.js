import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar>
        <Home></Home>

      </Navbar>
    </div>
  );
}

export default App;
