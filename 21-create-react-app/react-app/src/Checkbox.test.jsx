import {render} from "@testing-library/react";
import {Checkbox} from "./Checkbox";
import {act} from "react-dom/test-utils";

test("Checkbox component renders, default is 'not checked'", () => {
    const {getByText} = render(<Checkbox/>);
    const label = getByText("not checked");
    expect(label).toHaveTextContent("not checked");
});

test("Checkbox component renders, we can switch it to 'checked'", () => {
    const {getByText} = render(<Checkbox/>);
    const label = getByText(/not checked/i);
    expect(label).toHaveTextContent("not checked");
    const checkbox = getByText("not checked").previousSibling;

    act(() => {
        checkbox.dispatchEvent(new MouseEvent("click", {bubbles: true}));
    });

    expect(label).toHaveTextContent("checked");
});