
import './css/index.css';

import Home from './pages/Home'
import Favorite from './pages/Favorites';
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import { MovieProvider } from './contexts/MovieContext';


function App() {
  return (
    <MovieProvider>

    <div>
      <NavBar></NavBar>

    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favorites' element={<Favorite />} />
      </Routes>
    </main>
    </div>
    </MovieProvider>
  )
}



export default App
