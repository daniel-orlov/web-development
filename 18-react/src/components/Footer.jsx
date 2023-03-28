const getYear = function () {
    const currentDate = new Date();

    return currentDate.getFullYear();
}

function Footer() {
    return (
        <footer>
            <div className="app-footer">
                Copyright © {getYear()}
            </div>
        </footer>
    )
}

export default Footer;