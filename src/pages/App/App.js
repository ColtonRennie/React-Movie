import './App.css'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../LoginPage/LoginPage'
import ActorListPage from '../ActorListPage/ActorListPage'
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage'
import MovieListPage from '../MovieListPage/MovieListPage'
import NavBar from '../../components/NavBar/NavBar'

import { movies } from '../../data'

function App() {
  const [user, setUser] = useState(null)
  const [movieList] = useState(movies)

  const login = (name) => {
    setUser(name)
  }

  const actorList = []

  movieList.map((movie) => {
    return movie.cast.forEach((cast) => {
      return actorList.push(cast)
    })
  })
  const uniqueActorList = Array.from(new Set(actorList))

  return (
    <main className='App'>
      {user ? (
        <>
          <NavBar user={user} />
          <Routes>
            <Route path='/' element={<MovieListPage movieList={movieList} />} />
            <Route
              path='/movies/:movieName'
              element={<MovieDetailPage movies={movieList} />}
            />
            <Route
              path='/actors'
              element={<ActorListPage actorList={uniqueActorList} />}
            />
          </Routes>
        </>
      ) : (
        <LoginPage login={login} />
      )}
    </main>
  )
}

export default App
