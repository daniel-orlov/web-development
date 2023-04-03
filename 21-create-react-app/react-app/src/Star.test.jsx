import {render} from "@testing-library/react";
import {Star} from "./Star";

test("Star component renders", () => {
    const {getByText} = render(<Star/>);
    const h1 = getByText("Cool Star");
    expect(h1).toHaveTextContent("Cool Star");
});