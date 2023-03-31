export function InputOneLine(props) {
    return (<div>
        <input type={props.type} placeholder={props.placeholder} onChange={props.onChange} name={props.name}
               value={props.value}/>
    </div>)
}
