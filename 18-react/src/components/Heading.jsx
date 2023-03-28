function Heading() {
    return (
        <h1 className="heading" style={greetingStyle}>{greet()}</h1>
    )
}

let greetingStyle = {
    color: "black"
}

const greet = function () {
    const currentHours = new Date().getHours();
    if (currentHours < 12) {
        greetingStyle.color = "red";
        return "Good morning!";
    } else if (currentHours < 18) {
        greetingStyle.color = "green"
        return "Good afternoon!";
    } else {
        greetingStyle.color = "blue"
        return "Good evening!";
    }
}

export default Heading;