const customStyle = {
    color: "pink",
    border: "2px black solid"
}

function BorderedText() {
    return (
        <p style={customStyle}>Some bordered pink text that is hard to read</p>
    )
}

export default BorderedText;