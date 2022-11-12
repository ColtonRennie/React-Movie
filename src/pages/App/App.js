import './App.css'
import { Routes, Route } from 'react-router-dom'
import ActorListPage from '../ActorListPage/ActorListPage'
import LoginPage from '../LoginPage/LoginPage'
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage'
import MovieListPage from '../MovieListPage/MovieListPage'

function App() {
  return (
    <main className='App'>
      <NavBar />
      {user ? (
        <>
          <Routes>
            <Route path='/actors' element={<ActorListPage />} />
            <Route path='/movies/:movieName' element={<MovieDetailPage />} />
            <Route path='/' element={<MovieListPage />} />
          </Routes>
        </>
      ) : (
        <LoginPage path='/' />
      )}
    </main>
  )
}

export default App
