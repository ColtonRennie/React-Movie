import MovieCard from '../../components/MovieCard/MovieCard'
import './MovieListPage.css'

export default function MovieListPage({ movieList }) {
  return (
    <main className='MovieListPage'>
      <h1>Movie List</h1>
      <div className='flex-container'>
        {movieList &&
          movieList.map((movie, idx) => (
            <MovieCard key={idx} index={idx} movie={movie} />
          ))}
      </div>
    </main>
  )
}
