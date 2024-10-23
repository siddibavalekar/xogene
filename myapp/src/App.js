// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SearchDrugs from './SearchDrugs';
import Demo1 from './Demo1';
import Search from './Search';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/drugs/search' element={<SearchDrugs/>}/>
        <Route path='/demo1' element={<Demo1/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>
    </div>
  );
}

export default App;
