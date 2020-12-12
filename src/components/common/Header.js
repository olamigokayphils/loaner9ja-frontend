import {Fragment} from "react"
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <Fragment>
        <div className="navbar">
            <ul className="navlinks">
                <Link className="no-deco" to="/"><li className="logo">
                    Loaner<span className="logo9">-9ja</span>
                </li>
                </Link>
                <li className="navlinks--item">About us</li>
                <li className="navlinks--item">Contact</li>
                <li className="navlinks--item">Career</li>
            </ul>

            <ul className="navauth">
                <Link className="no-deco" to="/auth/login" ><li className="navauth--link">Login</li></Link>
                <Link className="no-deco" to="/auth/register" ><li className="navauth--link">Signup</li></Link>
            </ul>
        </div>

        <div className="navbar-mobile">
        <ul className="navlinks">
                <li className="logo">
                    Loaner<span className="logo9">-9ja</span>
                </li>
                {/* <li className="navlinks--item"><i class="fas fa-list-ul"></i></li> */}
            </ul>
        </div>
        </Fragment>
        
    )
}
