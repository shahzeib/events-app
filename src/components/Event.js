import { FaTimes } from 'react-icons/fa'

const Event = ({ event, onDelete, onToggle }) => {
  return (
    <div
      className={`event ${event.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => onToggle(event.id)}>
      <h3>{event.text} <FaTimes style={{
        color: 'red',
        cursor: 'pointer'
      }} onClick={() => onDelete(event.id)} /></h3>
      <p>{event.date}</p>
      <p>{event.place}</p>

    </div>
  )

};

export default Event
