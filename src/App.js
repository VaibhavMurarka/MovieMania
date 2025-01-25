import './App.css';
import { HashRouter as Router,  Routes, Route} from 'react-router-dom';
import {Header} from '../src/components/header/Header'
import {Watched} from '../src/components/list/Watched'
import {Watchlist} from '../src/components/list/Watchlist'
import {Add} from '../src/components/add/Add'
import { GlobalProvider } from '../src/context/GlobalState';


function App() {
  return (
    <GlobalProvider>
      
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Watchlist/>}/>
        <Route exact path="/watched" element={<Watched/>}/>
        <Route exact path="/add" element={<Add/>}/>
      </Routes>
    </Router>
    </GlobalProvider>
  );
}

export default App;
