import { Link } from "react-router-dom";

export default function LinkList() {
    return (
        <ul>
            <li>
                <Link to="/"> Home </Link>

            </li>
            <li>
                <Link to="./pages/AboutMe"> About </Link>

            </li>
        </ul>
    )


}



