import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer>
            <p>Copyright &copy; Jaswal 2022</p>
            <Link to="/about">More Info</Link>

        </footer>
    )
};

export default Footer