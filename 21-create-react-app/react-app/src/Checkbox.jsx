import {useReducer} from "react";

export function Checkbox() {
    const [checked, setChecked] = useReducer(checked => !checked, false, () => false);

    return (<div>
        <input id="checkbox" type="checkbox" value={checked} onChange={setChecked}/>
        <label htmlFor="checkbox">
            {checked ? "checked" : "not checked"}
        </label>
    </div>)
}