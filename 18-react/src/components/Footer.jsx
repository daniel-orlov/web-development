const getYear = function () {
    const currentDate = new Date();

    return currentDate.getFullYear();
}

function Footer() {
    return (<footer>
        <p>
            Copyright © {getYear()}
        </p>
    </footer>)
}

export default Footer;