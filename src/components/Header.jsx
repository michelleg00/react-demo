import { NavLink } from "react-router-dom";

export default function Header() {
    const links = [
        { target: "/", displayName: "mg" },
        { target: "/about", displayName: "About" },
        { target: "/work", displayName: "Work" },
        { target: "/contact", displayName: "Contact" }

    ]
    return (
        <header>
            <nav className="flex gap-4 p-4">
                {links.map((link, index) => (
                    <NavLink 
                        to={link.target}
                        className={({ isActive }) => `
                        ${index === 0 ? "font-canobis" : ""}
                        ${isActive
                                ? "text-white cursor-default underline decoration-2 underline-offset-8"
                                : ""} 
                        ${index === 0 &&
                                "mr-auto"}
                        `}
                    >
                        {link.displayName}
                    </NavLink>
                ))}
            </nav>
        </header>
    )
}