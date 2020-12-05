export default function Header() {
    return (
        <div className="navbar">
            <ul className="navlinks">
                <li className="logo">
                    Loaner<span className="logo9">-9ja</span>
                </li>
                <li className="navlinks--item">About us</li>
                <li className="navlinks--item">Contact</li>
                <li className="navlinks--item">Career</li>
            </ul>

            <ul className="navauth">
                <li>Login</li>
                <li>Signup</li>
            </ul>
        </div>
    )
}
