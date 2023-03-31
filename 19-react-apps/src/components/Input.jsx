export function Input(props) {
    return (
        <div>
            <input type={props.type} placeholder={props.placeholder} onChange={props.onChangeHanlder} name={props.name}
                   value={props.value}/>
        </div>
    )
}
