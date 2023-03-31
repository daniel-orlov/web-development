function Header() {
    return (
        <header>
            <h1>{`Keepär`}</h1>
        </header>
    )
}

const greet = function () {
    const currentHours = new Date().getHours();
    if (currentHours < 12) {
        return "Good morning!";
    } else if (currentHours < 18) {
        return "Good afternoon!";
    } else {
        return "Good evening!";
    }
}

export default Header;