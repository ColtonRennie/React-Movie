import { Link } from 'react-router-dom'

export default function NavBar({ user }) {
  return (
    <nav className='NavBar'>
      {user}
      &nbsp; | &nbsp;
      <Link to='/'>Movies List</Link>
      &nbsp; | &nbsp;
      <Link to='/actors'>Actors List</Link>
    </nav>
  )
}
