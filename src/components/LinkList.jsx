import { Link } from "react-router-dom";

export default function LinkList() {
    return (
        <ul className="flex justify-end gap-8 pb-10">
            <li>
                <Link to="/"> Home </Link>

            </li>
            <li>
                <Link to="/aboutme"> About </Link>

            </li>
        </ul>
    )


}



