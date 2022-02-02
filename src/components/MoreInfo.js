import { Link } from 'react-router-dom'

const MoreInfo = () => {
    return (
        <div>
            <h4>This is an example React app that allows the user to keep a track of their events.</h4>
            <h4>The app utilizes and exhibits all core React fundamentals such as components, props, useState, useEffect, routes etc.</h4>
            <Link to="/">Return Home</Link>
        </div>
    )
};

export default MoreInfo
