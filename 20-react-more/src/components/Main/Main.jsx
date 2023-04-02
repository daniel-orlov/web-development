export function Main(props) {
    return (<>
        <section>
            <img height={200} src="https://source.unsplash.com/1600x900/?food" alt="Food"/>
            <h2>Our Menu</h2>
            <ul>
                {props.dishes.map(dish => <li key={dish.id}>{dish.title}</li>)}
            </ul>
        </section>
    </>)
}