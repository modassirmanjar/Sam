import logo from './logo.svg';
import './App.css';
import Header from './Components/Header.jsx';
import SideBar from './Components/SideBar.jsx';

import 'semantic-ui-css/semantic.min.css';
function App() {
  return (
    <div id="App">
      <span id='side'><SideBar/></span>
      <span id='head'><Header/></span>
     
    </div>
  );
}

export default App;
