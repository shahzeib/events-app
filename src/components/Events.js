import Event from "./Event";

const Events = ({ events, onDelete, onToggle }) => {
    return (
        <>
            {events.map((evt) => (
                <Event key={evt.id} event={evt} onDelete={onDelete} onToggle={onToggle} />

            ))}
        </>
    )
};

export default Events
