import Logo from "./Logo";
import Nav from "./Nav";

const links = [
    {
        name: "Login",
        link: "login",
    },
    {
        name: "Signup",
        link: "signup",
    },
    {
        name: "News",
        link: "news",
    },
    {
        name: "Contact",
        link: "contact",
    },
    {
        name: "About",
        link: "about",
    },
];

function Header() {
    return (
        <header className="i-header">
            <Logo />
            <div className="i-nav">
                {links.map((link) => (
                    <Nav key={link.name} location={`#${link.link}`}>
                        {link.name}
                    </Nav>
                ))}
            </div>
        </header>
    );
}

export default Header;
