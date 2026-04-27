import { NavLink } from "react-router-dom";

export default function Header() {
    const links = [
        { target: "/", displayName: "Home" },
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
                            ${isActive 
                                ? "text-white cursor-default font-semibold" 
                                : "underline decoration-1"} 
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