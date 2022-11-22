import './ActorCard.css'

export default function ActorCard({ actor }) {
  return (
    <div className='ActorCard card'>
      <div className='card-img-overlay actor-card-text'>
        <h4 className='text-center'>{actor}</h4>
      </div>
    </div>
  )
}
