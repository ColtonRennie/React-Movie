import { Link } from 'react-router-dom'
import './MovieCard.css'

export default function MovieCard({ movie }) {
  return (
    <Link to={`/movies/${movie.title}`}>
      <div className='MovieCard'>
        <img
          className='card-img-top'
          src={`${movie.posterPath}`}
          alt='https://picsum.photos/200/200/?'
        />
        <div className='card-body'>
          <h5 className='title card-title'>{movie.title}</h5>
          <h6 className='card-text'>{movie.releaseDate}</h6>
        </div>
      </div>
    </Link>
  )
}
