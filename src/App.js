import { useState, useEffect} from "react"
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Events from './components/Events'
import AddEvent from "./components/AddEvent"
import MoreInfo from "./components/MoreInfo"

function App() {
  const [addEventForm, setAddEventForm] = useState(false)
  const [events, setEvents] = useState([])

  useEffect(() => {
    const getEvents = async () => {
      const eventsFromApi = await fetchEvents()
      setEvents(eventsFromApi);
    }
    
    getEvents()
  }, [])

  // fetch an event from event API
  const fetchEvent = async (id) =>{
    const response = await fetch(`http://localhost:5000/events/${id}`)
    const data = await response.json()
    
    return data
  }

  // fetch events from event API
  const fetchEvents = async () =>{
    const response = await fetch('http://localhost:5000/events')
    const data = await response.json()
    
    return data
  }

  // delete event
  const deleteEvent = async (id) => {
    await fetch(`http://localhost:5000/events/${id}`,
    {
      method: 'DELETE',
    })
    setEvents(events.filter((evt) => evt.id !== id))
  }

  // toggle the reminder 
  const toggleReminder = async (id) => {
    const eventToToggle = await fetchEvent(id)
    const updatedEvent = {...eventToToggle, reminder: !eventToToggle.reminder}

    const response = await fetch(`http://localhost:5000/events/${id}`,{
      method: 'PUT',
      headers:{
        'Content-type' : 'application/json'
      },
      body: JSON.stringify(updatedEvent)  
    })

    const data = await response.json()

    setEvents(events.map((evt) => 
      evt.id === id ? {...evt, reminder: data.reminder}: evt))
  }

  // add a new event
  const addEvent = async (event) => {
    const response = await fetch('http://localhost:5000/events', {
      method: 'POST',
      headers: {
        'Content-type' : 'application/json'
      },
      body: JSON.stringify(event)
    })

    const data = await response.json()
    setEvents([...events, data])
  }

  return (
    <Router>
    <div className="container">
      <Header onAdd={()=>setAddEventForm(!addEventForm)} showAdd={addEventForm}/>
      
      <Route path='/' exact render={(props) => (
        <>
        {addEventForm && <AddEvent onAdd={addEvent}/>}
        {events.length > 0 ? (
        <Events events={events} onDelete={deleteEvent} onToggle={toggleReminder}/>
        ) : ('No events to show')
      }
        </>
      )
      } />
      <Route path='/about' component={MoreInfo}/>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
