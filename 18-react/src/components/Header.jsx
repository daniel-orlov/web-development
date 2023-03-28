function Header() {
    return (
        <h1 className="app-header">{`${greet()} Welcome to the Keeper App`}</h1>
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