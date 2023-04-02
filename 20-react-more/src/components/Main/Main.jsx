export function Main(props) {
    return (<>
        <section>
            Here we cook:
            <ul>
                {props.dishes.map(dish => <li key={dish.id}>{dish.title}</li>)}
            </ul>
        </section>
    </>)
}