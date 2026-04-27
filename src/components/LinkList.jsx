import { Link } from "react-router-dom";

export default function LinkList() {
    return (
        
        <ul className="flex justify-end gap-8 pb-10">
            <li>
                <Link to="/"> </Link>
            </li>
            <li>
                <Link to="/about"> About </Link>
            </li>

            <li>
                <Link to="/work"> Work </Link>

            </li>
             <li>
                <Link to="/contact"> Contact </Link>

            </li>
        </ul>
    )


}



