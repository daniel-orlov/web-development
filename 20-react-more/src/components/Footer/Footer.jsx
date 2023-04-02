export function Footer(props) {
    return (<>
            <footer>
                <p>
                    &copy; {getYear()} {props.name}'s Kitchen
                </p>
            </footer>
        </>)
}

function getYear() {
    return new Date().getFullYear();
}