export function InputMultiLine(props) {
    return (<div>
        <textarea
            name={props.name}
            onChange={props.onChange}
            value={props.value}
            placeholder={props.placeholder}
            rows={props.rows}
        />
    </div>)
}
