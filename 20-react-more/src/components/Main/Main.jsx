export function Main(props) {
    return (<>
        <section>
            Here we cook:
            <ul>
                {props.dishes.map((dish, i) => <li key={i}>{dish}</li>)}
            </ul>
        </section>
    </>)
}