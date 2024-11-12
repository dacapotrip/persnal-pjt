import Headers from './components/Layout/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './components/Layout/MainPage';
import InfoMain from './components/Information/InfoMain';
import PostWrite from './components/Community/PostWrite';
import Board from './components/Community/Board';
import PostView from './components/Community/PostView';
import Login from './components/membership/Login';
import Join from './components/membership/Join';
import { AuthProvider } from './context/Context';
import BreweryInfo from './components/Brewery/BreweryInfo';


function App() {
  return (
    <AuthProvider>
    <div style={{backgroundColor: 'black'}}>
    <BrowserRouter>
      <Headers/>
      <Routes>
        <Route path='/' element={<MainPage/>}></Route>
        <Route path='/info' element={<InfoMain/>}></Route>
        <Route path='/board/:boardType' element={<Board/>}></Route>
        <Route path='/write' element={<PostWrite/>}></Route>
        <Route path='/board/:boardType/:id' element={<PostView />} ></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Join' element={<Join/>}></Route>
        <Route path='/Breweryinfo' element={<BreweryInfo/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
    </AuthProvider>
  );
}

export default App;
