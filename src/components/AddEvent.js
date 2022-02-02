import { useState } from "react";

const AddEvent = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [date, setDate] = useState('')
    const [place, setPlace] = useState('')
    const [reminder, setReminder] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();

        if (!text) {
            alert('Add a task before submitting')
            return
        }

        onAdd({ text, date, place, reminder })

        setText('')
        setDate('')
        setPlace('')
        setReminder(false)
    }
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className="form-control">
                <label>Event</label>
                <input type="text" placeholder="Add Event"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Date & Time</label>
                <input type="text" placeholder="Add Date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Place</label>
                <input type="text" placeholder="Add Location"
                    value={place}
                    onChange={(e) => setPlace(e.target.value)}
                />
            </div>
            <div className="form-control form-control-check">
                <label>Reminder</label>
                <input type="checkbox"
                    checked={reminder}
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                />
            </div>

            <input className="btn btn-block" type='submit' value='Save Event' />
        </form>
    )

};

export default AddEvent
